import HowItWorks from "./HowItWorks";
import ImagePreview from "./Image_preview.png";
import UserReviews from "./UserReviews";
import { useState, useEffect } from "react";
const words = ["surveys", "playing games", "watching videos", "sign up offers"];
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Landingpage() {
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const updateWord = () => {
      if (isDeleting) {
        setDisplayedWord((prev) => prev.slice(0, -1));
        if (displayedWord === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
        if (displayedWord === currentWord) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(updateWord, isDeleting ? 100 : 200);
    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="flex lg:flex-wrap flex-wrap-reverse mt-28 w-full gap-44 bg-gradient-to-t from-blue-100 to-white p-7 items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col sm:text-start text-center gap-4 w-auto h-fit"
        >
          <h1 className="text-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-text sm:text-5xl text-4xl font-bold">
            Welcome to Free Cuan
          </h1>

          <p className="font-text text-neutral-700 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] text-lg font-normal">
            Earn rewards by completing simple surverys{" "}
            <span className="font-text text-blue-800 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] font-bold text-xl">
              {" "}
              {displayedWord}
            </span>
          </p>

          <a
            href="#"
            className="w-fit drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] sm:m-0 m-auto  h-fit pl-5 pr-5 pb-3 pt-3 border-none bg-blue-700 font-text text-lg text-white font-meduim duration-200 ease-out rounded-xl hover:bg-blue-900 "
          >
            Get Started
          </a>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={ImagePreview}
          className="lg:w-2/5 sm:w-3/6 w-11/12 m-auto drop-shadow-xl"
        />
      </div>
      <div className="section-container2 text-center">
        <HowItWorks />
      </div>
      <div className="section-container2 text-center">
        <UserReviews />
      </div>
      <div className="section-container2 text-center">
        <FAQ />
      </div>
    </div>
  );
}
