import React from "react";
import carbonad from "../../assets/carbonad-v1.png";

type Props = { className?: string };

export default function BuyMeaCoffe({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4 justify-center items-center flex-col md:flex-row">
        <div>
          <img
            className="max-w-[250px] md:max-w-[300px]"
            src={carbonad}
            alt=""
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
