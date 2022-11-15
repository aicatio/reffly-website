import React from "react";
import Logo from "../../assets/logo.svg";

type Props = {
  className?: string;
};

export default function Banner({ className }: Props) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img width={230} src={Logo} />
      <p className="mt-3">Free, Open source, Community driven!</p>
    </div>
  );
}
