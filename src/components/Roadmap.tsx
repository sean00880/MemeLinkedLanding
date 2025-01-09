"use client";
import React from "react";
import Image from "next/image";

const RoadmapSection: React.FC = () => {
  const roadmapPhases = [
    "Phase 1: Project Launch",
    "Phase 2: Marketing & Centralized Exchanges",
    "Phase 3: Platform Launch",
    "Phase 4: Feature Expansion and GameFi Introduction",
  ];

  return (
    <section
      className="roadmap-section py-20 px-6 md:px-12 bg-gradient-to-b from-black via-[#1a1a1a] to-black text-white relative"
      id="roadmap"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-black to-black opacity-60 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl w-full text-right font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          MemeLinked Roadmap
        </h2>

        {/* Circular Roadmap Layout */}
        <div className="hidden md:flex relative w-full h-[600px] md:h-[700px] mx-auto items-center justify-center p-4">
          {/* Central Display */}
          <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-black/70 p-8 rounded-full shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-purple-400 text-center">
              Current Phase
            </h3>
            <p className="text-sm text-gray-200 mt-2 text-center p-2">
              Explore MemeLinked’s roadmap for growth and community engagement.
            </p>
            <div className="absolute inset-0 animate-spin-slow border-t-4 border-purple-500 rounded-full"></div>
            <div className="absolute inset-4 animate-spin-reverse border-t-2 border-white rounded-full"></div>
          </div>

          {/* Interactive Phases */}
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className={`absolute w-[200px] h-[200px] flex flex-col items-center justify-center text-center p-4 bg-black/70 backdrop-blur-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-300`}
              style={{
                transform: `rotate(${index * (360 / roadmapPhases.length)}deg) translate(300px) rotate(-${index * (360 / roadmapPhases.length)}deg)`,
              }}
            >
              <h4 className="text-md font-semibold text-purple-400">{phase}</h4>
            </div>
          ))}
        </div>

        {/* Stacked Layout for Small Screens */}
        <div className="md:hidden flex flex-col gap-8">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className="w-full bg-black/70 backdrop-blur-lg rounded-lg shadow-lg p-6"
            >
              <h4 className="text-md font-semibold text-purple-400">{phase}</h4>
            </div>
          ))}
        </div>

        {/* Additional Content Beneath the Visual Roadmap */}
        <div className="mt-16 space-y-12">
          {/* Phase 1 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-200">
              Phase 1: Project Launch
            </h3>
            <p className="text-md text-gray-300 mt-2">
              Begin with the development and initial rollout of the MemeLinked
              project, featuring fundamental DeFi tools and interactive
              community engagement. Execute community onboarding campaigns and
              deploy essential utilities around community exploration and growth
              in DeFi.
            </p>
          </div>

          {/* Phase 2 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-200">
              Phase 2: Marketing & Centralized Exchanges
            </h3>
            <p className="text-md text-gray-300 mt-2">
              Expand MemeLinked’s presence through targeted marketing campaigns
              and secure listings on top cryptocurrency exchanges. Promote the
              platform with influencer collaborations, social media campaigns,
              and AMA sessions to amplify community awareness.
            </p>
          </div>

          {/* Phase 3 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-200">
              Phase 3: Platform Launch
            </h3>
            <p className="text-md text-gray-300 mt-2">
              Launch the full MemeLinked platform, complete with user accounts,
              project listings, and enhanced social interaction tools.
              Incorporate user feedback for continuous improvements and host
              activities like polls and member spotlights to encourage active
              participation.
            </p>
          </div>

          {/* Phase 4 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-200">
              Phase 4: Feature Expansion and GameFi Introduction
            </h3>
            <p className="text-md text-gray-300 mt-2">
              Enhance user profiles and dashboards with advanced features.
              Introduce GameFi with MonkeyKongRacing for interactive gameplay
              that adds value to the ecosystem. Implement community challenges
              and reward systems to incentivize active participation and
              maintain user interest.
            </p>
          </div>
        </div>

        {/* Bottom Visual */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/preview2.png"
            alt="MemeLinked Roadmap Visual"
            width={500}
            height={400}
            className="rounded-[12vh] shadow-green-500 hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
