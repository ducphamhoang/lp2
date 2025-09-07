/**
 * Section View Tracking Utility
 * 
 * This module provides functionality to track when users view specific sections
 * of the landing page using the Intersection Observer API. Events are sent to
 * Google Analytics via Google Tag Manager.
 * 
 * Features:
 * - Uses Intersection Observer for efficient viewport detection
 * - Prevents duplicate events using sessionStorage
 * - Automatically stops observing sections after they're viewed
 * - Scalable design using data attributes
 */

/**
 * Initialize section view tracking for elements with the 'track-view' class
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element that must be visible (default: 0.5)
 * @param {string} options.trackingClass - CSS class to identify trackable elements (default: 'track-view')
 */
export function initializeSectionTracking(options = {}) {
  const {
    threshold = 0.5,
    trackingClass = 'track-view'
  } = options;

  // Check if Intersection Observer is supported
  if (!window.IntersectionObserver) {
    console.warn('Intersection Observer not supported. Section tracking disabled.');
    return;
  }

  // Find all elements marked for tracking
  const trackedSections = document.querySelectorAll(`.${trackingClass}`);
  
  if (trackedSections.length === 0) {
    console.warn('No elements found with tracking class:', trackingClass);
    return;
  }

  // Configure intersection observer options
  const observerOptions = {
    threshold: threshold,
    // Add small margin to trigger slightly before element is fully visible
    rootMargin: '0px 0px -10px 0px'
  };

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        handleSectionView(entry.target, observer);
      }
    });
  }, observerOptions);

  // Start observing all tracked sections
  trackedSections.forEach(section => {
    const sectionId = section.dataset.trackingId;
    
    if (!sectionId) {
      console.warn('Section missing data-tracking-id attribute:', section);
      return;
    }

    // Check if this section has already been viewed in this session
    const hasBeenViewed = sessionStorage.getItem(sectionId);
    
    if (!hasBeenViewed) {
      observer.observe(section);
    } else {
      console.log('Section already viewed in this session:', sectionId);
    }
  });

  console.log(`Section tracking initialized for ${trackedSections.length} sections`);
}

/**
 * Handle when a section becomes visible
 * 
 * @param {HTMLElement} target - The section element that became visible
 * @param {IntersectionObserver} observer - The observer instance
 */
function handleSectionView(target, observer) {
  const sectionId = target.dataset.trackingId;
  
  if (!sectionId) {
    console.error('Section missing data-tracking-id attribute:', target);
    return;
  }

  try {
    // 1. Mark as viewed to prevent re-triggering
    sessionStorage.setItem(sectionId, 'true');
    
    // 2. Send event to Google Analytics via GTM
    sendAnalyticsEvent(sectionId);
    
    // 3. Stop observing this element to conserve resources
    observer.unobserve(target);
    
    console.log('Section view tracked:', sectionId);
    
  } catch (error) {
    console.error('Error tracking section view:', error);
  }
}

/**
 * Send section view event to Google Analytics
 * 
 * @param {string} sectionId - The unique identifier for the section
 */
function sendAnalyticsEvent(sectionId) {
  // Check if gtag is available (Google Analytics)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'section_view', {
      'section_id': sectionId,
      'event_category': 'engagement',
      'event_label': sectionId
    });
    console.log('Analytics event sent via gtag:', sectionId);
  }
  // Check if dataLayer is available (Google Tag Manager)
  else if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      'event': 'section_view',
      'section_id': sectionId,
      'event_category': 'engagement'
    });
    console.log('Analytics event sent via dataLayer:', sectionId);
  }
  // Fallback logging if neither is available
  else {
    console.warn('Google Analytics not detected. Event would be:', {
      event: 'section_view',
      section_id: sectionId
    });
  }
}

/**
 * Clear all section view tracking data from sessionStorage
 * Useful for testing or debugging
 */
export function clearTrackingData() {
  const keys = Object.keys(sessionStorage);
  const trackingKeys = keys.filter(key => key.includes('-section-viewed'));
  
  trackingKeys.forEach(key => {
    sessionStorage.removeItem(key);
  });
  
  console.log('Cleared tracking data for', trackingKeys.length, 'sections');
}