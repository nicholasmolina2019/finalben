import React, { useState } from "react";
import Modal from "components/modal.js";
import { useForm } from "react-hook-form";

const MerakiUIContent = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched"
  });

  const onSubmit = e => {
    e.preventDefault();
    document.getElementById("mc-embedded-subscribe-form").submit();
    setShowModal(true);
  };

  const handleInputChange = e => {}; // Add this function to handle input changes

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="https://5benefits.gumroad.com/l/uqcave"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
      <span className="text-xs bg-black rounded-full text-white px-4 py-1.5 mr-3">New</span>
      <span className="text-sm font-medium">Notion Anbolic Recipe Book! See what's new</span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
    
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          Welcome To 5BENEFITS
        </h1>

        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Join our newsletter and stay up-to-date with the latest
          health tips and lifestyle hacks, personalized just for you.
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
            style={{ display: "none" }}
          ></iframe>
        </div>
      </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default MerakiUIContent;
