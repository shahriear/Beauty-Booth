'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';
import { MapPin, MessageCircleMore } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import FooterHomeDescription from '../../components/seo-Content/FooterHomeDescription';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getFooterContact } from '@/services/offerService';

export default function Footer() {
  const { data: contact, loading } = useApi(() => getFooterContact(), []);

  return (
    <footer className="w-full bg-[#f3f3f340]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <FooterHomeDescription />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 py-8 md:py-12 border-b border-gray-300">
          <div>
            <Link href="/">
              <Image
                src="/images/footer-img/cab.webp"
                alt="footer image"
                width={200}
                height={200}
                style={{ width: '80px', height: 'auto' }}
              />
            </Link>

            <h4 className="mt-4 md:mt-6 text-base md:text-[28px] font-semibold text-black">
              Need Help?
            </h4>

            {loading ? (
              <SectionLoader className="py-4" />
            ) : (
              <div className="mt-3 md:mt-4 space-y-1 md:space-y-2 text-sm md:text-[16px] text-black">
                {(contact?.phones || []).map(phone => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 md:space-y-4 text-sm md:text-[16px] text-black">
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

          <div className="space-y-2 md:space-y-4 text-sm md:text-[16px] text-black">
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

          <div>
            <h4 className="text-base md:text-[20px] font-semibold text-black mb-3 md:mb-5">
              Download our App
            </h4>
            <div className="mt-3 md:mt-5 flex flex-col sm:flex-row gap-2 md:gap-3">
              <Image
                src="/images/footer-img/Apple-Store.webp"
                alt="App Store"
                width={120}
                height={42}
                className="w-24 md:w-[120px]"
              />
              <Image
                src="/images/footer-img/Google-Play.webp"
                alt="Google Play"
                width={120}
                height={42}
                className="w-24 md:w-[120px]"
              />
            </div>
            <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-5">
              <Link href="/">
                <MessageCircleMore
                  size={20}
                  className="md:w-[25px] md:h-[25px] text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>
              <Link href="/">
                <CiFacebook
                  size={22}
                  className="md:w-[28px] md:h-[28px] text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>
              <Link href="/">
                <FaInstagram
                  size={20}
                  className="md:w-[25px] md:h-[25px] text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>
              <Link href="/">
                <AiOutlineYoutube
                  size={22}
                  className="md:w-[28px] md:h-[28px] text-black hover:text-[#ff2d75] duration-300"
                />
              </Link>
              <Link href="/">
                <span className="text-base md:text-[24px] font-semibold hover:text-[#ff2d75] duration-300">
                  X
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 md:gap-5 py-4 md:py-6">
          <div className="flex items-start gap-2 text-xs md:text-[14px] text-[#666]">
            <MapPin size={16} className="text-[#ff2d75] flex-shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-black">Address:</span> Ujwal
              Tower, House no. 362, 3rd Floor East Rampura, DIT Rd, Dhaka 1219
            </p>
          </div>
          <p className="text-xs md:text-[14px] text-[#666]">
            © 2026 Beauty Booth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
