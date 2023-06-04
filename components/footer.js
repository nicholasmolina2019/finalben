import Link from "next/link";
import React, { useState } from "react";
import Modal from "components/modal.js";
import { useForm } from "react-hook-form";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched"
  });

  const onSubmit = e => {
    //e.preventDefault(); // this line is not needed
    document.getElementById("mc-embedded-subscribe-form").submit();
    setShowModal(true);
  };

  const handleInputChange = e => {};
  return (
    <footer
      aria-label="Site Footer"
      className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Join our newsletter and stay up-to-date with the latest
            health tips and lifestyle hacks, personalized just for
            you.
            <br />
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
          <form
            action="https://gmail.us21.list-manage.com/subscribe/post?u=b8a8f5596e56a7479f4da3db1&amp;id=f0855535fd&amp;f_id=00cab2e1f0"            
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate flex flex-col md:flex-row bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40"
            target="hidden_iframe"
            noValidate> {/* Change here */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              {...register("EMAIL", {
                required: true,
                  pattern:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              })}
              onChange={handleInputChange} // Add this line
              required
            />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true">
                <input
                  type="text"
                  name="b_5cb58cb362644c57c706441f6_710cbc7828"
                  tabIndex="-1"
                  value=""
                  readOnly
                />
              </div>
              <button
              type="submit"
              onClick={onSubmit}
              className="h-10 px-4 py-2 m-1 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Subscribe
            </button>
            </form>
            <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}></iframe>
          </div>
         
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className=" text-center text-gray-500 lg:text-left lg:text-lg">
            Follow us on social media for the latest updates and news.
</p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <Link href="https://www.tiktok.com/@5benefits" target="_blank" rel="noreferrer">
                <a className="text-gray-700 transition hover:text-gray-700/75">
                  <span className="sr-only"> TikTok </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"
                    />
                   
                  </svg>
                </a>
              </Link>
              <Link
                href="https://www.youtube.com/@5Benefitsco"
                target="_blank"
                rel="noreferrer">
                <a className="text-gray-700 transition hover:text-gray-700/75">
                  <span className="sr-only"> YouTube </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"
                    />
                   
                  </svg>
                </a>
              </Link>

              <Link href="https://www.instagram.com/5benefitsco/" target="_blank" rel="noreferrer">
                <a className="text-gray-700 transition hover:text-gray-700/75">
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.pinterest.com/5benefitsco/" target="_blank" rel="noreferrer">
                <a className="text-gray-700 transition hover:text-gray-700/75">
                  <span className="sr-only"> Pinterest </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Navigation
              </p>

              <nav
                aria-label="Footer Services Nav"
                className="mt-6 flex flex-col space-y-1">
                <Link
                  href="/"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Contact
                </Link>
                <Link
                  href="/category/all"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                 Articles
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Misc
              </p>

              <nav
                aria-label="Footer About Nav"
                className="mt-6 flex flex-col space-y-1">
                  <Link
                  href="/archive"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Archive
                </Link>
        
                <Link
                  href="/search?q=life"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                 Search Page
                </Link>
                
              </nav>
            </div>

            <div></div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            Copyright © 2023 5BENEFITS. All rights reserved.
            <br />
            <Link
              href="https://vercel.com/home"
              className="text-gray-700 underline transition hover:text-gray-700/75">
              Created with Vercel
            </Link>
          </p>
        </div>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
