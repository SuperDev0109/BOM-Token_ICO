import { useRouter } from "next/router";
import React from "react";

export default function GetStarted(props) {
  const router = useRouter();
  return (
    <div
      className="started_button inline-block"
      onClick={() => {
        router.push("/register");
      }}
    >
      <span className="btn-size btn-primary hidden lg:inline-block cursor-pointer">
        Get Started!
      </span>
    </div>
  );
}
