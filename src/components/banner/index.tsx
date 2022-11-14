import React from "react";
import Logo from "../../assets/logo.svg";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="flex flex-col items-center">
      <img width={230} src={Logo} />
      <p className="mt-3">Free, Open source, Community driven!</p>
    </div>
  );
}
