import { FC } from 'react';

interface ICookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: FC<ICookieConsentProps> = ({ onAccept, onDecline }) => {
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-dark-color text-white border-t-2 border-main-green p-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row md:items-center gap-4">
        <p className="flex-1 text-sm md:text-base">
          This site uses Google Analytics cookies to understand how visitors use
          it. Analytics are loaded only if you accept.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-white/60 hover:border-white"
            onClick={onDecline}
          >
            Decline
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-main-green font-bold hover:brightness-125"
            onClick={onAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
