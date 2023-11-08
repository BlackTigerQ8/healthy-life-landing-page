import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const termsData = [
  {
    id: 1,
    title: "Subscription Terms",
    detail:
      "Healthy Life offers weekly and monthly subscription options for users. By subscribing to our services, you agree to our billing terms and authorize us to charge your payment method on a recurring basis.",
  },
  {
    id: 2,
    title: "Custom Plans",
    detail:
      "Users may request custom plans, which Healthy Life will create based on the user's individual needs. These plans are subject to separate terms and conditions that will be provided when the custom plan is requested.",
  },
  {
    id: 3,
    title: "Cancellation Policy",
    detail:
      "Subscriptions may be canceled at any time. However, the cancellation will become effective at the end of the current billing cycle.",
  },
  {
    id: 4,
    title: "Intellectual Property Rights",
    detail: (
      <p>
        Other than the content you own, under these Terms, Healthy Life and/or
        its licensors own all the intellectual property rights and materials
        contained in this Application. <br /> You are granted a limited license
        only for purposes of viewing the material contained on this Application.
      </p>
    ),
  },
  {
    id: 5,
    title: "Restrictions",
    detail: (
      <ul className="list-disc">
        <li>publishing any Application material in any other media;</li>
        <li>
          selling, sublicensing, and/or otherwise commercializing any
          Application material;
        </li>
        <li>publicly performing and/or showing any Application material;</li>
        <li>
          using this Application in any way that is or may be damaging to this
          Application;
        </li>
        <li>
          using this Application in any way that impacts user access to this
          Application;
        </li>
        <li>
          using this Application contrary to applicable laws and regulations, or
          in any way may cause harm to the Application, or to any person or
          business entity;
        </li>
        <li>
          engaging in any data mining, data harvesting, data extracting, or any
          other similar activity in relation to this Application;
        </li>
        <li>
          using this Application to engage in any advertising or marketing.
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    title: "Your Content",
    detail:
      'In these Terms and Conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this Application. By displaying Your Content, you grant Healthy Life a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.',
  },
  {
    id: 7,
    title: "No warranties",
    detail:
      'This Application is provided "as is," with all faults, and Healthy Life expresses no representations or warranties of any kind related to this Application or the materials contained on this Application.',
  },
  {
    id: 8,
    title: "Limitation of liability",
    detail:
      "In no event shall Healthy Life, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Application.",
  },
  {
    id: 9,
    title: "Variation of Terms",
    detail:
      "Healthy Life is permitted to revise these terms at any time as it sees fit, and by using this Application you are expected to review these terms on a regular basis.",
  },
  {
    id: 10,
    title: "Assignment",
    detail:
      "The Healthy Life is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.",
  },
  {
    id: 11,
    title: "Entire Agreement",
    detail:
      "These Terms constitute the entire agreement between Healthy Life and you in relation to your use of this Application, and supersede all prior agreements and understandings.",
  },
  {
    id: 12,
    title: "Governing Law & Jurisdiction",
    detail:
      "These Terms will be governed by and interpreted in accordance with the laws of the State and/or Country where Healthy Life is established, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.",
  },
  {
    id: 13,
    title: "Contact Information",
    detail:
      "For any inquiries or questions regarding our terms and conditions, please contact support@healthylife.com.",
  },
];

const TermsItems = (term) => {
  return (
    <div key={term.id}>
      <h2 className="text-2xl font-semibold my-4">{term.title}</h2>
      <p>{term.detail}</p>
    </div>
  );
};

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="terms-conditions-container px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <h1 className="text-3xl font-bold text-center my-6">
          Terms and Conditions
        </h1>
        <div className="terms-content text-gray-700 text-sm">
          <h2 className="text-2xl">Welcome to Healthy Life!</h2>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Healthy Life's Application, located in the App Store.
          </p>
          <p>
            By accessing this app we assume you accept these terms and
            conditions. Do not continue to use Healthy Life if you do not agree
            to take all of the terms and conditions stated on this page.
          </p>

          {termsData.map(TermsItems)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
