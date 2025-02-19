// src/app/blog/[slug]/page.tsx
'use client'; // Add this line to indicate that this is a client-side component
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
const posts = [
  {
    title: 'How MemeLinked Integrates DeFi and Social Networking',
    href: 'defi-social-networking',
    content: (
      <>
        <div className="lg:ml-[26%] items-center justify-center flex flex-col p-6 glassmorphism rounded-xl shadow-2xl backdrop-blur-lg transition-transform hover:shadow-glow">
        <Image
    src="/images/ML7.png"
    alt="DeFi and Social Networking"
    width={1000}
    height={400}
    className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
    style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
  />
  <h1 className="text-5xl font-extrabold mb-4 text-white">How MemeLinked Integrates DeFi and Social Networking</h1>
  <div className="w-full h-[2px] bg-yellow-500 mb-6"></div>
  <p className="text-lg mb-6 text-gray-200">
    MemeLinked is pioneering a new frontier by merging decentralized finance (DeFi) with the power of social
    networking. The platform is designed to create a dynamic ecosystem where DeFi enthusiasts and experts can
    connect, engage, and leverage financial tools in a collaborative and innovative environment.
  </p>
  <Image
    src="/images/MLPreview.png"
    alt="DeFi and Social Networking"
    width={1000}
    height={400}
    className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
    style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
  />
  <div className="flex gap-6 flex-col md:flex-row items-center">
    <div className="relative overflow-hidden flex-shrink-0">
      <Image
        src="/images/ML9.webp"
        alt="DeFi and Social Networking"
        width={500}
        height={400}
        className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
      />
    </div>
    <div className="flex-1">
      <h3 className="text-3xl font-semibold mb-4 text-white">Key Features:</h3>
      <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
      <ol className="list-none space-y-4 text-gray-200 text-lg">
        <li>
          <strong>Social Feed:</strong> A centralized hub where users can share updates, news, and engage with DeFi
          content tailored to their interests.
        </li>
        <li>
          <strong>Influencer and Profile Trending:</strong> Gain visibility and credibility through trending metrics that highlight influential users and profiles.
        </li>
        <li>
          <strong>Advertising Tools:</strong> Targeted advertising options designed specifically for DeFi projects, allowing projects to reach their ideal audience.
        </li>
        <li>
          <strong>Community Discussions:</strong> Real-time discussion boards and chat options to foster meaningful conversations and information sharing.
        </li>
        <li>
          <strong>Portfolio Showcases:</strong> Display investment portfolios and share insights, building a network of trust and expertise.
        </li>
      </ol>
    </div>
  </div>

  <p className="text-lg mt-6 text-gray-200">
    By integrating social features and financial tools, MemeLinked enables users to experience DeFi in an
    interactive and engaging way. This synergy of social networking and DeFi tools empowers users to stay informed,
    collaborate with others, and benefit from the full potential of decentralized finance.
  </p>

  <div className="relative overflow-hidden mt-8 mb-8 flex flex-row items-center">
    <div>
      <h3 className="text-3xl font-semibold mt-8 mb-4 text-white">Why MemeLinked Stands Out in the DeFi Space</h3>
      <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
      <p className="text-lg text-gray-200 mb-6">
        MemeLinked's focus on creating a comprehensive social-financial ecosystem sets it apart from other DeFi platforms.
        By blending social interaction with financial empowerment, MemeLinked fosters a unique environment that:
      </p>
      <ol className="list-disc ml-8 text-gray-200 text-lg space-y-2">
        <li><strong>Promotes Collaborative Learning:</strong> Users learn from each other through shared experiences and insights.</li>
        <li><strong>Facilitates Expert Networking:</strong> Connect with industry leaders and influencers who actively contribute to discussions and project promotions.</li>
        <li><strong>Supports Grassroots Growth:</strong> Encourages grassroots participation through meme contests, community events, and social challenges.</li>
      </ol>
    </div>
  </div>

  <div className="chart-container items-center self-center flex">
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
  <h3 className="text-3xl font-semibold mt-8 mb-4 text-white">The Future of</h3>
  <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
  <Image src="/images/LOGODARK.png" width={500} height={500} alt="MemeLinkedLogo" />

  <p className="text-lg text-gray-200">
    MemeLinked's roadmap includes enhanced social features, deeper DeFi tool integration, and strategic partnerships
    aimed at expanding the platform's user base and capabilities. Upcoming features include:
  </p>
  <ol className="list-disc ml-8 text-gray-200 text-lg space-y-2">
    <li><strong>Advanced Analytics:</strong> Insights and data visualization tools for monitoring DeFi trends and user activity.</li>
    <li><strong>Customizable Portfolios:</strong> Options for users to create personalized investment portfolios and share them with followers.</li>
    <li><strong>Cross-Platform Integrations:</strong> Seamless integration with other blockchain and DeFi platforms to provide a more comprehensive user experience.</li>
  </ol>

  <p className="text-lg mt-6 text-gray-200">
    As the DeFi landscape evolves, MemeLinked remains committed to adapting and enhancing its offerings to meet the
    needs of its community. The platform's dedication to merging social interaction with financial growth positions it
    as a leader in the DeFi space, promising a future where finance is not just transactional but communal and engaging.
  </p>
</div>

      </>
    ),
  },
  {
    title: 'GameFi\'s Role in the MemeLinked Ecosystem',
    href: 'gamefi-role',
    content: (
      <>
        <div className="lg:ml-[26%] items-center justify-center flex flex-col p-6 glassmorphism rounded-xl shadow-2xl backdrop-blur-lg transition-transform hover:shadow-glow">
          <Image
            src="/images/ML6.png"
            alt="GameFi Integration"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          />
          <h1 className="text-5xl font-extrabold mb-4 text-white">GameFi's Role in the MemeLinked Ecosystem</h1>
          <div className="w-full h-[2px] bg-yellow-500 mb-6"></div>
          <p className="text-lg mb-6 text-gray-200">
            The intersection of gaming and decentralized finance (DeFi) has given rise to GameFi, a transformative force in the crypto ecosystem. MemeLinked leverages GameFi to provide immersive, rewarding experiences for users and to foster deeper engagement within its network. This strategic approach is part of the broader MemeLinked ecosystem, where innovation meets entertainment and financial gain.
          </p>
          <Image
            src="/images/ML11.webp"
            alt="GameFi Ecosystem"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 my-10 transition-transform duration-500"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
          />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative overflow-hidden flex-shrink-0">
              <Image
                src="/images/gamefi.gif"
                alt="MemeLinked GameFi Features"
                width={500}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4 text-white">Key GameFi Features in MemeLinked</h3>
              <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
              <ol className="list-none space-y-4 text-gray-200 text-lg">
                <li>
                  <strong>Interactive Mini-Games:</strong> These games provide users with opportunities to earn $MEMELINKED tokens while enjoying an engaging gameplay experience. The mini-games are designed to be both fun and rewarding, promoting sustained interaction.
                </li>
                <li>
                  <strong>Community-Centric Marketing Missions:</strong> GameFi within MemeLinked incorporates specific marketing missions. Users can participate in these missions to promote the ecosystem, share content, and earn rewards in return.
                </li>
                <li>
                  <strong>Strategic Collaborations:</strong> By collaborating with partner projects, MemeLinked expands its GameFi offerings, creating a multifaceted experience where users can earn various partner tokens in addition to $MEMELINKED.
                </li>
              </ol>
            </div>
          </div>

          <p className="text-lg mt-6 text-gray-200">
            The inclusion of GameFi in MemeLinked provides a dual benefit: fostering an enjoyable user experience while driving the growth of the MemeLinked ecosystem through active participation. This integration helps position MemeLinked as a frontrunner in combining social interaction with financial empowerment.
          </p>

          <div className="relative overflow-hidden mt-8 mb-8 flex flex-row items-center">
            <div>
              <h3 className="text-3xl font-semibold mt-8 mb-4 text-white">GameFi's Broader Impact on MemeLinked</h3>
              <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
              <p className="text-lg text-gray-200 mb-6">
                The introduction of GameFi within MemeLinked represents a strategic shift that leverages gaming to boost community engagement and ecosystem growth. Unlike traditional DeFi platforms, MemeLinked enriches the user experience by:
              </p>
              <ol className="list-disc ml-8 text-gray-200 text-lg space-y-2">
                <li><strong>Enhancing User Retention:</strong> By integrating game elements, MemeLinked keeps users engaged, encouraging long-term participation and interaction within the platform.</li>
                <li><strong>Expanding the Ecosystem:</strong> GameFi partnerships introduce new layers of functionality, promoting collaboration between projects and expanding the overall ecosystem reach.</li>
                <li><strong>Aligning Financial Incentives with Entertainment:</strong> Users benefit not only from earning potential but also from an enjoyable and interactive experience.</li>
              </ol>
            </div>
          </div>

          <h3 className="text-3xl font-semibold mt-8 mb-4 text-white">The Future of MemeLinked's Gamefi Ecosystem</h3>
          <div className="w-1/2 h-[2px] bg-yellow-500 mb-4"></div>
          <Image src="/images/ML8.png" width={500} height={500}alt="Future of MemeLinked" />

          <p className="text-lg text-gray-200">
            The future of GameFi in MemeLinked is bright, with plans to integrate more complex gaming mechanics, strategic partnerships, and cross-platform functionalities. These enhancements aim to create an environment where users can seamlessly navigate between gaming, earning, and engaging with other community members. As the ecosystem evolves, MemeLinked's commitment to innovation ensures that it remains at the forefront of the GameFi movement within the DeFi space.
          </p>
        </div>
      </>
    ),
  }
  // Add other posts here with similar structure and extended content...
];

export default function BlogPost() {
  // Use `useParams` hook to get the slug from the URL
  const params = useParams();
  const slug = params?.slug;

 

  const postContent = posts.find((post) => post.href === slug);

  if (!postContent) {
    return notFound(); // Ensure the function exits when no content is found
  }

  return (
    <div className="p-4">
      {postContent.content}
    </div>
  );
}
