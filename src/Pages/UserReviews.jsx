import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UserReviews() {
  useEffect(() => {
    AOS.init();
  }, []);

  const reviews = [
    {
      id: 1,
      text: "This platform is amazing! I earned rewards quickly.",
      client: "Alice",
      star: 5,
    },
    {
      id: 2,
      text: "Easy to use and great rewards. Highly recommended!",
      client: "Bob",
      star: 5,
    },
    {
      id: 3,
      text: "I love playing games and earning money at the same time!",
      client: "Charlie",
      star: 5,
    },
    {
      id: 4,
      text: "The best survey site I’ve used so far. Kudos!",
      client: "Diana",
      star: 5,
    },
    {
      id: 5,
      text: "Great way to earn extra cash. The tasks are simple.",
      client: "Eve",
      star: 5,
    },
    {
      id: 6,
      text: "Watching videos and getting paid? Count me in!",
      client: "Frank",
      star: 5,
    },
    {
      id: 7,
      text: "Awesome platform for earning rewards in your spare time.",
      client: "Grace",
      star: 5,
    },
    {
      id: 8,
      text: "I’ve earned so many gift cards, it’s unbelievable!",
      client: "Hank",
      star: 5,
    },
    {
      id: 9,
      text: "Great customer support and fast payouts. Love it!",
      client: "Ivy",
      star: 5,
    },
  ];

  const sliderRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const scroll = () => {
      if (slider && !isHovered.current) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className=" w-full ">
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col gap-7 justify-center items-center text-center mt-52"
      >
        <h2 className="font-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] sm:text-5xl text-4xl font-semibold text-black">
          User Reviews
        </h2>
        <p className="font-text text-xl text-neutral-700 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] font-normal">
          What people said about us
        </p>
      </div>

      <div className="flex justify-center bg-white items-center w-full h-full mt-16 rounded-xl">
        <div className="overflow-hidden w-full h-full rounded-lg">
          <div
            ref={sliderRef}
            className="flex whitespace-nowrap mt-24 p-10 mb-24 transition-transform ease-linear"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="lg:min-w-[550px] min-w-fit h-44 border border-solid border-neutral-400 bg-neutral-50 hover:bg-neutral-100 duration-200 hover:-translate-y-6 z-40 rounded-lg cursor-pointer mx-4 flex flex-col justify-center items-center p-4 text-lg text-black font-medium"
              >
                <p className="text-center text-base drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  {review.text}
                </p>
                <p className="mt-2 text-sm text-gray-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
                  - {review.client}
                </p>
                <p className="mt-1 text-yellow-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
                  {"⭐".repeat(review.star)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
