'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 py-4 text-sm text-gray-600 mb-6">
      <Link
        href="/"
        className="hover:text-primary-pink flex items-center gap-1 transition"
      >
        <Home size={16} />
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-pink transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
