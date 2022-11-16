import { Link } from "gatsby";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

type Props = {};

export default function FooterBottom({}: Props) {
  return (
    <div className="border-t border-solid border-dark py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            Made with
            <svg
              width={30}
              fill="#d32f2f"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="FavoriteIcon"
            >
              <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            in
            <b>Bangladesh</b>
          </div>
          <div className="text-dark text-center">
            Copyright © 2022 Reff.ly |{" "}
            <Link to="/terms-and-conditions">Terms</Link> |{" "}
            <Link to="/privacy-policy">Privacy</Link>
          </div>
          <div>
            <div className="flex justify-end items-center gap-4">
              <a href="#">
                <AiFillGithub size={20} />
              </a>
              <a href="#">
                <BsLinkedin size={20} />
              </a>
              <a href="#">
                <FaFacebookSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
