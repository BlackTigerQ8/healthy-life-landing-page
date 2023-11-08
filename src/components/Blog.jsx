import { Card } from "flowbite-react";
import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Key Nutrients for Optimal Muscle Growth",
      image: "/src/assets/blog1-1.png",
      content:
        "Dive into the world of muscle science as we explore the essential nutrients that fuel muscle growth and how our Bodybuilding Plan helps you incorporate them seamlessly into your diet.",
    },
    {
      id: 2,
      title: "The Balanced Plate: Crafting Your Weight Loss Journey",
      image: "/src/assets/blog2-1.png",
      content:
        "Unlock the secrets to sustainable weight loss with our expert guide on balanced meals. Learn how our Diet Plan can be your roadmap to a slimmer, healthier you without sacrificing flavor.",
    },
    {
      id: 3,
      title: "Lifestyle Tweaks to Maintain Your Ideal Shape",
      image: "/src/assets/blog3-1.png",
      content:
        "Staying in shape goes beyond the gym. Discover lifestyle adjustments that have a big impact on your health, and see how our Lifestyle Plan supports your wellness journey every step of the way.",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-3xl text-neutralDGrey font-semibold mb-4">
          🌿 Embark on Your Health Transformation with Healthy Life!
        </h2>
        <p className="text-sm text-justify leading-6 text-neutralGrey mb-8 mx-auto">
          Welcome to Healthy Life – where every step you take is towards a
          stronger, happier, and healthier you. Our app is designed to empower
          you with expert-crafted plans that cater to your individual goals,
          from muscle-building and weight loss to maintaining a wholesome
          lifestyle. With our flexible weekly and monthly subscriptions, and the
          option for custom plans, you have the freedom to choose a path that
          resonates with your unique aspirations. Dive into a world of
          motivational tracking, deliciously nutritious meal plans, and fitness
          regimes that invigorate both body and mind. Say yes to a life where
          balance and wellbeing aren't just dreams, but your everyday reality.
          Join us at Healthy Life, and let’s make wellness your journey and
          destination!
        </p>
      </motion.div>

      {/* all blogs */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="mx-auto hover:scale-95 transition-all duration-300"
            />

            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex gap-8 items-center justify-center">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutralBlack"
                >
                  Explore Member Journeys
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#44b0d5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
