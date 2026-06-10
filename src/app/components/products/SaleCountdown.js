'use client';

import { useEffect, useState } from 'react';

function formatTime(ms) {
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, seconds: secs };
}

export default function SaleCountdown({ endsAt }) {
  const [remaining, setRemaining] = useState(() => formatTime(endsAt - Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(formatTime(endsAt - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, [endsAt]);

  const pad = n => String(n).padStart(2, '0');

  return (
    <div className="bg-pink-50 text-primary-pink text-sm font-medium px-4 py-2 rounded mb-4">
      Sale Ends in{' '}
      <span className="font-bold">
        {pad(remaining.days)}d: {pad(remaining.hours)}h: {pad(remaining.minutes)}m:{' '}
        {pad(remaining.seconds)}s
      </span>
    </div>
  );
}
