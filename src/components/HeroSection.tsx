"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
import CountUp from "react-countup";

const HeroSection: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [burnedSupply, setBurnedSupply] = useState<string | null>(null);

  // Fetch supply data (client-side)
  const fetchSupplyData = async () => {
    const provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
    );
    const tokenAddress = "0xca76bf98b6e44df7360da8650e701f6d9d94bb58"; // ERC-20 token address
    const burnAddress = "0x000000000000000000000000000000000000dead"; // Common burn address
    const tokenABI = [
      // totalSupply function
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        type: "function",
      },
      // balanceOf function for burned supply
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
      },
    ];

    try {
      const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
      const totalSupply = await contract.totalSupply();
      const burnedSupply = await contract.balanceOf(burnAddress);
      const formattedTotal = ethers.formatEther(totalSupply); // Assuming 18 decimals
      const formattedBurned = ethers.formatEther(burnedSupply);
      setTotalSupply(formattedTotal);
      setBurnedSupply(formattedBurned);
    } catch (error) {
      console.error("Error fetching supply data:", error);
      setTotalSupply(null);
      setBurnedSupply(null);
    }
  };

  // Fetch supply on mount and every hour
  useEffect(() => {
    fetchSupplyData(); // Initial fetch
    const interval = setInterval(fetchSupplyData, 60 * 60 * 1000); // 1 hour = 3,600,000 ms
    return () => clearInterval(interval); // Cleanup
  }, []);

  // Calculate circulating supply
  const circulatingSupply =
    totalSupply && burnedSupply
      ? (parseFloat(totalSupply) - parseFloat(burnedSupply)).toString()
      : null;

  // Calculate burned supply percentage
  const burnedPercentage =
    totalSupply && burnedSupply
      ? ((parseFloat(burnedSupply) / parseFloat(totalSupply)) * 100).toFixed(2)
      : null;

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/ML11.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 mt-20 md:mt-0 min-h-screen flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
        {/* Right Column: Project Info + Socials */}
        <div
          className="project-info flex flex-col justify-center items-center p-8 bg-black/90 backdrop-blur-xl rounded-xl shadow-xl text-center w-full"
          style={{
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(38, 35, 35, 0.38)",
          }}
        >
          {/* Logo */}
          <Image
            src="/images/MLLogo.png"
            width={150}
            height={150}
            alt="MemeLinked Logo"
            className="mb-6 rounded-full animate-pulse"
          />

          {/* Title */}
          <h1 className="text-5xl font-extrabold mb-2">
            <span className="meme animate-glitch">Meme</span>
            <span className="animate-glitch2">LINKED</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-4">
            A DeFi project on Ethereum where memes meet social media.
          </p>

          {/* Token Info Widget */}
          <div className="mb-6 w-full max-w-4xl">
  <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg">
    {/* Token Contract Address (Above Stats) */}
    <div className="mb-4 text-center">
      <p className="text-sm text-gray-200 mb-2">$MK Contract Address</p>
      <div className="bg-white text-black px-3 py-1 rounded-md text-sm font-mono truncate mx-auto w-fit">
        0xca76bf98b6e44df7360da8650e701f6d9d94bb58
      </div>
    </div>

    <div className="flex flex-row items-center justify-center space-x-6">
      {/* Total Supply */}
      <div className="flex-shrink-0 text-center">
        <p className="text-sm text-gray-200">Total Supply</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-blue-400">
            {totalSupply ? (
              <CountUp
                start={0}
                end={Number(totalSupply)}
                decimals={2}
                duration={2.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            ) : (
              "Fetching..."
            )}
          </span>
          <span className="ml-1 text-gray-300">Tokens</span>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="border-l border-gray-600 h-12"></div>

      {/* Circulating Supply */}
      <div className="flex-shrink-0 text-center">
        <p className="text-sm text-gray-200">Circulating Supply</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-green-400">
            {circulatingSupply ? (
              <CountUp
                start={0}
                end={Number(circulatingSupply)}
                decimals={2}
                duration={2.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            ) : (
              "Fetching..."
            )}
          </span>
          <span className="ml-1 text-gray-300">Tokens</span>
        </div>
      </div>

      {/* Divider 2 */}
      <div className="border-l border-gray-600 h-12"></div>

      {/* Burned Supply */}
      <div className="flex-shrink-0 text-center">
        <p className="text-sm text-gray-200">Burned Supply</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-red-400">
            {burnedSupply ? (
              <CountUp
                start={0}
                end={Number(burnedSupply)}
                decimals={2}
                duration={2.5}
                formattingFn={(value) => value.toLocaleString()}
              />
            ) : (
              "Fetching..."
            )}
          </span>
          <span className="ml-1 text-gray-300">Tokens</span>
        </div>
      </div>

      {/* Divider 3 */}
      <div className="border-l border-gray-600 h-12"></div>

      {/* Burned Supply Percentage */}
      <div className="flex-shrink-0 text-center">
        <p className="text-sm text-gray-200">Burned Supply (% of Total)</p>
        <span className="text-lg font-bold text-yellow-400">
          {burnedPercentage ? `${burnedPercentage}%` : "Fetching..."}
        </span>
      </div>
    </div>
  </div>
</div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://x.com/memelinked">
              <Image
                src="/icons/x.png"
                width={50}
                height={50}
                alt="Twitter"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://t.me/memelinkedportal">
              <Image
                src="/icons/telegram.png"
                width={50}
                height={50}
                alt="Telegram"
                className="socials border-2 border-green-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5">
              <Image
                src="/icons/dextools.png"
                width={50}
                height={50}
                alt="DexTools"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://dexscreener.com/ethereum/0xb062444f2844ddc306533243d8f0a1f67e26fdb5">
              <Image
                src="/icons/dexscreener.png"
                width={50}
                height={50}
                alt="DexScreener"
                className="socials border-2 border-green-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://linktr.ee/memelinked">
              <Image
                src="/icons/linktree.png"
                width={50}
                height={50}
                alt="Linktree"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://www.tickertrending.com/ticker/MK">
              <Image
                src="/icons/TickerTrending.jpg"
                width={50}
                height={50}
                alt="Ticker Trending"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;