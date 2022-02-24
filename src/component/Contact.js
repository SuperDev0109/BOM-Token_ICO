import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "@fortawesome/fontawesome-free/css/all.min.css";

const MySwal = withReactContent(Swal);

export default function Pricing() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (contact_data) => {
    const { data } = await axios.post(
      "https://api.bomcoin.com/send_email",
      contact_data
    );
    if (data.result === 0) {
      alert(data.message);
    } else if (data.result === 1) {
      alert("Success!");
    }
  };

  return (
    <>
      <div
        id="Contact"
        className="contact-section bg-contactbg py-24 px-4 border-t-2 border-b-2 border-white/20 mt-16 mb-24"
      >
        <div class="max-w-800 mx-auto text-center mb-16">
          <h4 className="font-sansation uppercase text-wTitle text-25 mb-4">
            CONTACTS
          </h4>
          <h2 className="heading-primary">Contact informations</h2>
          <p class="sub-heading">
            Investigationes demonstraverunt lectores legere elementum pulvinar
            etiam non quam lacus suspendisse risus nec feugiat in laoreet sit
            amet cursus.
          </p>
        </div>
        <div class="max-w-980 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-cols-2 grid gap-4">
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: "First name is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="first_name"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: "Last name is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="last_name"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "Phone is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  {...register("subject", {
                    required: "Subject is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="subject"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <input
                  className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                  type="text"
                  id="youraddress"
                  name="youraddress"
                  placeholder="Your Address"
                  {...register("address", {
                    required: "Address is required.",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="address"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
            </div>
            <div className="grid-cols-1 grid gap-4 mt-4">
              <div className="field-input">
                <textarea
                  className="w-full text-20 p-2 h-198 font-poppins bg-white/20 text-white rounded-md"
                  id="message"
                  name="message"
                  placeholder="Message |"
                  {...register("message", {
                    required: "Message is required.",
                  })}
                ></textarea>
                <ErrorMessage
                  errors={errors}
                  name="message"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        {message}
                      </p>
                    ))
                  }
                />
              </div>
              <div className="field-input">
                <label
                  className="accept-btn font-poppins text-20 relative mt-3 mb-8 block"
                  htmlfor="accept"
                >
                  <input
                    className="opacity-0 mr-3 w-20 h-20 relative top-0.5"
                    type="checkbox"
                    id="accept"
                    name="accept"
                    value="accept"
                    {...register("accept", {
                      required: "Accept is required.",
                    })}
                  />
                  <span className="checkmark w-20 h-20 absolute top-0.5 left-0 border border-white rounded"></span>
                  I accept the{" "}
                  <a className="text-yelloText" href="#">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a className="text-yelloText" href="#">
                    Privacy
                  </a>
                  .
                  <ErrorMessage
                    errors={errors}
                    name="accept"
                    render={({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red-500">
                          {message}
                        </p>
                      ))
                    }
                  />
                </label>
              </div>
              <div className="">
                <button
                  className="btn-primary w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <>
                      <i className="fas fa-cog fa-spin mr-4" />
                      Sending
                    </>
                  )}
                  {!isSubmitting && <>Send</>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
