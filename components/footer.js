import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
      <div className="container px-6 py-6">
        <hr className="my-6 border-white md:my-8 dark:border-white" />
        <h1 className="text-lg font-semibold text-center lg:text-2xl text-gray-800 dark:text-white ">
          Subscribe to our newsletter for the <br />
          latest health tips and lifestyle hacks, tailored just for
          you.
          <br />
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link href="/">
            <svg
              width="150"
              height="55"
              viewBox="0 0 421 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M48.0123 47.4325C48.1968 44.6607 49.6392 44.2431 51.5481 44.2614C57.9691 44.3231 64.3911 44.3186 70.8122 44.2612C72.381 44.2472 73.9696 44.0616 75.51 43.7285C77.5396 43.2895 78.8575 41.842 79.1623 39.5113C79.479 37.0896 78.618 35.1748 76.7609 33.8992C75.113 32.7672 73.2637 32.4937 71.356 32.4984C64.8358 32.5142 58.3155 32.5149 51.7952 32.4956C48.5347 32.486 48.0357 31.8539 48.0069 27.8949C47.9704 22.862 48.3846 22.1585 51.6959 22.1318C58.1169 22.0801 64.5386 22.132 70.9594 22.0677C73.7368 22.0398 76.0806 21.0068 76.8067 17.6325C77.6529 13.7005 75.3184 10.7028 71.2675 10.6382C64.8473 10.5359 58.4249 10.6112 52.0035 10.5946C48.441 10.5853 48.0162 10.0324 48.0069 5.54185C47.9967 0.585433 48.3749 0.0181529 51.8651 0.00805523C57.9902 -0.00965147 64.1154 0.0183761 70.2404 0.000102426C72.4295 -0.00643373 74.5706 0.299435 76.6561 1.037C85.969 4.33066 89.602 15.7141 84.1901 24.7976C83.5171 25.9272 83.0477 26.5371 84.2653 27.7054C88.9308 32.1821 89.8805 38.0026 88.1005 44.2549C86.2664 50.6974 81.457 53.4676 75.9355 54.3119C67.5948 55.5872 59.1659 54.6678 50.7766 54.8282C49.0052 54.862 48.0709 53.6679 48.0172 51.691C47.9813 50.3662 48.0096 49.0393 48.0123 47.4325Z"
                fill="black"
              />
              <path
                d="M30.9687 42.8626C27.2264 50.7649 21.5428 54.2335 14.2491 53.2062C6.85915 52.1653 2.09256 47.7665 0.33341 40.3642C-0.497844 36.8664 0.12994 35.9323 3.30208 35.8134C5.98934 35.7128 8.3177 35.5305 9.77024 39.4293C11.1893 43.2383 16.5937 44.2275 20.0333 42.0952C23.1823 40.1431 24.4615 35.5757 22.9971 31.513C21.2394 26.6364 15.1701 24.9961 11.2796 29.0081C8.26981 32.112 6.57347 29.4601 4.33542 28.192C2.15375 26.9559 2.0811 25.0871 2.45462 22.5683C3.39573 16.2218 4.15576 9.83326 4.81835 3.43732C5.08631 0.850724 6.074 -0.0323404 8.21833 0.00089973C14.5391 0.0988867 20.8625 0.106216 27.183 0.00170759C29.5714 -0.0377593 30.5639 1.13402 30.422 3.84846C30.3827 4.59846 30.4237 5.3538 30.4148 6.10651C30.3715 9.77508 29.9152 10.2951 26.6667 10.305C22.9102 10.3165 19.153 10.2601 15.3979 10.3452C14.6111 10.363 13.3903 9.59429 13.0773 11.1376C12.6986 13.0048 12.3203 14.9598 12.4285 16.8381C12.4822 17.7697 13.6966 17.0087 14.3644 16.9282C23.2032 15.8632 30.4807 21.5518 32.1208 30.9801C32.8126 34.9574 32.5006 38.8952 30.9687 42.8626Z"
                fill="black"
              />
              <path
                d="M182.898 47.8591C173.155 33.6674 163.529 19.6703 153.9 5.67532C153.068 4.46569 151.992 3.27869 152.696 1.63428C153.501 -0.244616 155.227 0.388657 156.67 0.140439C160.533 -0.524337 162.876 1.20632 165.099 4.58207C171.726 14.6446 178.73 24.4266 185.712 34.4998C186.664 33.4617 186.29 32.3544 186.293 31.3988C186.324 22.4018 186.299 13.4046 186.316 4.40752C186.323 0.632515 186.768 0.195432 190.343 0.173671C191.049 0.169389 191.759 0.2267 192.46 0.163261C195.203 -0.0850754 196.249 1.25667 196.228 4.13318C196.152 14.3078 196.198 24.4835 196.198 34.6589C196.198 39.4787 196.117 44.3008 196.229 49.1177C196.294 51.9306 195.329 52.9749 192.582 53.2875C188.118 53.7955 184.992 52.3014 182.898 47.8591Z"
                fill="black"
              />
              <path
                d="M410.605 53.6681C408.682 54.174 406.98 54.6592 405.252 54.9443C403.329 55.2616 402.293 54.2145 402.255 52.0035C402.234 50.7954 402.306 49.5826 402.238 48.379C402.112 46.1535 402.885 44.9487 404.93 44.5186C407.705 43.9349 410.859 43.3985 410.975 39.1982C411.091 34.978 407.601 34.7577 405.23 33.8562C400.725 32.1431 395.975 31.2393 391.483 29.4925C387.199 27.8268 383.226 25.3192 381.735 19.9195C379.81 12.951 382.94 5.36364 389.004 2.06398C390.863 1.05235 392.853 0.516847 394.864 0.103516C397.056 -0.346884 398.236 0.666068 398.198 3.26817C398.179 4.58616 398.156 5.90659 398.204 7.22269C398.276 9.21628 397.474 10.2223 395.72 10.5732C394.693 10.7787 393.651 11.2537 392.757 11.8692C389.79 13.9132 389.882 17.2292 392.987 18.9154C396.966 21.0762 401.382 21.6408 405.575 23.0305C408.376 23.9588 411.193 24.8158 413.762 26.4414C422.688 32.0906 423.078 45.2439 414.474 51.559C413.347 52.3863 412.039 52.9003 410.605 53.6681Z"
                fill="black"
              />
              <path
                d="M354.778 0.0341399C359.304 0.0341597 363.537 0.117042 367.766 0.00323459C370.32 -0.0654598 371.398 1.17503 371.265 3.931C371.223 4.80388 371.21 5.68521 371.266 6.55603C371.453 9.44878 370.401 10.8033 367.666 10.667C364.523 10.5104 361.361 10.7835 358.223 10.5773C356.078 10.4364 355.633 11.3119 355.649 13.5335C355.74 25.6784 355.702 37.8248 355.681 49.9705C355.679 51.6666 356.15 54.0143 354.21 54.4686C351.782 55.0368 349.129 55.4532 346.743 54.0613C345.782 53.5006 345.896 52.2007 345.897 51.0897C345.905 35.3329 345.93 19.576 345.876 3.81946C345.866 0.954116 346.995 -0.137686 349.466 0.0137103C351.134 0.115919 352.811 0.0337987 354.778 0.0341399Z"
                fill="black"
              />
              <path
                d="M262.611 47.7806C262.611 40.4502 262.664 33.4225 262.584 26.3968C262.553 23.7115 263.457 22.6281 265.795 22.6512C273.951 22.7319 282.108 22.7403 290.264 22.6476C292.743 22.6194 293.771 23.8252 293.629 26.6C293.586 27.4362 293.587 28.2799 293.628 29.1163C293.755 31.7435 292.808 32.9289 290.432 32.8805C284.996 32.7697 279.552 33.0038 274.122 32.7733C271.752 32.6727 271.271 33.57 271.371 36.1004C271.553 40.7054 271.371 45.3281 271.444 49.9413C271.482 52.3611 270.55 53.4304 268.522 53.3807C268.069 53.3697 267.616 53.3803 267.163 53.3811C262.683 53.389 262.62 53.315 262.611 47.7806Z"
                fill="black"
              />
              <path
                d="M130.955 43.6768C131.955 43.6768 132.658 43.6767 133.36 43.6768C139.901 43.6768 140.035 43.871 139.63 50.476C139.505 52.5101 138.553 53.3805 136.622 53.3809C125.985 53.3827 115.348 53.3842 104.712 53.3774C102.761 53.3762 101.726 52.4177 101.741 50.4221C101.741 50.3218 101.743 50.2212 101.738 50.1211C101.425 43.8335 101.564 43.6814 107.779 43.6786C115.405 43.6751 123.032 43.6771 130.955 43.6768Z"
                fill="black"
              />
              <path
                d="M229.945 43.7189C235.089 43.7196 239.933 43.8251 244.769 43.6807C247.578 43.5969 248.665 44.7608 248.437 47.4157C248.385 48.0102 248.435 48.6129 248.43 49.2117C248.402 52.8773 247.929 53.3702 244.259 53.3745C234.377 53.386 224.494 53.3842 214.611 53.374C210.841 53.37 210.394 52.925 210.37 49.3089C210.365 48.5104 210.41 47.7095 210.361 46.9139C210.221 44.6144 211.298 43.6712 213.608 43.7C218.952 43.7666 224.297 43.7198 229.945 43.7189Z"
                fill="black"
              />
              <path
                d="M218.428 0.00243922C227.315 0.0023467 235.9 -0.00468416 244.486 0.00555808C248.006 0.00976576 248.429 0.453215 248.463 4.03682C248.471 4.94097 248.461 5.84531 248.459 6.74956C248.455 8.68404 247.623 9.71201 245.535 9.70548C234.828 9.67202 224.121 9.67076 213.414 9.70584C211.211 9.71306 210.272 8.69751 210.354 6.58256C210.374 6.08094 210.357 5.57792 210.356 5.07554C210.35 0.016299 210.363 0.00312225 215.4 0.00242077C216.309 0.00229196 217.219 0.00242047 218.428 0.00243922Z"
                fill="black"
              />
              <path
                d="M127.428 9.67038C119.953 9.67071 112.782 9.67871 105.612 9.66811C102.079 9.66287 101.686 9.25098 101.649 5.64542C101.639 4.74399 101.651 3.84235 101.653 2.94082C101.657 0.983787 102.591 -0.000459392 104.618 0.00279786C115.324 0.0199663 126.029 0.0251005 136.735 1.92746e-05C138.734 -0.00465436 139.742 0.840313 139.75 2.85521C139.778 10.0576 140.151 9.77298 133.488 9.6747C131.57 9.6464 129.65 9.67038 127.428 9.67038Z"
                fill="black"
              />
              <path
                d="M280.23 0.0378294C284.782 0.0376276 289.06 0.100237 293.336 0.0114104C295.561 -0.0348278 296.531 1.0388 296.462 3.40886C296.441 4.10679 296.464 4.80615 296.459 5.50476C296.428 9.23092 296.052 9.65945 292.712 9.66224C283.793 9.66967 274.874 9.60394 265.956 9.70531C263.474 9.73352 262.391 8.72771 262.611 6.01666C262.675 5.22444 262.675 4.41555 262.612 3.62309C262.391 0.843177 263.621 -0.0593945 266.033 0.00299522C270.672 0.122917 275.315 0.0378474 280.23 0.0378294Z"
                fill="black"
              />
              <path
                d="M228.058 21.0681C232.435 21.0684 236.522 21.1587 240.604 21.0369C243.264 20.9576 244.362 22.3728 244.2 25.4288C244.158 26.2359 244.145 27.0538 244.202 27.8583C244.435 31.1263 243.26 32.3958 240.457 32.3518C231.608 32.2131 222.755 32.2226 213.905 32.3475C211.214 32.3854 210.132 31.1426 210.385 28.0254C210.459 27.108 210.452 26.1689 210.386 25.2496C210.154 22.0245 211.489 20.9619 214.053 21.0327C218.621 21.1588 223.195 21.0682 228.058 21.0681Z"
                fill="black"
              />
              <path
                d="M101.646 28.8978C101.637 21.0307 101.637 21.0313 108.325 21.0318C116.437 21.0324 124.548 21.0243 132.66 21.035C136.456 21.04 136.904 21.5516 136.937 25.789C136.945 26.8356 136.922 27.8826 136.937 28.929C136.969 31.2181 136.057 32.358 134.001 32.3529C124.166 32.3287 114.331 32.3328 104.496 32.351C102.61 32.3545 101.679 31.3316 101.646 28.8978Z"
                fill="black"
              />
              <path
                d="M309.196 50.0146C309.196 41.6766 309.186 33.6554 309.2 25.6341C309.207 21.6589 309.807 21.069 313.735 21.0333C314.889 21.0228 316.043 21.0378 317.197 21.0314C319.297 21.0197 320.457 21.9831 320.459 24.0888C320.467 33.3528 320.474 42.6167 320.435 51.8805C320.432 52.5122 320.251 53.3879 319.812 53.7328C317.277 55.7215 314.266 54.8386 311.501 54.5865C309.134 54.3706 309.106 52.2132 309.196 50.0146Z"
                fill="black"
              />
              <path
                d="M396.161 54.9865C387.86 53.3373 381.981 48.99 380.087 39.6341C379.183 35.1699 380.009 34.2606 384.206 34.0153C387.67 33.8127 390.101 34.113 390.797 38.936C391.248 42.0598 394.361 43.0345 397.039 43.9607C401.062 45.3519 398.89 49.1923 399.278 51.9608C399.575 54.0835 398.379 55.1331 396.161 54.9865Z"
                fill="black"
              />
              <path
                d="M415.028 19.3116C412.459 19.5226 410.913 18.9058 410.449 15.932C410.009 13.1077 407.811 11.8852 405.502 11.009C402.934 10.0347 401.573 5.71589 402.806 2.04475C403.86 -1.09416 406.197 0.175409 408.017 0.71231C413.608 2.36169 418.087 5.69415 419.913 12.0492C421.849 18.7932 420.199 19.7821 415.028 19.3116Z"
                fill="black"
              />
              <path
                d="M319.71 18.4524C317.006 19.9115 314.326 19.2995 311.728 19.1996C309.975 19.1323 309.177 17.8716 309.174 16.2057C309.169 11.8749 309.168 7.54403 309.187 3.21327C309.189 2.77993 309.202 2.25835 309.436 1.92791C311.719 -1.28542 315.132 0.534739 318.024 0.336834C320.002 0.201524 320.526 1.96634 320.424 3.68909C320.137 8.53885 321.049 13.4285 319.71 18.4524Z"
                fill="black"
              />
              <path
                d="M156.34 53.3823C152.628 53.2871 152.498 53.1291 152.491 48.8827C152.486 45.6573 152.55 42.4297 152.471 39.2071C152.41 36.7267 153.203 35.6449 155.353 35.6092C160.939 35.5164 160.938 35.4391 160.938 42.225C160.938 44.2019 160.939 46.1787 160.938 48.1556C160.937 53.3068 160.887 53.3668 156.34 53.3823Z"
                fill="black"
              />
              <path
                d="M341.458 9.35946C338.616 9.58596 336.005 9.66503 333.394 9.70285C332.884 9.71023 332.225 9.72559 331.885 9.4515C329.317 7.38075 330.763 4.58126 330.665 2.11284C330.596 0.36808 332.203 -0.0471417 333.83 0.00408663C334.771 0.0337339 335.715 0.00817441 336.657 0.00787995C342.719 0.00598348 344.811 3.82715 341.458 9.35946Z"
                fill="black"
              />
            </svg>
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;