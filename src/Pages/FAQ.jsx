import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Howitwork() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [openQuestion, setOpenQuestion] = useState("");
  const faqs = [
    {
      question: "What is Free Cuan?",
      answer:
        "Free Cuan is a platform where you can earn rewards by completing simple tasks like surveys, playing games, and watching videos.",
    },
    {
      question: "How do I sign up?",
      answer:
        "You can sign up by creating a free account on our website. It’s quick and easy!",
    },
    {
      question: "How can I earn rewards?",
      answer:
        "You can earn rewards by participating in various tasks like surveys, games, and videos. The more tasks you complete, the more rewards you earn.",
    },
    {
      question: "When can I cash out?",
      answer:
        "You can cash out your rewards once you have accumulated a minimum balance. Rewards can be redeemed for cash, gift cards, and other exciting offers.",
    },
    {
      question: "Is Free Cuan available on mobile?",
      answer:
        "Yes, Free Cuan is fully responsive and can be accessed on mobile devices for easy use on the go.",
    },
    {
      question: "Is FreeCuan legit to use?",
      answer:
        "Yes, FreeCuan is absolutely legit. We partner with reputable brands and advertisers to bring you genuine opportunities to earn rewards. Our platform is transparent about how you earn and redeem rewards, and we have a growing community of satisfied users who have successfully earned and cashed out their rewards. We take your privacy and security seriously, ensuring that your data is protected at all times.",
    },
  ];

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? "" : question);
  };
  return (
    <div className="w-full">
      <section
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-2xl mt-44 mx-auto px-4 py-8"
      >
        <h2 className="font-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] sm:text-5xl text-4xl font-semibold text-black">
          Frequently Asked Questions
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="space-y-4 mt-32 "
        >
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-b text-start font-bold  border-gray-200 pb-4 "
            >
              <button
                className="flex justify-between items-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] font-Text w-full text-left font-meduim"
                onClick={() => toggleQuestion(faq.question)}
              >
                {faq.question}
                <span>{openQuestion === faq.question ? "▼" : "▼"}</span>
              </button>
              {openQuestion === faq.question && (
                <p className="mt-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] font-Text text-base font-normal  text-neutral-700">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
