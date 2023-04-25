import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div
          data-x-transition-enter="transition duration-300 ease-out"
          data-x-transition-enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          data-x-transition-enter-end="translate-y-0 opacity-100 sm:scale-100"
          data-x-transition-leave="transition duration-150 ease-in"
          data-x-transition-leave-start="translate-y-0 opacity-100 sm:scale-100"
          data-x-transition-leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6 mb-24">
              <div className="flex items-center justify-center mx-auto"></div>

              <div className="mt-5 text-center">
                <h3
                  className="text-lg font-medium text-gray-800 dark:text-white"
                  id="modal-title">
                  Thank you for your support
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                 You are now Subscribe to our newsletter for the latest health tips and lifestyle hacks, tailored just for you.
                </p>
              </div>

              <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                <button
                  onClick={() => onClose()}
                  className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
