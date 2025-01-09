// src/app/docs/[slug]/page.tsx
'use client'; // Indicate that this is a client-side component
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const docs = [
  {
    title: 'BTCRT Platform Overview',
    href: 'platform-overview',
    content: (
      <>
        <div className="lg:ml-[26%] mt-[10vh] items-center justify-center flex flex-col p-6 glassmorphism rounded-xl shadow-2xl backdrop-blur-lg transition-transform hover:shadow-glow">
          <Image
            src="/images/platform-overview.png"
            alt="BTCRT Platform Overview"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          />
          <h1 className="text-5xl font-extrabold mb-4 text-white">BTCRT Platform Overview</h1>
          <div className="w-full h-[2px] bg-yellow-500 mb-6"></div>
          <p className="text-lg text-gray-200 mb-6">
            The BTCRT platform merges DeFi and social networking to foster a collaborative ecosystem. This overview details the platform’s main features, its role in the DeFi space, and how it empowers users to engage innovatively.
          </p>
          <h3 className="text-3xl font-semibold mb-4 text-white">Core Features:</h3>
          <ul className="list-disc ml-8 text-gray-200 text-lg space-y-2">
            <li><strong>Social Engagement:</strong> A thriving community for discussions and networking.</li>
            <li><strong>Portfolio Management:</strong> Tools for tracking and managing DeFi investments.</li>
            <li><strong>Interactive Profiles:</strong> Highlight your expertise and build trust within the DeFi community.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'How to Navigate the BTCRT dApp',
    href: 'navigate-dapp',
    content: (
      <>
        <div className="lg:ml-[26%] mt-[10vh] items-center justify-center flex flex-col p-6 glassmorphism rounded-xl shadow-2xl backdrop-blur-lg transition-transform hover:shadow-glow">
          <h2 className="text-4xl font-bold mb-6 text-red-500">DETAILED DOCUMENTATION COMING SOON</h2>
          <Image
            src="/images/navigate-dapp.png"
            alt="Navigate the dApp"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          />
          <h1 className="text-5xl font-extrabold mb-4 text-white">How to Navigate the BTCRT dApp</h1>
          <div className="w-full h-[2px] bg-yellow-500 mb-6"></div>
          <p className="text-lg text-gray-200 mb-6">
            This section will soon feature an in-depth guide to navigating the BTCRT dApp, helping users utilize its full potential for a seamless experience.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Security and Best Practices in BTCRT',
    href: 'security-best-practices',
    content: (
      <>
        <div className="lg:ml-[26%] mt-[10vh] items-center justify-center flex flex-col p-6 glassmorphism rounded-xl shadow-2xl backdrop-blur-lg transition-transform hover:shadow-glow">
          <Image
            src="/images/security-best-practices.png"
            alt="Security Best Practices"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          />
          <h1 className="text-5xl font-extrabold mb-4 text-white">Security and Best Practices in BTCRT</h1>
          <div className="w-full h-[2px] bg-yellow-500 mb-6"></div>
          <p className="text-lg text-gray-200 mb-6">
            Security is paramount in the DeFi space. This section outlines the best practices for protecting your activities on BTCRT, ensuring a safe experience while participating in the DeFi ecosystem.
          </p>
          <h3 className="text-3xl font-semibold mb-4 text-white">Best Practices:</h3>
          <ul className="list-disc ml-8 text-gray-200 text-lg space-y-2">
            <li><strong>Secure Authentication:</strong> Use secure login methods and enable 2FA where available.</li>
            <li><strong>Privacy Controls:</strong> Keep your financial data protected.</li>
            <li><strong>Phishing Awareness:</strong> Stay alert against scams and fraudulent activity.</li>
          </ul>
        </div>
      </>
    ),
  }
  // Add more documentation entries as needed...
];

export default function DocumentationPage() {
  const params = useParams();
  const slug = params?.slug;

  const docContent = docs.find((doc) => doc.href === slug);

  if (!docContent) {
    return notFound(); // Exit if no content is found
  }

  return (
    <div className="p-4">
      {docContent.content}
    </div>
  );
}
