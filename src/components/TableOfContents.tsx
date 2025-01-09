// src/components/TableOfContents.tsx
"use client";
import React from 'react';
import Link from 'next/link';

interface TableOfContentsProps {
  posts: { title: string; href: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ posts }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={post.href} className="hover:text-green-300 transition">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
