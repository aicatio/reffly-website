import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  className?: string;
};

export default function Banner({ className }: Props) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <StaticImage
        alt="carbonad"
        placeholder="blurred"
        layout="constrained"
        width={230}
        src="../../assets/logo.svg"
      />

      <p className="mt-3">Free, Open source, Community driven!</p>
    </div>
  );
}
