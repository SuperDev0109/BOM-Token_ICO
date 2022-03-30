import React, { createRef } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../components/Header";
import FooterBox from "../components/Footer";
import { validateEmail } from "../util";

const MySwal = withReactContent(Swal);
const sitekey = "6LcvQZweAAAAAC-YzRS6ASguX-216umPqLytaVNf";
const recaptchaRef = createRef();

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
    try {
      const recaptchaValue = recaptchaRef.current.getValue();

      if (!recaptchaValue) {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please confirm you're not a robot!",
        });
        return;
      }

      const { data } = await axios.post(
        "https://api.bomcoin.com/send_email",
        contact_data
      );
      if (data.result === 0) {
        MySwal.fire({
          icon: "error",
          title: "Failed to send message.",
        });
      } else if (data.result === 1) {
        MySwal.fire({
          icon: "success",
          title: "Success to send message.",
        });
      }
    } catch (e) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to contact!",
      });
    }
  };

  return (
    <>
      <Header />
      <div
        id="Contact"
        className="contact-section bg-contactbg py-24 px-4 border-white/20 mt-16 mb-24"
      >
        <div className="max-w-800 mx-auto text-center mb-16">
          <h4 className="font-sansation uppercase text-wTitle text-25 mb-4">
            CONTACTS
          </h4>
          <h2 className="heading-primary">Contact informations</h2>
          <p className="sub-heading">
            In case you’d like to participate in our initial phases and become
            one of the early investors, don’t hesitate to reach out any time!
          </p>
        </div>
        <div className="max-w-980 mx-auto">
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
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required.",
                    validate: (value) => {
                      if (validateEmail(value)) {
                        return true;
                      }
                      return "Email is invalid.";
                    },
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
                    Object.entries(messages).map(([type, message]) => {
                      console.log(type, message);
                      return (
                        <p key={type} className="text-red-500">
                          {message}
                        </p>
                      );
                    })
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
                  htmlFor="accept"
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
              <ReCAPTCHA ref={recaptchaRef} sitekey={sitekey} />
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
      <FooterBox />
    </>
  );
}
