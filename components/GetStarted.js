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
      <a href="#" className="btn-size btn-primary hidden lg:inline-block">
        Get Started!
      </a>
    </div>
  );
}
