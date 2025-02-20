import React from 'react';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#191919] via-black to-transparent opacity-60 blur-2xl -z-10"></div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 mb-4">Privacy Policy</h1>
          <p className="text-xl sm:text-2xl text-gray-300">Last Updated: February 19, 2025</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-10">
          <section className="border-b border-gray-800 pb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to MemeLinked. We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Information We Collect</h2>
            <div className="space-y-6 text-gray-300">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wallet addresses and blockchain interaction data</li>
                <li>Social media profile information (username, bio, profile picture)</li>
                <li>Content you post or share on the platform</li>
                <li>Transaction data and smart contract interactions</li>
                <li>DeFi protocol preferences and settings</li>
                <li>Network connections and following/follower relationships</li>
                <li>Communication data and message content</li>
                <li>Device information and usage analytics</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">How We Use Your Information</h2>
            <div className="space-y-6 text-gray-300">
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facilitating social interactions and content sharing</li>
                <li>Processing DeFi transactions and smart contract interactions</li>
                <li>Personalizing your feed and content recommendations</li>
                <li>Managing your social network connections</li>
                <li>Analyzing platform usage to improve features</li>
                <li>Sending notifications about interactions and DeFi opportunities</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Maintaining compliance with regulatory requirements</li>
                <li>Providing analytics and insights about your DeFi activities</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Data Security</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your information. However, no electronic transmission or storage system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">DeFi Integration and Third-Party Services</h2>
            <div className="space-y-6 text-gray-300">
              <p>Our platform integrates with various DeFi protocols and blockchain networks. Please note:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Blockchain transactions are public and visible to anyone</li>
                <li>Third-party DeFi protocols have their own terms and privacy policies</li>
                <li>We cannot control or be responsible for data visible on public blockchains</li>
                <li>Integration with external wallets and DeFi protocols is subject to their respective privacy practices</li>
              </ul>
              <p>We recommend reviewing the privacy policies of any connected DeFi protocols or services you interact with through our platform.</p>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Content Privacy</h2>
            <div className="space-y-6 text-gray-300">
              <p>Regarding content shared on our social media platform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Public posts are visible to all platform users</li>
                <li>Private messages are encrypted end-to-end</li>
                <li>You control the visibility of your profile information</li>
                <li>Content may be stored on decentralized storage systems</li>
                <li>Deleted content may remain visible on the blockchain</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Cookies and Tracking</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Your Rights</h2>
            <div className="space-y-6 text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Changes to Privacy Policy</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We may update this privacy policy periodically. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Contact Us</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you have questions about this privacy policy or our practices, please contact us at support@memelinked.com
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
