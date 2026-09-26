import './components/styles/common-headers.css';
import 'animate.css';

import CookieConsent from './components/cookie-consent/cookie-consent';
import Education from './sections/education/education';
import Experience from './sections/experience/experience';
import Footer from './sections/footer/footer';
import Header from './sections/header/header';
import HomeScreen from './sections/home-screen/home-screen';
import Introduction from './sections/introduction/introduction';
import Projects from './sections/projects/projects';
import { useEffect } from 'react';
import useAnalyticsConsent from './analytics/useAnalyticsConsent';

function App() {
  const {
    isConsentBannerOpen,
    openConsentBanner,
    acceptAnalytics,
    declineAnalytics,
  } = useAnalyticsConsent();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    // overflow-x-clip: entrance animations start ~2000px off-screen and would widen the page
    // (horizontal scroll on load). `clip` – unlike `hidden` – keeps the sticky header working.
    <div className="w-full flex flex-col gap-y-6 overflow-x-clip">
      <Header />
      <main className="flex flex-col gap-y-6">
        <HomeScreen />
        <Introduction />
        <div className="flex flex-col m-6 mt-2 gap-y-16 md:gap-y-24 justify-center max-w-screen-lg sm:mx-auto mx-4">
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
      <Footer onOpenCookieSettings={openConsentBanner} />
      {isConsentBannerOpen && (
        <CookieConsent
          onAccept={acceptAnalytics}
          onDecline={declineAnalytics}
        />
      )}
    </div>
  );
}

export default App;
