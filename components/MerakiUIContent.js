import React from "react";

const MerakiUIContent = () => {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          Welcome To 5BENEFITS
        </h1>

        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Subscribe to our newsletter for the latest health tips and
          lifestyle hacks, tailored just for you.<br />
        </p>

        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MerakiUIContent;