// Video optimization utilities

// Type definitions for experimental browser APIs
interface NavigatorConnection {
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
  downlink?: number;
  rtt?: number;
}

interface ExtendedNavigator extends Navigator {
  connection?: NavigatorConnection;
  mozConnection?: NavigatorConnection;
  webkitConnection?: NavigatorConnection;
  deviceMemory?: number;
}

export const videoOptimization = {
  // Check if the device supports hardware acceleration
  supportsHardwareAcceleration: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  },

  // Get optimal video quality based on device capabilities
  getOptimalVideoQuality: (): string => {
    if (typeof window === 'undefined') return 'medium';
    
    const nav = navigator as ExtendedNavigator;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    
    // Check network speed
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === '4g' || effectiveType === '3g') {
        return 'high';
      } else if (effectiveType === '2g') {
        return 'low';
      }
    }

    // Check device memory
    const deviceMemory = nav.deviceMemory;
    if (deviceMemory && deviceMemory < 4) {
      return 'low';
    }

    // Check screen size
    if (window.innerWidth < 768) {
      return 'medium';
    }

    return 'high';
  },

  // Preload video with optimal settings
  preloadVideo: (videoElement: HTMLVideoElement): Promise<void> => {
    return new Promise((resolve, reject) => {
      const handleCanPlayThrough = () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('error', handleError);
        resolve();
      };

      const handleError = () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('error', handleError);
        reject(new Error('Video preload failed'));
      };

      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.addEventListener('error', handleError);

      // Set optimal preload strategy
      videoElement.preload = 'metadata';
      videoElement.load();
    });
  },

  // Check if the user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Check if device is mobile
  isMobileDevice: (): boolean => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // Get video container dimensions for optimization
  getOptimalDimensions: (container: HTMLElement): { width: number; height: number } => {
    const rect = container.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio || 1;
    
    return {
      width: Math.ceil(rect.width * pixelRatio),
      height: Math.ceil(rect.height * pixelRatio)
    };
  }
};

// Video loading state manager
export class VideoLoadManager {
  private static instance: VideoLoadManager;
  private loadingVideos: Set<string> = new Set();
  private maxConcurrentLoads = 2;

  static getInstance(): VideoLoadManager {
    if (!VideoLoadManager.instance) {
      VideoLoadManager.instance = new VideoLoadManager();
    }
    return VideoLoadManager.instance;
  }

  async loadVideo(videoId: string, videoElement: HTMLVideoElement): Promise<void> {
    // Wait if too many videos are loading
    while (this.loadingVideos.size >= this.maxConcurrentLoads) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.loadingVideos.add(videoId);

    try {
      await videoOptimization.preloadVideo(videoElement);
    } finally {
      this.loadingVideos.delete(videoId);
    }
  }

  isLoading(videoId: string): boolean {
    return this.loadingVideos.has(videoId);
  }

  getLoadingCount(): number {
    return this.loadingVideos.size;
  }
}
