"use client";
import React from "react";
import Image from "next/image";

const TokenomicsSection: React.FC = () => {
  return (
<section
  className="tokenomics-section min-h-screen py-20 px-6 md:px-12 relative overflow-hidden"
  id="tokenomics"
>
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-animated-gradient"></div>

  {/* Crack Overlay */}
  <div className="absolute inset-0 bg-[url('/images/cracksoverlay.png')] bg-fixed bg-cover opacity-20 pointer-events-none"></div>

  {/* Radial Gradient with Black Edges */}
  <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-90"></div>

  {/* Linear Top and Bottom Fade to Black */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-95"></div>

  {/* Section Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-white">
      MemeLinked Tokenomics
    </h2>

    {/* Mockup Preview */}
    <div className="relative flex justify-center items-center fade-in-up">
      <Image
        src="/images/ML.gif" // Replace with actual mockup path
        alt="Laptop Mockup"
        width={200}
        height={200}
        className="rounded-lg"
      />
    </div>

    {/* Content Cards */}
    <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card Example */}

                {/* Card 1 */}
                <div className="neumorphic-card">
            <h4 className="text-lg font-bold text-green-400">Transaction Tax</h4>
            <p className="text-sm text-gray-300 mt-2">
              <strong className="text-white">Buy:</strong> 0% <br />
              <strong className="text-white">Transfer:</strong> 0% <br />
              <strong className="text-white">Sell:</strong> 4%
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Ensuring fairness and transparency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="neumorphic-card">
            <h4 className="text-lg font-bold text-green-400">Blockchain Energy</h4>
            <p className="text-sm text-gray-300 mt-2">
              Powering unmatched scalability and speed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="neumorphic-card">
            <h4 className="text-lg font-bold text-green-400">Community Rewards</h4>
            <p className="text-sm text-gray-300 mt-2">
              Incentives and rewards for active participants.
            </p>
          </div>

          {/* Card 4 */}
          <div className="neumorphic-card">
            <h4 className="text-lg font-bold text-green-400">Future Expansion</h4>
            <p className="text-sm text-gray-300 mt-2">
              Scaling the ecosystem with innovative utilities.
            </p>
          </div>
        
    </div>

    {/* Text Below */}
    <div className="mt-16 text-center">
      <h3 className="text-3xl font-bold text-green-400">Total Supply</h3>
      <p className="text-xl font-semibold text-white">1 Billion</p>
      <p className="text-sm text-gray-400 mt-2">
        A robust supply fueling growth and scalability.
      </p>
    </div>
  </div>

  {/* Animations and Styles */}
  <style jsx>{`
    /* Animated Gradient Background */
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

    /* Radial Gradient */
    .bg-gradient-radial {
      background: radial-gradient(circle, transparent 40%, black 100%);
    }

    /* Linear Top and Bottom Black Fade */
    .bg-gradient-to-b {
      background: linear-gradient(to bottom, black 0%, transparent 50%, black 100%);
    }

    /* Gradient Animation */
    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    /* Fade-In-Up Animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fade-in-up {
      animation: fadeInUp 1s ease-out forwards;
    }

    /* Neumorphic Card */
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

export default TokenomicsSection;
