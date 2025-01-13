"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  images: string[];
  features: {
    title: string;
    shortText: string;
    expandedText: string;
    image: string;
  }[];
}


const AboutSection: React.FC<AboutSectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/images/default_logo.png');
  const [aboutActiveTab, setAboutActiveTab] = useState('defi');
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const icons = [
    { src: '/icons/influencer.png', alt: 'Influencer Profiles', tooltip: 'Create and manage profiles to enhance visibility.' },
    { src: '/icons/feed.png', alt: 'Public Feed', tooltip: 'Stay updated with the latest posts and discussions.' },
    { src: '/icons/verified2.png', alt: 'Exclusive Membership', tooltip: 'Gain exclusive access as a verified member.' },
    { src: '/icons/boost.png', alt: 'Merit-Based Boosts', tooltip: 'Boost your profile based on your contributions.' },
    { src: '/icons/ads.png', alt: 'Constant Ads', tooltip: 'Promote content through constant ad placements.' },
  ];

  return (
    <section className="about-section bg-[black] text-black py-16 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center">About</h2>
        <div className="divider h-1 bg-green-500 mb-8 mx-auto w-full left-0"></div>
        <p className="text-lg mb-4 text-center md:text-left text-gray-200">
          MemeLinked is more than just a token; it&apos;s a unique blend of meme culture and utility within the MSI ecosystem.
          Founded by the visionary Pablo Cro, MemeLinked offers an engaging social network that fuels organic growth and
          exposure for real projects. Our platform bridges the gap between fun and functionality, empowering users to
          connect in a space where communities thrive and opportunities abound.
        </p>
       

          {/* Right Container for Animated Pentagon */}
          <div className="about-interactive w-full bg-black p-3 rounded-xl backdrop-blur-md glassmorphism-effect4 flex flex-row space-y-8 shadow-lg text-black">
      {/* Title */}

      <div className="w-full flex scale-75 justify-center">
            <Image
              src="/images/ML3.png"
              alt="DeFi Social Network"
              className="rounded-lg animate-fade-in w-full h-full"
              width={500}
              height={400}
            />
          </div>
          <div className="flex flex-col mt-8 gap-3">
  {/* Left Container for Image */}
  <h2 className="text-3xl font-extralight text-center text-gray-200">Explore the Scope of MemeLinked</h2>
  {/* Project Features */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* DeFi Social Network */}
    <div className="feature-card p-4 bg-white border border-green-500 rounded-lg shadow-md transform hover:scale-105 transition-transform">
      <h3 className="text-lg font-semibold text-black mb-2">DeFi Social Network</h3>
      <p className="text-md text-black">
        Connect, engage, and share financial insights with like-minded users on an innovative DeFi-focused social platform.
      </p>
    </div>
    {/* GameFi */}
    <div className="feature-card p-4 bg-white border border-green-500 rounded-lg shadow-md transform hover:scale-105 transition-transform">
      <h3 className="text-lg font-semibold text-black mb-2">GameFi</h3>
      <p className="text-md text-black">
        Experience GameFi with interactive mini-games like MonkeyKongRacing, offering new ways to earn and engage.
      </p>
      <ul className="list-disc pl-4 mt-2 text-gray-700 text-md">
        <li>Simple Yet Addictive Games</li>
        <li>Marketing Missions</li>
        <li>Earn MSI and Partner Tokens</li>
      </ul>
    </div>
    {/* Memes */}
    <div className="feature-card p-4 bg-white  border border-green-500 rounded-lg shadow-md transform hover:scale-105 transition-transform">
      <h3 className="text-lg font-semibold text-black mb-2">Memes</h3>
      <p className="text-md text-black">
        Dive into a community-driven culture with meme creation, contests, and viral challenges that amplify engagement.
      </p>
    </div>
  </div>
  {/* Holographic Visual Element */}
  <div className="holographic-overlay w-full mt-4 p-4 bg-gradient-to-r from-black via-green-900 to-purple-700 animate-glow rounded-lg shadow-lg">
    <p className="text-center font-mono text-md text-white">
      Join MemeLinked and explore the future where memes, finance, and gaming merge seamlessly into one ecosystem.
    </p>
  </div>
</div>

        </div>

        {/* Content for Tabs */}
        <div className="flex mt-8 flex-col md:flex-row">
          <aside className="flex-none w-full md:w-48 mb-4 md:mb-0 md:mr-4">
            <button
              className={`tab-button w-full px-4 py-2 my-2 text-left ${
                aboutActiveTab === 'defi' ? 'bg-green-600 italic glassmorphism-effect text-white  rounded-[30px]' : 'bg-black rounded-[30px] text-white hover:bg-white  hover:text-black'
              }`}
              onClick={() => setAboutActiveTab('defi')}
            >
              DeFi Social Network
            </button>
            <button
              className={`tab-button w-full px-4 py-2 my-2 text-left rounded-sm ${
                aboutActiveTab === 'gamefi' ? 'bg-green-600 italic glassmorphism-effect text-white rounded-[30px]' : 'bg-black rounded-[30px] text-white hover:bg-white  hover:text-black'
              }`}
              onClick={() => setAboutActiveTab('gamefi')}
            >
              GameFi
            </button>
            <button
              className={`tab-button w-full px-4 py-2 my-2 text-left rounded-sm ${
                aboutActiveTab === 'memes' ? 'bg-green-600 italic glassmorphism-effect text-white rounded-[30px]' : 'bg-black rounded-[30px] text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setAboutActiveTab('memes')}
            >
              Memes
            </button>
          </aside>
          <div className="flex-grow bg-[#090909] p-2 rounded-lg text-white">
            {aboutActiveTab === 'defi' && (
              <div className="glassmorphism-effect p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-200 mb-4">DeFi Social Network</h3>
                <p className="text-gray-300">
                  MemeLinked's social network platform provides a space where users can engage, connect, and grow within the DeFi community. With interactive features and project spotlights, users experience an innovative approach to organic exposure and community-driven growth.
                </p>
                <div className="flex-col lg:flex-row flex items-center">
                <div
            className={`w-full my-20 md:w-1/2 relative flex justify-center items-center ${isHovered ? 'paused-animation' : 'animate-spin-slow'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
<div className="pentagon-container relative flex items-center justify-center">
  {/* Central Main Image */}
  <Image
    src="/images/default_logo.jpg"
    alt="Central Display"
    className="z-10 w-[150px] h-[150px] rounded-full" // Added z-index and rounded style
    width={150}
    height={150}
  />

  {/* Neon Ring */}
  <div className="neon-ring absolute w-[300px] h-[300px] rounded-full z-0"></div>

  {/* Icons forming a static pentagon layout */}
  <div className="icon-orbit-container absolute w-full h-full flex items-center justify-center z-10">
    {icons.map((icon, index) => (
      <div
        key={index}
        className="icon-container absolute group"
        style={{
          transform: `rotate(${72 * index}deg) translate(130px) rotate(-${72 * index}deg)`, // Position icons in a pentagon
        }}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={40}
          height={40}
          className="rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className="tooltip absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 z-50 transition-opacity duration-300 p-2 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm"
        >
          <span className="text-xs text-black">{icon.tooltip}</span>
        </div>
      </div>
    ))}
  </div>
</div>



          </div>
                <Image
                  src="/images/ML1.webp"
                  alt="DeFi Social Network"
                  className="mt-4 rounded-lg shadow-lg glassmorphism-effect animate-fade-in"
                  width={400}
                  height={250}
                />
                
                </div>
              </div>
            )}
            {aboutActiveTab === 'gamefi' && (
             <div>
             {/* Row 1 */}
             <div className="glassmorphism-effect p-6 mb-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
               <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                 <h3 className="text-3xl font-bold text-green-500 mb-4">Introducing TAP to EARN</h3>
                 <p className="text-gray-300">
                   $MSI is about to launch TAP to EARN mini-games, offering a new way for users to earn $MSI tokens and future
                   partner tokens. These games are designed to engage the community and introduce a new dimension of fun.
                 </p>
               </div>
               <div className="md:w-1/2">
                 <Image
                   src="/images/gamefi.png"
                   alt="TAP to EARN"
                   width={400}
                   height={250}
                   className="rounded-lg shadow-lg glassmorphism-effect2"
                 />
               </div>
             </div>

             {/* Row 2 */}
             <div className="glassmorphism-effect2 border-white p-6 mb-8 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center md:items-start">
               <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                 <h3 className="text-3xl font-bold text-green-500 mb-4">How TAP to EARN Will Work</h3>
                 <ul className="list-decimal list-inside text-gray-300">
                   <li className="mb-2">
                     <strong>Simple Yet Addictive Games</strong>: These mini-games are quick, engaging, and easy to play.
                   </li>
                   <li className="mb-2">
                     <strong>Marketing Missions</strong>: Complete missions tied to MSI's marketing efforts for rewards.
                   </li>
                   <li>
                     <strong>Earn $MSI and Partner Tokens</strong>: Complete missions to earn $MSI and future partner tokens.
                   </li>
                 </ul>
               </div>
               <div className="md:w-1/3 row">
                 <Image
                   src="/images/gamefi.gif"
                   alt="TAP to EARN Features"
                   width={200}
                   height={250}
                   className="rounded-lg self-center shadow-lg"
                 />
               </div>
             </div>
           </div>
            )}
            {aboutActiveTab === 'memes' && (
              <div>
                <h3 className="text-2xl md:text-3xl mb-2">Celebrating Meme Culture</h3>
                <div className="carousel-container">
                  <Image src={selectedImage} alt="Meme Preview" width={400} height={400} className="w-full rounded-lg border border-green-500" />
                  <div className="gallery mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={image}
                          alt={`Gallery Item ${index + 1}`}
                          className="w-full h-auto cursor-pointer rounded-lg hover:border-2 hover:border-green-500"
                          width={200}
                          height={200}
                          onClick={() => handleImageClick(image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;