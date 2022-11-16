import React from "react";
import Banner from "../banner";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="select-none uppercase fixed -left-[50px] top-[25px] -rotate-45 bg-red-500 text-white py-4 w-[210px] text-center font-semibold">
        Test Mode
      </div>
      <Header />
      <Banner className="mt-10" />
      {children}
      <Footer />
    </>
  );
}
