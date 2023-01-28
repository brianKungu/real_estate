import React from "react";

export default function Form() {
  return (
    <div className="my-4">
      <form className="shadow-md shadow-yellow-200 border p-4 border-yellow-200/80 rounded-md">
        <div class="mb-6">
          <label
            for="fullName"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Full Name
          </label>
          <input
            type="text"
            id="repeat-password"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            required
            placeholder="Sony Bravia"
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gsecondaryTextColor dark:text-secondaryTextColor"
          >
            Phone number
          </label>
          <input
            type="number"
            id="repeat-password"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            required
            placeholder="0722000000"
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            required
            placeholder="jonhdoe@gmail.com"
          />
        </div>

        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Message
          </label>
          <textarea
            type="message"
            id="message"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark h-[100px] "
            required
            placeholder="I would like to inquire about"
          />
        </div>

        <button
          type="submit"
          className="w-full text-primaryTextColor bg-secondaryBg hover:bg-neutralBg focus:ring-4 focus:outline-none focus:ring-secondaryBg font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondaryBg dark:hover:bg-neutralBg dark:focus:ring-secondaryBg"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
