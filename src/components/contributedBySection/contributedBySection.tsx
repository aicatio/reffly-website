import React from "react";
import aicat from "../../assets/aicat-v1.png";

type Props = {};

export default function ContributedBySection({}: Props) {
  return (
    <div className="pb-12">
      <div className="md:grid grid-cols-2 bg-grayBody">
        <div
          className="bg-body h-10 overflow-hidden"
          style={{ borderRadius: "0 150px 0 0" }}
        />
        <div
          className="bg-body h-10 overflow-hidden"
          style={{ borderRadius: "150px 0 0 0" }}
        />
      </div>
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-20">
          <div className="text-center md:text-right text-lg">
            An open source contribution by
          </div>
          <div className="mx-auto md:m-0">
            <img className="-mt-6" src={aicat} alt="aicat" />
          </div>
        </div>
      </div>
    </div>
  );
}
