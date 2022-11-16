import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type Props = { className?: string };

export default function BuyMeaCoffe({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4 justify-center items-center flex-col md:flex-row">
        <div>
          <StaticImage
            className="md:max-w-[300px]"
            src="../../assets/carbonad-v1.png"
            alt="carbonad"
            placeholder="blurred"
            layout="constrained"
            width={250}
          />
        </div>
        <div>
          <p>Fund us on -</p>
          <img
            className="max-w-[250px] md:max-w-[300px]"
            src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
            alt="buy me a coffe"
          />
        </div>
      </div>
    </div>
  );
}
