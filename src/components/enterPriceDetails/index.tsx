import { Link } from "gatsby";
import React from "react";
import heroku from "../../assets/heroku-v2.svg";
import mongodb from "../../assets/mongodb-v1.svg";
import nginx from "../../assets/nginx-v1.svg";
import nicechartjs from "../../assets/nicechartjs-v1.png";
import nodejs from "../../assets/nodejs-v2.svg";
import refflyplusLogo from "../../assets/refflyplus-logo-v1.svg";

type Props = {};

export default function EnterPriceDetails({}: Props) {
  return (
    <div className="bg-grayBody py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl">FOR ENTERPRISE</h2>
        </div>

        <div className="md:grid items-center gap-6 grid-cols-2">
          <div className="card">
            <img
              className="opacity-20 select-none grayscale"
              src={nicechartjs}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl mt-4 md:mt-0 sm:text-3xl">
              Self host <b>reffly</b> for full features including Link tracking
              Statistics, Branding & more... <br />{" "}
              <i>
                or Try <b>reffly plus</b>
              </i>
            </h2>
            <a href="#">
              <img
                className="mt-10 max-w-[200px]"
                src={refflyplusLogo}
                alt=""
              />
            </a>
          </div>
        </div>

        {/* technologies */}
        <h2 className="text-center mt-20 mb-12 text-[1.75rem] text-dark">
          Play with reffly using freemium technologies,{" "}
          <Link to="/">learn more ...</Link>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="card border-none shadow-none">
            <img src={nodejs} alt="nodejs" />
          </div>
          <div className="card border-none shadow-none">
            <img src={mongodb} alt="mongodb" />
          </div>
          <div className="card border-none shadow-none">
            <img src={nginx} alt="nginx" />
          </div>
          <div className="card border-none shadow-none">
            <img src={heroku} alt="heroku" />
          </div>
        </div>

        <div className="text-center mt-7">
          Need help? hire me on <a href="#">Freelancer.com</a>
        </div>
      </div>
    </div>
  );
}
