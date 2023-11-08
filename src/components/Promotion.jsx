import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Promotion = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src="" alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 mt-14">
              Welcome to Healthy Life – Your Personalized Path to Wellbeing!
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Embark on a journey to your best self with Healthy Life, the
              ultimate companion in achieving your health and fitness goals.
              Whether you are looking to sculpt your body, shed unwanted pounds,
              or simply embrace a healthier lifestyle, we have got a plan that
              fits YOU.
            </p>

            <motion.p
              variants={fadeIn("up", 0.1)}
              className="list-disc pl-5 mb-4"
            >
              <strong>🏋️‍♂️ Bodybuilding Plan</strong> – Dreaming of muscles that
              not only look impressive but feel powerful? Our Bodybuilding Plan
              is your blueprint to a stronger, healthier physique, crafted by
              experts to maximize gains while ensuring you stay in peak health.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.2)}
              className="list-disc pl-5 mb-4"
            >
              <strong>🥗 Diet Plan</strong> – Navigate the road to weight loss
              with a map made just for you. Our Diet Plan offers a delicious
              route to dropping sizes without compromising on nutrition or
              taste. Say goodbye to bland meals and hello to flavorful,
              weight-conscious cuisine!
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="list-disc pl-5 mb-4"
            >
              <strong>🔥 Lifestyle Plan</strong> – Strike the perfect balance
              with our Lifestyle Plan. It is not just about maintaining your
              figure; it is about fueling your body with the right calories for
              a vibrant, energetic life. Stay in shape and feel great, every
              day!
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              className="list-disc pl-5 mb-4"
            >
              <strong>✅ Weekly and Monthly Subscriptions</strong> – Flexibility
              is key to sustainable progress. That is why we offer both weekly
              and monthly subscriptions to fit your life and adjust as your
              needs evolve. Commit to yourself, on your terms.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="list-disc pl-5 mb-4"
            >
              <strong>🌐 Custom Plan Creation</strong> – Unique goals require
              unique strategies. If our standard plans don’t quite match what
              you’re looking for, let’s design a Custom Plan together that’s as
              individual as you are. Your aspirations, your plan.
            </motion.p>
            <motion.h4
              variants={fadeIn("up", 0.4)}
              className="text-xl text-neutralDGrey font-semibold mb-4 mt-8"
            >
              With the Healthy Life App, You Will:
            </motion.h4>
            <motion.ul
              variants={fadeIn("up", 0.5)}
              className="list-disc pl-5 mb-4"
            >
              <li>Receive personalized fitness and nutrition plans.</li>
              <li>Track your progress with intuitive tools.</li>
              <li>Gain access to expert advice and support.</li>
              <li>Enjoy a community that cheers you on.</li>
            </motion.ul>
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="list-disc pl-5 mb-4"
            >
              Take the first step towards a healthier, happier you.
              <strong>
                Download the Healthy Life app today, because every body deserves
                to feel its best.
              </strong>
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="list-disc pl-5 mb-4"
            >
              <strong>🎉 [Launch Special]</strong> Sign up now and get a free
              consultation with one of our wellness experts. Start your journey
              with Healthy Life, where your goals are not just dreams—they are
              our mission.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="list-disc pl-5 mb-4"
            >
              <strong>👉 Ready to transform your life?</strong> Get Healthy Life
              now and be a part of a movement that celebrates health, strength,
              and happiness.
              <strong>#HealthyLifeGoals</strong>
            </motion.p>
            <a
              href="https://www.instagram.com/healthylifekwt/"
              target="_blank"
              rel="noreferrer"
              className="market-btn apple-btn mr-4"
              role="button"
            >
              <span className="market-button-subtitle">Download on the</span>
              <span className="market-button-title">App Store</span>
            </a>
            <a
              href="https://www.instagram.com/healthylifekwt/"
              target="_blank"
              rel="noreferrer"
              className="market-btn google-btn"
              role="button"
            >
              <span className="market-button-subtitle">Download on the</span>
              <span className="market-button-title">Google Play</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
