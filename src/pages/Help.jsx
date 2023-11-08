import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const supportData = [
  {
    id: 1,
    title: "FAQs",
    desc1: "Check out our ",
    link: "Frequently Asked Questions",
    dir: "/",
    desc2: " for quick help with the most common issues and inquiries.",
  },
  {
    id: 2,
    title: "Contact Us",
    desc1: "Email us any time at ",
    link: "support@healthylife.com",
    dir: "mailto:support@healthylife.com",
    desc2: " from 9 am to 5 pm (Your Timezone), Monday to Friday.",
  },
  {
    id: 3,
    title: "Knowledge Base",
    desc1: "Browse our ",
    link: "Knowledge Base",
    dir: "/about",
    desc2: " for helpful guides and articles.",
  },
  {
    id: 4,
    title: "Feedback",
    desc1:
      " Your feedback matters. Help us improve by submitting your thoughts ",
    link: "here",
    dir: "/contact",
  },
];

const SupportItems = (item) => {
  return (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0"
    >
      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-600">
        {item.desc1}
        <a
          href={`${item.dir.toLowerCase()}`}
          className="text-brandPrimary hover:underline"
        >
          {item.link}
        </a>
        {item.desc2}
      </p>
    </div>
  );
};

const Help = () => {
  return (
    <>
      <Navbar />
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-20"
      >
        <h2 className="text-4xl text-center font-semibold mb-10">
          Support Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportData.map((item) => (
            <SupportItems key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Help;
