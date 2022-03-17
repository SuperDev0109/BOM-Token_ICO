import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Register() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = {
    criteriaMode: "all",
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);

  const onSubmit = async (user_data) => {
    // const api_url = "https://api.bomcoin.com/register"
    const api_url = "http://localhost:9000/register";
    const { data } = await axios.post(api_url, user_data);
    console.log(data);
    if (data.result === 0) {
      MySwal.fire({
        icon: "error",
        title: "Failed to register.",
      });
    } else if (data.result === 1) {
      MySwal.fire({
        icon: "success",
        title: "Success to register.",
      });
    }
  };

  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto rounded shadow">
            <div className="py-4 px-8 text-white text-4xl font-bold text-center">
              Register
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
                <div className="field-input">
                  <input
                    className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
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
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="confirmPassword"
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
                    {!isSubmitting && <>Register</>}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="text-center my-4">
            <a
              href="#"
              className="text-grey-dark text-sm no-underline hover:text-grey-darker"
            >
              I already have an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
