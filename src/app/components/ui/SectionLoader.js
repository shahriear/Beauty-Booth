'use client';

import { Loader } from 'lucide-react';

export default function SectionLoader({ className = 'py-16', text = 'Loading...' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader size={28} className="animate-spin text-primary-pink" />
      <span className="text-sm text-gray-500">{text}</span>
    </div>
  );
}
