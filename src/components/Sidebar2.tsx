"use client";
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  posts: { title: string; href: string }[];
}

// Sidebar component that receives posts as props
const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  return (
    <aside className="w-1/4 bg-black pt-[30vh] fixed h-full text-white p-2 hidden lg:block">
      <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
      <ul className="space-y-2">
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={post.href} className="hover:text-green-300 transition">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
