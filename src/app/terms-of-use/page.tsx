import React from 'react';
import Footer from '../../components/Footer';

export default function TermsOfUse() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#191919] via-black to-transparent opacity-60 blur-2xl -z-10"></div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 mb-4">Terms of Use</h1>
          <p className="text-xl sm:text-2xl text-gray-300">Last Updated: February 19, 2025</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-[#111111] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-10">
          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to MemeLinked. By accessing or using our platform, you agree to be bound by these Terms of Use.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Acceptance of Terms</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              By accessing or using MemeLinked, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Platform Usage and Content Guidelines</h2>
            <div className="space-y-6 text-gray-300">
              <p>As a DeFi social media platform user, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the platform in compliance with all applicable laws and regulations</li>
                <li>Maintain the security of your wallet and credentials</li>
                <li>Post accurate and truthful information about DeFi projects and investments</li>
                <li>Not engage in market manipulation or pump-and-dump schemes</li>
                <li>Not spread false information about cryptocurrencies or DeFi protocols</li>
                <li>Not engage in harassment or abusive behavior towards other users</li>
                <li>Not promote unauthorized or fraudulent token sales</li>
                <li>Respect intellectual property rights and content ownership</li>
                <li>Not use automated bots or scripts without authorization</li>
                <li>Not attempt to manipulate platform metrics or engagement</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">DeFi Features and Responsibilities</h2>
            <div className="space-y-6 text-gray-300">
              <p>When using DeFi features, you acknowledge:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All blockchain transactions are irreversible</li>
                <li>You are responsible for verifying smart contract interactions</li>
                <li>Gas fees and transaction costs are your responsibility</li>
                <li>Market volatility can affect token values significantly</li>
                <li>We are not responsible for losses due to market conditions</li>
                <li>You should conduct your own research before investing</li>
                <li>Platform metrics and analytics are for reference only</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">User Responsibilities and Account Security</h2>
            <div className="space-y-6 text-gray-300">
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All activities conducted through your account and wallet</li>
                <li>Maintaining the security of your private keys</li>
                <li>Verifying the authenticity of DeFi protocols you interact with</li>
                <li>Understanding the risks of cryptocurrency transactions</li>
                <li>Reporting unauthorized access or security breaches immediately</li>
                <li>Keeping your recovery phrases secure and private</li>
                <li>Maintaining accurate and up-to-date profile information</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Content and Social Interactions</h2>
            <div className="space-y-6 text-gray-300">
              <p>Regarding platform content and social features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of content you create and share</li>
                <li>We have the right to remove harmful or violating content</li>
                <li>Content may be stored on decentralized networks</li>
                <li>Public posts are visible to all users and indexed</li>
                <li>Engagement metrics are publicly visible</li>
                <li>You grant us license to display and distribute your content</li>
                <li>Deleted content may remain visible on the blockchain</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Intellectual Property</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              All content, features, and functionality of MemeLinked are owned by us or our licensors and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Risk Disclosure and Financial Responsibility</h2>
            <div className="space-y-6 text-gray-300">
              <p>Users acknowledge and understand that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cryptocurrency and DeFi investments carry inherent risks</li>
                <li>Smart contract interactions may have unforeseen consequences</li>
                <li>Market manipulation and scams exist in the crypto space</li>
                <li>Past performance does not guarantee future results</li>
                <li>Users are solely responsible for their investment decisions</li>
                <li>Market volatility can result in significant losses</li>
                <li>DeFi protocols may have vulnerabilities or bugs</li>
                <li>Regulatory changes may affect platform functionality</li>
                <li>We do not provide financial advice or guarantees</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Limitation of Liability</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              MemeLinked and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the platform.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Modifications</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="border-b border-gray-800 pb-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Termination</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We reserve the right to terminate or suspend access to our platform immediately, without prior notice, for any violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-green-400">Contact Information</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              For questions about these terms, please contact us at support@memelinked.com
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
