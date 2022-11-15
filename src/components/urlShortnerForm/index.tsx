import { Link } from "gatsby";
import React from "react";

type Props = { className?: string };

export default function Jujydhf({ className }: Props) {
  const [link, setLink] = React.useState<string>("");
  const [errors, setErrors] = React.useState<{ message: string } | null>(null);

  const changeHandler = (e: any) => {
    setLink(e.target.value);
    setErrors(e.target.value ? null : { message: "Original Url is required" });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (link === "") {
      setErrors({ message: "Original Url is required" });
    }
  };
  return (
    <div className={`max-w-4xl mx-auto card pb-6 ${className}`}>
      <form onSubmit={submitHandler} className="flex gap-3 flex-nowrap">
        <div className="flex-1">
          <input
            value={link}
            onChange={changeHandler}
            className="h-14 bg-transparent placeholder:text-gray-400 focus:border-gray-700 transition-all outline-none w-full border border-slid border-gray-400 rounded-md p-4"
            type="text"
            placeholder="Enter your long Url here"
          />
          <p className="pl-2 text-red-500 text-sm mt-1 font-medium">
            {errors && errors?.message}
          </p>
        </div>

        <button
          type="submit"
          className="w-40 h-14 bg-dark text-white rounded-md uppercase text-base font-semibold"
        >
          shorten
        </button>
      </form>
      <p className="mt-8">
        By using our service, you accept our{" "}
        <Link to="terms-and-conditions">Terms</Link> &{" "}
        <Link to="privacy-policy">Privacy</Link>
      </p>
    </div>
  );
}
