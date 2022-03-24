import { useRouter } from "next/router";
import React from "react";

export default function BuyNow(props) {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={() => {
        router.push("/buy");
      }}
      className="btn-primary pricing-btn"
    >
      Buy Now!
    </a>
  );
}
