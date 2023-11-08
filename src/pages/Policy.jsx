import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Policy = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto md:flex-row justify-between items-center gap-12">
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
              PRIVACY POLICY
            </h2>
          </motion.div>
          <p className="md:mt-12 text-sm text-neutralGrey mb-8">
            Contact and identification information, such as name, address, email
            address, telephone number, account login information (including, if
            applicable, social media account information for login purposes),
            signature, driver’s license information, and social security number.
            Demographic information, such as gender, age or date of birth,
            marital status, military or veteran status, race or national origin,
            household composition, professional, education, or
            employment-related information, and information about your
            interests. Financial information, such as payment card information
            (e.g. credit or debit card number, CVV code, expiration date),
            financial account information, payment history, and information
            related to your creditworthiness, assets, income, or liabilities.
            Information about your vehicles, products, and relationship with us,
            such as vehicle license plate number, VIN, make, model, and year;
            selling and servicing dealers; date of purchase, rental, or lease;
            financing, rental, or lease term; serial number or other unique
            product identifiers (e.g. part number, UPC); service history;
            mileage, oil/battery status, fuel or charging history, electrical
            system function, gear status, and diagnostic trouble codes; purchase
            information and history; loyalty program information; and
            information about how you interact with us, including how you
            interact with our vehicles, products and services. Internet or other
            network or device activity, such as information about the browsers
            and devices you use to access our Sites, emails, and advertisements
            (e.g. device type, browser type and language, hardware model,
            operating system version, unique device identifiers, and IP address)
            and how you interact with our Sites, emails, and advertisements
            (e.g. features used, content viewed, addresses of referring
            websites, and the dates and times of your interactions). Location
            information. When you use our Sites and services we may collect and
            process location information, including precise geolocation
            information, as described below. Audio, electronic, visual or
            similar information, such as your communications with us; photos,
            videos or other content you submit to us or post on our Sites or
            services, for example, in connection with a sweepstakes or contest;
            and footage from cameras in our retail stores and facilities,
            collected as described below. Other information that identifies or
            can be reasonably associated with you. 2. HOW WE COLLECT INFORMATION
            We generally collect your information in three ways: (1) when you
            provide it to us; (2) when we collect it automatically; and (3) and
            when we receive it from other sources. Information you provide to
            us. Some examples of when you provide us information include when
            you: submit information on our Sites; participate in an event,
            sweepstakes, contest, other or promotion; purchase vehicles,
            products, or services on our Sites or in our retail stores; and
            communicate with us. Some examples of the types of information you
            provide us include: contact and identification information;
            demographic information; financial information; information about
            your vehicles and products; and audio, electronic, or visual
            information. Information collected automatically. Some examples of
            information we collect automatically include: Device and usage
            information. We may collect technical data about the browsers and
            devices you use to access our Sites, emails, and advertisements,
            such as, device type, browser type and language, hardware model,
            operating system version, unique device identifiers, IP address,
            device event information (e.g. hardware settings, date and time of
            your request, referral URL, crashes, and system activity). We may
            also collect information about how you interact with our Sites,
            emails, and advertisements, such as features used, content viewed,
            and the dates and times of your interactions. This information is
            collected automatically as you access the Sites, emails, and
            advertisements. Cookies and similar technologies. Cookies and
            similar technologies are pieces of information stored directly on
            the device you are using. Cookies allow us to collect information
            such as browser type, time spent on the Sites, pages visited, and
            language preferences. We and our service providers use the
            information for security purposes, to facilitate navigation, to
            display information more effectively, and to personalize your online
            experience and our marketing and advertising efforts. In addition,
            we use cookies to gather statistical information about usage of the
            Sites in order to improve their design and functionality, understand
            how they are used, and assist us with resolving questions about
            them. You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser settings to decline cookies if you prefer. If you would
            prefer not to accept cookies, most browsers will allow you to: (i)
            change your browser settings to notify you when you receive a
            cookie, which lets you choose whether or not to accept it; (ii)
            disable existing cookies; or (iii) set your browser to automatically
            reject any cookies. If you set your browser to reject cookies, parts
            of the Sites may not work for you. Pixel tags, web beacons, clear
            GIFs, or other similar technologies. These may be used in connection
            with some of our Sites, emails, or advertisements, to, for example,
            track the actions of Site users, compile statistics about Site usage
            and response rates, determine whether you have opened and acted upon
            our emails, and assess the effectiveness of our marketing. Analytics
            and advertising. We use third-party analytics services that use
            cookies and similar technologies to better understand how users
            engage with our Sites, including services provided by Google and
            Adobe. Please visit http://www.google.com/policies/privacy/partners/
            and http://www.adobe.com/privacy/marketing-cloud.html for more
            information about how Google and Adobe collect and use data when you
            use their partners’ websites or mobile applications. We also use
            third-party advertising services to provide advertisements for
            Polaris vehicles, products, or services that may be of interest to
            you when you visit websites or other online services. We allow
            select third parties, including these analytics and advertising
            services, to place cookies on our Sites. These third parties may
            collect information about your online activities over time and
            across third-party websites, and they may be members of industry
            self-regulatory groups such as the Network Advertising Initiative
            (NAI), Digital Advertising Alliance (DAA), and European Digital
            Advertising Alliance (eDAA). The websites for these groups provide
            more information on interest-based online advertising and how to opt
            out of receiving interest-based online ads from participating
            companies. Do Not Track requests. Some browsers may transmit “Do Not
            Track” (“DNT”) signals to the websites you visit. Because there is
            not common agreement about how to interpret DNT signals, we do not
            take action in response to them. Location information: We may
            collect information about the location of your device, including
            precise geolocation information from your device and imprecise
            location from, for example, your IP address. When you participate in
            one of our demo rides, or a Polaris Adventures, Indian Motorcycle
            Rentals, or similar rental experience, the vehicle that you use may
            be equipped with GPS-tracking and other technology that may collect
            information related to the state of the vehicle, including, for
            example, the vehicle’s location, speed, and rate of braking or
            acceleration. Polaris may use this information to provide roadside
            assistance, to locate lost or stolen vehicles, and as otherwise
            described in this Policy. Facility cameras: We may use cameras in
            and around our retail stores and other facilities for security
            purposes and operational purposes such as measuring traffic
            patterns, tracking in-stock levels, and helping us to better design
            our stores and facilities and serve our customers. Purchase
            information and history: We may collect information about your
            transactions in our stores and on our Sites, including, for example:
            the vehicles, products and services you purchase, and how frequently
            you purchase them; the price and any promotions or rewards
            associated with a purchase; and the items you have placed on your
            “wishlist” or saved for future purchases. Information we receive
            from other sources. We may combine the information that you provide
            us and that we collect automatically with information that we
            collect from other sources, such as our dealers, distributors, the
            business partners we work with to make certain products and services
            available to you (as described below), consumer data resellers, and
            other third-party sources. For example, we receive information from
            our dealers, distributors, and business partners, such as contact
            and identification information; financial information; and
            information about vehicles, products, and website content or
            services that you have viewed, inquired about, or purchased. Our
            independent dealers, third-party distributors, and business partners
            are separate legal entities with their own privacy practices. For
            questions about the privacy practices of a dealer, distributor, or
            business partner you interact with, please contact them directly. We
            may also obtain demographic and other information about you from
            consumer data resellers and other third-party sources. This
            information allows us to enhance our existing information for
            accuracy, security, and other purposes, such as increasing the
            relevance of our marketing, improving our communications with you,
            personalizing your experience with our Sites and services, and
            detecting fraud. Some information we collect from third-party
            sources is publicly available. For example, we may collect
            information that you or others submit in a public forum, such as a
            blog, social network, or chat room. We also create information
            ourselves when we analyze the information we have collected about
            you. And we combine information that we collect about you, as
            described above, with information that we collect in other contexts,
            such as information we collect through our Ride Command services,
            which are subject to a separate privacy notice. 3. HOW WE MAY USE
            INFORMATION WE COLLECT We may use the information we collect to:
            Provide, maintain, protect, and improve our vehicles, products,
            services and Sites. This may include, for example, customizing them
            to your preferences or interests, making them more compatible with
            your technology, or otherwise making them easier to use; analyzing
            how they are used; and evaluating, maintaining, and improving their
            performance, effectiveness, security, and safety. Develop new
            vehicles, products, services, and Sites. Process payments and
            transactions. Promote our vehicles, products, services, and Sites.
            This may include, for example, developing and providing promotional
            and advertising materials about the Polaris family of brands that
            may be of interest to you; analyzing the effectiveness of those
            materials; and customizing and improving them. Communicate and
            manage our relationship with you. This may include, for example,
            providing you information about our vehicles, products, services,
            and Sites, and your transactions with us; responding to questions,
            inquiries, and service requests that you make; customizing and
            improving our communications with you and analyzing their
            effectiveness; communicating with you about, and administering your
            participation in, sweepstakes, contests, surveys, promotions,
            events, and similar activities. Address warranty claims and provide
            vehicle and product service and support. This may include, for
            example, investigating, validating, responding to, and administering
            warranty claims; providing vehicle and other product service and
            maintenance information and support; and providing recall and safety
            bulletin information. Address legal issues. This may include, for
            example, obtaining legal advice and establishing, exercising, or
            defending legal claims; complying with laws, regulatory
            requirements, contractual obligations, court orders, other legal
            process or obligations, or lawful requests from public and
            government authorities; detecting, preventing, and responding to
            fraud, intellectual property infringement, security issues,
            violations of our agreements, violations of law, or other misuse of
            our vehicles, products, services, or Sites; and protecting the
            safety, rights, welfare, or property of Polaris, you, or others. We
            may also use your information for other internal Polaris business
            operations, as permitted by applicable law, and other uses
            consistent with the context in which the information was collected
            or with your consent. We may anonymize or aggregate any of the
            information we collect and use it for any purpose, including for
            research and product-development purposes. Such information will not
            identify you individually. Communications. Communications with you
            in connection with these uses may be via different methods, such as
            mail, telephone, email, text message, social media, or other
            electronic messages, or via our Sites. 4. HOW INFORMATION WE COLLECT
            MAY BE SHARED INFORMATION WE MAY SHARE We may share your information
            as follows: Polaris brands and companies. We may share your
            information among the Polaris family of brands and companies,
            including Polaris Inc. subsidiaries and affiliates, which may be
            located in other countries. We may share your information among the
            Polaris family of brands and companies for various purposes,
            including, for example, to promote vehicles, products, and services
            from the Polaris family of brands and companies, and for research
            and development purposes. Vendors. We may share your information
            with third parties who provide services to us, such as Site hosting;
            data analysis; IT services; payment processing; fraud monitoring;
            services related to product development and maintenance; and
            communications, marketing, and online and offline advertising
            services. Dealers and distributors. We may share your information
            with our dealers and distributors for various purposes, including,
            for example, to provide you information about vehicles, products,
            services, or promotions that may be of interest to you; to help our
            dealers and distributors serve you better; and to provide you with
            warranty, recall, and service information. Our independent dealers
            and third-party distributors are separate legal entities with their
            own privacy practices. For questions about the privacy practices of
            a dealer or distributor you interact with, including how to opt out
            of marketing communications from them, please contact them directly.
            Business partners. To make certain products and services—such as
            Polaris Adventures, Indian Motorcycle Rentals, online
            prequalification for vehicle or product financing, and financing for
            vehicle or product purchases—available to you, we work closely with
            independent business partners. When you schedule and use services
            provided by these business partners, we may share your information
            with them or you may provide it to them directly. We may also share
            your information with independent business partners when we work
            with them to sponsor sweepstakes, contests, events, and other
            promotions. This Policy does not address, and we are not responsible
            for, the privacy, information, or other practices of these business
            partners. We encourage you to review the privacy policies of any
            third-party business partners whose services you reserve or obtain
            through our Sites or services. Legal reasons. We may share your
            information with third parties when we have a good faith belief that
            disclosure is necessary to: obtain legal advice or establish,
            exercise, or defend legal claims; comply with laws, regulatory
            requirements, contractual obligations, court orders, or other legal
            process or obligations, or lawful requests from public and
            government authorities; detect, prevent, or respond to fraud,
            intellectual property infringement, security issues, violations of
            our agreements or law, or other misuse of our vehicles, products,
            services, or Sites; protect the safety, rights, welfare, or property
            of Polaris, you, or others, as required or permitted by applicable
            law. Business transfers. We may share your information with third
            parties in connection with any reorganization, merger, sale, joint
            venture, assignment, transfer, or other disposition of all or any
            portion of our business, assets, or stock (including in connection
            with any bankruptcy or similar proceedings). When you post
            information to our Sites. When you post or share information on our
            Sites, the information you post or share, including information that
            may identify you, may be seen by other visitors to our Sites,
            including the public when those Sites are publicly available.
            Otherwise with your consent. We may share your information with
            third parties when we have your consent to do so. We may share
            anonymized or aggregated information internally and with third
            parties for any purpose. Such information will not identify you
            individually.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
