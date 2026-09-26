declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export type AnalyticsConsent = 'granted' | 'denied';

const GA_MEASUREMENT_ID = 'G-8NL9TTZQSZ';
const CONSENT_STORAGE_KEY = 'analytics-consent';

let isGoogleAnalyticsLoaded = false;

export const getStoredConsent = (): AnalyticsConsent | null => {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
};

export const storeConsent = (consent: AnalyticsConsent) => {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Storage unavailable (e.g. private mode) – consent lasts for this visit only
  }
};

export const enableGoogleAnalytics = () => {
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (isGoogleAnalyticsLoaded) return;
  isGoogleAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // gtag.js requires the `arguments` object itself, not a rest-params array
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
};

export const disableGoogleAnalytics = () => {
  // Official opt-out flag – stops gtag.js from sending any further hits
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    document.cookie = `${expired}; domain=${window.location.hostname}`;
  });
};
