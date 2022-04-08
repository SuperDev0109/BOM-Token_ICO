import React, { createRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { validateEmail } from "../util";
import { create } from "ipfs-http-client";
import {FaUserCircle} from "react-icons/fa";

const MySwal = withReactContent(Swal);
const client = create("https://ipfs.infura.io:5001/api/v0");

export default function NFT() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (nft_data) => {
    try {
      const { path, cid, size } = await client.add(nft_data.image[0]);
      // const image_url = `https://ipfs.io/ipfs/${path}`;

      delete nft_data.image;
      const meta_data = { ...nft_data, image: path };
      const meta_json = JSON.stringify(meta_data);

      const { path: nft_path } = await client.add(meta_json);

      console.log("nft_path:", nft_path);

      // const metaObj = { fname: "myfile.txt", lang: "plain-text", cid: cid };

      // if (data.result === 0) {
      //   MySwal.fire({
      //     icon: "error",
      //     title: "Failed to send message.",
      //   });
      // } else if (data.result === 1) {
      //   MySwal.fire({
      //     icon: "success",
      //     title: "Success to send message.",
      //   });
      // }
    } catch (e) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to contact!",
      });
    }
  };

  const [preview, setPreview] = useState(null);

  const showPreview = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      setPreview(src);
    }
  };

  const attachRef = useRef();

  const selectImage = () => {
    console.log("attachRef:", attachRef);
    if (attachRef && attachRef.current) {
      attachRef.current.click();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-cols-1 grid gap-4 mt-0">
        <div className="field-input relative flex justify-center items-center h-100px rounded-md">
          <img
            className="inset-0 w-full h-32 hidden"
            src={preview}
            onClick={selectImage}
          />
           <FaUserCircle />
          
          <input
            ref={attachRef}
            className="absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer"
            accept="image/*"
            type="file"
            id="image"
            name="image"
            placeholder="Image"
            {...register("image", {
              required: "Image is required.",
            })}
            onChange={showPreview}
          />
          <ErrorMessage
            errors={errors}
            name="image"
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
            className="w-full text-16 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
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
            className="w-full text-16 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
            type="text"
            id="link"
            name="link"
            placeholder="External Link"
            {...register("link", {
              required: "link is required.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="link"
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
          <textarea
            className="w-full text-16 p-2 px-4 h-[150px] font-poppins bg-white/20 text-white rounded-md"
            id="description"
            name="description"
            placeholder="Description"
            {...register("description", {
              required: "Description is required.",
            })}
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="description"
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
            className="w-full text-16 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
            type="text"
            id="supply"
            name="supply"
            placeholder="Supply"
            {...register("supply", {
              required: "Supply is required.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="supply"
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
        <div className="">
          <button
            className="btn-primary w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <>
                <i className="fas fa-cog fa-spin mr-4" />
                Creating
              </>
            )}
            {!isSubmitting && <>Create</>}
          </button>
        </div>
      </div>
    </form>
  );
}
