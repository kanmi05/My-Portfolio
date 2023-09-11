"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:olapaulsunkanmi@gmail.com?subject=${formData.subject}&body=Hi, my name is 
    ${formData.name},${formData.message}(${formData.email})`;
  };
  return (
    <div
      className="h-screen flex relative text-center flex-col md:text-left md:flex-row mx-auto
    max-w-7xl px-10 justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center ">
          I have got just what you.
          <span className="decoration-[#F7AB0A]/50 underline"> Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center px-0">
            {" "}
            <PhoneIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse " />
            <p className="text-2xl">+2348137688203</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            {" "}
            <MapPinIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">Lagos, Nigeria.</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            {" "}
            <EnvelopeIcon className="w-7 h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">olapaulsunkanmi@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2 mx-">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
