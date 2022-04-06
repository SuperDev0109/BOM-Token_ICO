import { useRouter } from "next/router";
import React from "react";

export default function BuyNow({ kind }) {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={() => {
        router.push(`/buy/${kind}`);
      }}
      className="btn-primary pricing-btn"
    >
      Buy Now!
    </a>
  );
}
