import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_igr55vr",
        "template_gbikoc1",
        form.current,
        "_nV0JNc8O0COQ0OXO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="my-4">
      <form
        className="shadow-md shadow-yellow-200 border p-4 border-yellow-200/80 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        <div class="mb-6">
          <label
            for="fullName"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Please Enter your Full Name",
              minLength: { value: 8, message: "Full Name is too short!" },
            })}
            type="text"
            name="fullName"
            className="shadow-sm bg-primaryBg border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-primaryBg dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            for="phoneNumber"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Phone number
          </label>
          <input
            {...register("phoneNumber", {
              required: "Please enter your phone number!",
              minLength: { value: 10, message: "Phone Number is too short!" },
            })}
            type="number"
            name="phoneNumber"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            placeholder="0722000000"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Please enter your Email Address!",
            })}
            type="email"
            name="email"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark"
            placeholder="jonhdoe@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-secondaryTextColor dark:text-secondaryTextColor"
          >
            Message
          </label>
          <textarea
            {...register("userMessage", {
              required: "Please enter your message!",
            })}
            name="userMessage"
            className="shadow-sm bg-transparent border border-neutralTextColor text-secondaryTextColor text-sm rounded-lg focus:ring-secondaryBg focus:border-secondaryBg block w-full p-2.5 dark:bg-transparent dark:border-secondaryTextColor dark:placeholder-neutralTextColor dark:text-neutralTextColor dark:focus:ring-secondaryBg dark:focus:border-secondaryBg dark:shadow-sm-dark h-[100px] "
            placeholder="I would like to inquire about"
          />
          {errors.userMessage && (
            <p className="text-red-500">{errors.userMessage.message}</p>
          )}
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
