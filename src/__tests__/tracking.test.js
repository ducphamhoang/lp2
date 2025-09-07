import { describe, test, beforeEach, afterEach, expect, vi } from 'vitest';
import { initializeSectionTracking, clearTrackingData } from '../utils/tracking';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});

describe('Section Tracking', () => {
  beforeEach(() => {
    // Clear any existing tracking data
    sessionStorage.clear();
    
    // Mock console methods to avoid noise in tests
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    // Mock window.dataLayer for Google Tag Manager
    window.dataLayer = [];
    
    // Mock IntersectionObserver
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    // Clean up DOM
    document.body.innerHTML = '';
    
    // Restore console methods
    vi.restoreAllMocks();
  });

  test('should initialize tracking for elements with track-view class', () => {
    // Create a test element
    const testSection = document.createElement('section');
    testSection.className = 'track-view';
    testSection.setAttribute('data-tracking-id', 'test-section-viewed');
    document.body.appendChild(testSection);

    // Initialize tracking
    initializeSectionTracking();

    // Verify console log was called
    expect(console.log).toHaveBeenCalledWith('Section tracking initialized for 1 sections');
    
    // Verify IntersectionObserver was created
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  test('should handle missing data-tracking-id attribute', () => {
    // Create a test element without data-tracking-id
    const testSection = document.createElement('section');
    testSection.className = 'track-view';
    document.body.appendChild(testSection);

    // Initialize tracking
    initializeSectionTracking();

    // Verify warning was logged
    expect(console.warn).toHaveBeenCalledWith(
      'Section missing data-tracking-id attribute:',
      testSection
    );
  });

  test('should handle no trackable elements', () => {
    // Don't create any elements with track-view class
    
    // Initialize tracking
    initializeSectionTracking();

    // Verify warning was logged
    expect(console.warn).toHaveBeenCalledWith(
      'No elements found with tracking class:',
      'track-view'
    );
  });

  test('should use sessionStorage to prevent duplicate tracking', () => {
    // Pre-set sessionStorage to simulate already viewed section
    sessionStorage.setItem('test-section-viewed', 'true');

    // Create a test element
    const testSection = document.createElement('section');
    testSection.className = 'track-view';
    testSection.setAttribute('data-tracking-id', 'test-section-viewed');
    document.body.appendChild(testSection);

    // Initialize tracking
    initializeSectionTracking();

    // Verify the section was already viewed message
    expect(console.log).toHaveBeenCalledWith(
      'Section already viewed in this session:',
      'test-section-viewed'
    );
  });

  test('should clear tracking data correctly', () => {
    // Set some tracking data
    sessionStorage.setItem('pricing-section-viewed', 'true');
    sessionStorage.setItem('services-section-viewed', 'true');
    sessionStorage.setItem('other-data', 'keep this');

    // Clear tracking data
    clearTrackingData();

    // Verify tracking data was cleared but other data remains
    expect(sessionStorage.getItem('pricing-section-viewed')).toBeNull();
    expect(sessionStorage.getItem('services-section-viewed')).toBeNull();
    expect(sessionStorage.getItem('other-data')).toBe('keep this');
  });

  test('should handle unsupported browser gracefully', () => {
    // Remove IntersectionObserver to simulate unsupported browser
    window.IntersectionObserver = undefined;

    // Create a test element
    const testSection = document.createElement('section');
    testSection.className = 'track-view';
    testSection.setAttribute('data-tracking-id', 'test-section-viewed');
    document.body.appendChild(testSection);

    // Initialize tracking
    initializeSectionTracking();

    // Verify warning was logged
    expect(console.warn).toHaveBeenCalledWith(
      'Intersection Observer not supported. Section tracking disabled.'
    );
  });
});