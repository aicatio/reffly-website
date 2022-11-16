import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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
            <StaticImage
              className="opacity-20 select-none grayscale"
              alt="nicechartjs"
              placeholder="blurred"
              layout="constrained"
              src="../../assets/nicechartjs-v1.png"
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
              <StaticImage
                className="mt-10"
                alt="refflyplusLogo"
                placeholder="blurred"
                layout="constrained"
                src="../../assets/refflyplus-logo-v1.svg"
                width={200}
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
            <StaticImage
              alt="nodejs"
              placeholder="blurred"
              layout="constrained"
              src="../../assets/nodejs-v2.svg"
            />
          </div>
          <div className="card border-none shadow-none">
            <StaticImage
              alt="heroku"
              placeholder="blurred"
              layout="constrained"
              src="../../assets/heroku-v2.svg"
            />
          </div>
          <div className="card border-none shadow-none">
            <StaticImage
              alt="mongodb"
              placeholder="blurred"
              layout="constrained"
              src="../../assets/mongodb-v1.svg"
            />
          </div>
          <div className="card border-none shadow-none">
            <StaticImage
              alt="nginx"
              placeholder="blurred"
              layout="constrained"
              src="../../assets/nginx-v1.svg"
            />
          </div>
        </div>

        <div className="text-center mt-7">
          Need help? hire me on <a href="#">Freelancer.com</a>
        </div>
      </div>
    </div>
  );
}
