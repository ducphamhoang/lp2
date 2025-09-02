import { useEffect } from 'react';
import { initializeSectionTracking } from '../utils/tracking';

/**
 * Custom React hook to initialize section view tracking
 * 
 * This hook ensures that tracking is initialized once when the component mounts
 * and properly handles cleanup if needed.
 * 
 * @param {Object} options - Configuration options for tracking
 * @param {number} options.threshold - Percentage of element that must be visible (default: 0.5)
 * @param {boolean} options.enabled - Whether tracking is enabled (default: true)
 */
export function useSectionTracking(options = {}) {
  const { threshold = 0.5, enabled = true } = options;

  useEffect(() => {
    // Only initialize if tracking is enabled and we're in a browser environment
    if (!enabled || typeof window === 'undefined') {
      return;
    }

    // Small delay to ensure all components have rendered
    const timeoutId = setTimeout(() => {
      initializeSectionTracking({ threshold });
    }, 100);

    // Cleanup timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [threshold, enabled]);
}