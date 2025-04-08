"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

const ResetButton = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button className="search-btn" onClick={reset}>
      <Link href="/">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default ResetButton;
