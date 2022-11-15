import React from "react";
import nicechartjs from "../../assets/nicechartjs-v1.png";
import refflyplusLogo from "../../assets/refflyplus-logo-v1.svg";

type Props = {};

export default function EnterPriceDetails({}: Props) {
  return (
    <div className="bg-grayBody py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl">FOR ENTERPRISE</h2>
        </div>

        <div className="grid items-center gap-6 grid-cols-2">
          <div className="card">
            <img
              className="opacity-20 select-none grayscale"
              src={nicechartjs}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl">
              Self host <b>reffly</b> for full features including Link tracking
              Statistics, Branding & more... <br />{" "}
              <i>
                or Try <b>reffly plus</b>
              </i>
            </h2>
            <img className="max-w-[200px] mt-10" src={refflyplusLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
