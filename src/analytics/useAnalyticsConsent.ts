import {
  AnalyticsConsent,
  disableGoogleAnalytics,
  enableGoogleAnalytics,
  getStoredConsent,
  storeConsent,
} from './analytics';
import { useEffect, useState } from 'react';

const useAnalyticsConsent = () => {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(
    getStoredConsent
  );
  const [isConsentBannerOpen, setConsentBannerOpen] = useState(
    consent === null
  );

  useEffect(() => {
    if (consent === 'granted') enableGoogleAnalytics();
    if (consent === 'denied') disableGoogleAnalytics();
  }, [consent]);

  const updateConsent = (value: AnalyticsConsent) => {
    storeConsent(value);
    setConsent(value);
    setConsentBannerOpen(false);
  };

  return {
    isConsentBannerOpen,
    openConsentBanner: () => setConsentBannerOpen(true),
    acceptAnalytics: () => updateConsent('granted'),
    declineAnalytics: () => updateConsent('denied'),
  };
};

export default useAnalyticsConsent;
