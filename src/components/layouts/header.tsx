import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { IconType } from "react-icons/lib/esm/iconBase";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end p-10">
        <SocialLink link="https://reffly.aicat.io/" icon={AiOutlineLink} ping />
        <SocialLink
          link="https://github.com/aicatio/reffly/"
          icon={DiGithubBadge}
        />
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: IconType;
  ping?: boolean;
  link: string;
}

const SocialLink = ({ icon: Icon, ping, link }: SocialLinkProps) => {
  return (
    <a
      href={link}
      className="relative h-10 w-10 text-white place-items-center grid ml-3 rounded-md bg-dark"
    >
      <Icon fill="#fff" size={32} />
      {ping && (
        <span className="flex h-3 w-3 absolute right-0 bottom-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 border-2 border-solid border-white bg-green-500"></span>
        </span>
      )}
    </a>
  );
};
