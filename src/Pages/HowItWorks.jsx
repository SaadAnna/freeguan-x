/* eslint-disable react/no-unescaped-entities */
import ImageOne from "./profile.png";
import ImageTwo from "./money.png";
import ImageThree from "./gift.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HowItWorks() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex justify-center items-center text-center  mt-52"
      >
        <h2 className="font-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]   sm:text-5xl text-4xl font-bold text-black">
          How It Works?
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap w-full h-fit p-8 mt-28 gap-36 items-center jutify-center  text-center"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-72 border border-solid border-neutral-200 hover:bg-neutral-100 duration-200 bg-neutral-50 m-auto   rounded-lg cursor-pointer p-4 flex flex-col text-start gap-4"
        >
          <img className="w-20 h-20 box-border" src={ImageOne} />

          <h1 className="font-text text-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold">
            Sign Up
          </h1>
          <p className="font-text text-neutral-700 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] font-meduim text-lg">
            Create a free account and join our community. It's quick and easy!{" "}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-72 border border-solid border-neutral-200 hover:bg-neutral-100 duration-200 bg-neutral-50 m-auto   rounded-lg cursor-pointer p-4 flex flex-col text-start gap-4"
        >
          <img className="w-20 h-20 box-border" src={ImageTwo} />

          <h1 className="font-text text-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold">
            {" "}
            Earn $CUAN
          </h1>
          <p className="font-text text-neutral-700 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] font-meduim text-lg">
            Participate in surveys, play games, watch videos, and more to earn
            $CUAN.{" "}
          </p>
        </div>
        <div className=" w-72 h-72 border border-solid border-neutral-200 hover:bg-neutral-100 duration-200 bg-neutral-50 m-auto rounded-lg cursor-pointer p-4 flex flex-col text-start gap-4">
          <img className="w-20 h-20 box-border" src={ImageThree} />

          <h1 className="font-text text-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold">
            {" "}
            Cash Out
          </h1>
          <p className="font-text text-neutral-700 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] font-meduim text-lg">
            Collect $CUAN and redeem them for cash, gift cards, and other
            exciting rewards.{" "}
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex justify-center items-center mt-14 mx-auto"
      >
        <a
          href="#"
          className="w-fit h-fit drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] pl-20 pr-20 pb-3 pt-3 bg-blue-700 rounded-xl font-text text-lg text-white font-meduim duration-200 hover:bg-blue-800 "
        >
          Let's Try
        </a>
      </div>
    </div>
  );
}
