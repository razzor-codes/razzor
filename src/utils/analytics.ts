import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics 4 Configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

export const useGoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
};

// Event tracking functions
export const trackEvent = (eventName: string, eventParameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParameters);
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Specific tracking functions for portfolio
export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    event_category: 'engagement',
    event_label: 'CV Download'
  });
};

export const trackProjectClick = (projectName: string) => {
  trackEvent('project_click', {
    event_category: 'engagement',
    event_label: projectName
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    event_label: 'Contact Form'
  });
};

export const trackSocialMediaClick = (platform: string) => {
  trackEvent('social_media_click', {
    event_category: 'engagement',
    event_label: platform
  });
};
