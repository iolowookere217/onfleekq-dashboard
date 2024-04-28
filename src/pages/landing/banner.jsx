import React from "react";
import logo from "/onfleekq_banner.jpg";

export default function banner() {
  return (
    <div className="w-full  bg-black flex items-center justify-center relative ">
      <img src={logo} className="relative w-full  opacity-40" />
    </div>
  );
}
