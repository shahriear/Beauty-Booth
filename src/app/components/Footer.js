'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';
import {
  MapPin,
  MessageCircleMore,
} from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import FooterHomeDescription from '../components/seo-Content/FooterHomeDescription';

export default function Footer() {
 
  return (
    <footer className="w-full bg-[#f3f3f340]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO CONTENT */}
        <FooterHomeDescription />

        {/* FOOTER MAIN */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-gray-300">
          {/* LOGO + HELP */}
          <div>
            <Link href="/">
              <Image
                src="/images/footer-img/cab.webp"
                alt="footer image"
                width={200}
                height={200}
                style={{
                  width: '100px',
                  height: 'auto',
                }}
              />
            </Link>

            <h4 className="mt-6 text-[28px] font-semibold text-black">
              Need Help?
            </h4>

            <div className="mt-4 space-y-2 text-[16px] text-black">
              <p>+8801600000000</p>
              <p>+8809600000000</p>
            </div>
          </div>

          {/* MENU 1 */}
          <div className="space-y-4 text-[16px] text-black">
            <Link href="/" className="block hover:text-[#ff2d75] duration-300">
              Home
            </Link>

            <Link
              href="/faq"
              className="block hover:text-[#ff2d75] duration-300"
            >
              FAQ
            </Link>

            <Link
              href="/career"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Career
            </Link>

            <Link
              href="/contact"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Contact Us
            </Link>

            <Link
              href="/blog"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Blog
            </Link>
          </div>

          {/* MENU 2 */}
          <div className="space-y-4 text-[16px] text-black">
            <Link
              href="/about"
              className="block hover:text-[#ff2d75] duration-300"
            >
              About Us
            </Link>

            <Link
              href="/privacy-policy"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Privacy Policies
            </Link>

            <Link
              href="/terms"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="block hover:text-[#ff2d75] duration-300"
            >
              Return & Refund Policy
            </Link>
          </div>

          {/* APPS + SOCIAL */}
          <div>
            <h4 className="text-[20px] font-semibold text-black">
              Download our App
            </h4>

            <div className="mt-5 flex items-center gap-3">
              <Image
                src="/images/footer-img/Apple-Store.webp"
                alt="App Store"
                width={120}
                height={42}
              />

              <Image
                src="/images/footer-img/Google-Play.webp"
                alt="Google Play"
                width={120}
                height={42}
              />
            </div>

            <div className="mt-6 flex items-center gap-5">
              <Link href="/">
                <MessageCircleMore
                  size={25}
                  className="text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>

              <Link href="/">
                <CiFacebook
                  size={28}
                  className="text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>

              <Link href="/">
                <FaInstagram
                  size={25}
                  className="text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>

              <Link href="/">
                <AiOutlineYoutube
                  size={28}
                  className="text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>

              <Link href="/">
                <span className="text-[24px] font-semibold hover:text-[#ff2d75] duration-300">
                  X
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 py-6">
          <div className="flex items-start gap-2 text-[14px] text-[#666]">
            <MapPin size={18} className="text-[#ff2d75]" />

            <p>
              <span className="font-semibold text-black">Address:</span> Ujwal
              Tower, House no. 362, 3rd Floor East Rampura, DIT Rd, Dhaka 1219
            </p>
          </div>

          <p className="text-[14px] text-[#666]">
            © 2026 Beauty Booth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
