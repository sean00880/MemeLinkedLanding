export default function DocumentationPage() {
  const docs = [
    { title: 'MemeLinked Platform Overview', href: '/docs/platform-overview' },
    { title: 'How to Navigate the MemeLinked dApp', href: '/docs/navigate-dapp' },
    { title: 'Security and Best Practices in MemeLinked', href: '/docs/security-best-practices' },
  ];

  return (
    <section className="flex flex-col md:pl-10 lg:ml-[25%]">
      <h1 className="text-3xl font-bold mb-4">Welcome to the MemeLinked Documentation</h1>
      <p className="mb-6">Access comprehensive guides and insights about how to use MemeLinked effectively...</p>

      {/* Documentation Content */}
      <div className="docs-section mt-8 space-y-6">
        {docs.map((doc, index) => (
          <div key={index} className="doc-entry p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
            <p className="text-gray-300">
              Learn more about {doc.title} to get detailed insights, instructions, and best practices for utilizing the
              MemeLinked platform and enhancing your DeFi experience.
            </p>
            <a
              href={doc.href}
              className="text-yellow-400 hover:text-yellow-300 mt-4 inline-block transition"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
