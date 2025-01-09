"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const CarouselSection: React.FC = () => {
  const slides = [
    {
        image: "feedgif_f7uxnx",
        title: "Cutting-edge Social Media Functionality",
        description:
          "Engage with advanced tools for personalized, secure, and collaborative social media experiences.",
        features: [
          { title: "Enhanced Security", description: "Keep your data safe with advanced encryption." },
          { title: "User-Friendly Interface", description: "Experience a clean and intuitive design." },
          { title: "Content Customization", description: "Personalize your content and feeds." },
          { title: "Collaborative Features", description: "Engage with others through innovative tools." },
        ],
      },
    {
      image: "wallet_kkrv8v",
      title: "Decentralized Wallet Integration",
      description:
        "Effortlessly manage your assets with secure and transparent wallet integration across platforms.",
      features: [
        { title: "Secure Transactions", description: "Conduct safe and transparent transactions." },
        { title: "Multi-Wallet Support", description: "Easily connect multiple wallets to the platform." },
        { title: "Seamless Payments", description: "Effortless payments with crypto integration." },
        { title: "Cross-Platform Access", description: "Access your wallet across various devices." },
      ],
    },
    {
      image: "hashtags_nargok",
      title: "Trending Hashtags",
      description:
        "Stay updated on the latest trends and amplify your content visibility with real-time hashtag insights.",
      features: [
        { title: "Discover Trends", description: "Stay updated with trending topics and hashtags." },
        { title: "Boost Visibility", description: "Enhance your content's reach using popular hashtags." },
        { title: "Audience Insights", description: "Understand your audience with hashtag analytics." },
        { title: "Real-Time Updates", description: "Get real-time updates on emerging trends." },
      ],
    },
    {
      image: "membership2_akzoar",
      title: "Multi-tier Membership Model",
      description:
        "Unlock exclusive benefits and tailor your experience with a scalable membership structure.",
      features: [
        { title: "Exclusive Access", description: "Unlock premium content and features." },
        { title: "Tiered Benefits", description: "Choose a plan tailored to your needs." },
        { title: "Community Rewards", description: "Earn rewards for active participation." },
        { title: "Scalable Memberships", description: "Expand benefits as your engagement grows." },
      ],
    },

    {
        image: "", // Cloudinary public ID
        title: "Advanced User Dashboard Interface",
        description:
          "Experience the future of social media with decentralized platforms that empower users with innovative features and tools.",
        features: [
          { title: "Social Connectivity", description: "Connect seamlessly across a decentralized platform." },
          { title: "Project Listings", description: "Showcase projects for engagement and exposure." },
          { title: "Content Monetization", description: "Monetize your social media content easily." },
          { title: "Advanced Analytics", description: "Gain insights into trends and audience behavior." },
        ],
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="carousel-section min-h-screen py-20 px-6 md:px-12 relative overflow-hidden"
      id="carousel"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient"></div>
      <div className="absolute inset-0 bg-[url('/images/cracksoverlay.png')] bg-fixed bg-cover opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-95"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-white">
          {slides[currentIndex].title}
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
          >
            &#8592;
          </button>

          {/* Laptop Mockup */}
          <div className="relative">
            <Image
              src="/images/laptopmock.png"
              alt="Laptop Mockup"
              width={800}
              height={500}
              className="rounded-lg "
            />
            {/* Changing Screen Image */}
            <div className="absolute flex flex-col inset-0 top-[13%] left-[13%] w-[74%] h-[62%] overflow-hidden rounded-md">
              <CldImage
                src={slides[currentIndex].image}
                width="800"
                height="500"
                alt="MemeLinked | 2025"
                crop="fill"
                className="transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
          >
            &#8594;
          </button>
        </div>

        {/* Dynamic Description */}
        <div className="mt-6">
          <p className="text-xl font-medium text-gray-300 max-w-2xl mx-auto">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* Quadrants Layout for lg and Above */}
        <div className="relative lg:block hidden">
          <div className="absolute top-[7vh] left-[10%] w-[20%]">
            <div className="neumorphic-card">
              <h4 className="text-lg font-bold text-green-400">
                {slides[currentIndex].features[0].title}
              </h4>
              <p className="text-sm text-gray-300 mt-2">
                {slides[currentIndex].features[0].description}
              </p>
            </div>
          </div>
          <div className="absolute top-[7vh] right-[10%] w-[20%]">
            <div className="neumorphic-card">
              <h4 className="text-lg font-bold text-green-400">
                {slides[currentIndex].features[1].title}
              </h4>
              <p className="text-sm text-gray-300 mt-2">
                {slides[currentIndex].features[1].description}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[5%] left-[10%] w-[20%]">
            <div className="neumorphic-card">
              <h4 className="text-lg font-bold text-green-400">
                {slides[currentIndex].features[2].title}
              </h4>
              <p className="text-sm text-gray-300 mt-2">
                {slides[currentIndex].features[2].description}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[5%] right-[10%] w-[20%]">
            <div className="neumorphic-card">
              <h4 className="text-lg font-bold text-green-400">
                {slides[currentIndex].features[3].title}
              </h4>
              <p className="text-sm text-gray-300 mt-2">
                {slides[currentIndex].features[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-animated-gradient {
          background: linear-gradient(
            270deg,
            #4c1460,
            #39632b,
            #24243e,
            #ededed
          );
          background-size: 400% 400%;
          animation: gradient-animation 8s ease infinite;
        }

        .neumorphic-card {
          background: linear-gradient(145deg, #0f0f0f, #000000);
          box-shadow: 10px 10px 20px #141414, -10px -10px 20px #2e2e2e;
          border-radius: 20px;
          padding: 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .neumorphic-card:hover {
          transform: translateY(-10px);
          box-shadow: 10px 10px 30px #121212, -10px -10px 30px #3a3a3a;
        }
      `}</style>
    </section>
  );
};

export default CarouselSection;
