import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AlertBox() {
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Get the alert status from session storage
    const hasAlertShown = sessionStorage.getItem('hasAlertShown');

    if (!hasAlertShown) {
      const timer = setTimeout(() => {
        setShowAlert(true);
        // Save the alert status in session storage
        sessionStorage.setItem('hasAlertShown', 'true');
      }, 5000); // 5 seconds

      router.events.on('routeChangeStart', closeAlert);

      return () => {
        clearTimeout(timer);
        router.events.off('routeChangeStart', closeAlert);
      };
    }
  }, [router.events]); // Add router.events to the dependency array to fix the ESLint warning

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 max-w-xl w-full m-4"
        role="alert"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fillRule="evenodd"
              />
            </svg>
          </span>

          <p className="font-medium sm:text-lg">{'New message!'}</p>
        </div>

        <p className="mt-4 text-gray-500">
          {'New to Temu? Download via our link for a $100 coupon bundle! Register with our referral code for a 50% discount!'}
          
          {'Click, sign up, and enjoy Temu\'s benefits today!'}
        </p>

        <div className="mt-6 sm:flex sm:gap-4">
          <a
            className="inline-block w-full rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-3 text-center text-sm font-semibold text-white sm:w-auto"
            href={'https://temu.to/k/usRiX8O4jpPjGfq'}
          >
            Download
          </a>

          <button
            className="mt-2 inline-block w-full rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-3 text-center text-sm font-semibold text-white sm:mt-0 sm:w-auto"
            onClick={closeAlert}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}