'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getOutletGallery } from '@/services/bannerService';

export default function VisitOutlet() {
  const { data: galleryImages, loading } = useApi(() => getOutletGallery(), []);

  if (loading) return <SectionLoader />;

  const images = galleryImages || [];

  return (
    <section className="w-screen bg-[#ececec77] relative left-1/2 right-1/2 -mx-[50vw] py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-bold text-black">Visit Outlet</h2>
            <div className="relative overflow-hidden rounded-2xl mt-8 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7234567890!2d90.4182758!3d23.7633923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96b1c8b9a89%3A0xc8056dbcc83d3e40!2s362%2C%202nd%20Floor%2C%20Beauty%20Booth%20Bangladesh%2C%20Ujjwal%20Tower%2C%20House%20no%3A%2088%2C%20DIT%20Road%2C%20Dacca!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty Booth Bangladesh"
                className="w-full border-0"
              />
              <Link
                href="https://maps.app.goo.gl/iJKttkUndmcG2HGZ9"
                target="_blank"
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-md px-4 py-3 flex items-center gap-2 text-sm font-medium"
              >
                <MapPin size={16} />
                Open in Maps
              </Link>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-black mb-5">
                Get our shop location on your phone
              </h4>
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="h-14 rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-black w-full sm:max-w-md text-[16px]"
                />
                <Link
                  href="https://maps.app.goo.gl/iJKttkUndmcG2HGZ9"
                  target="_blank"
                  className="h-12 px-6 rounded-xl border border-black flex items-center justify-center gap-2 font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Get Link
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {[0, 1, 2, 5].map(idx =>
                  images[idx] ? (
                    <div key={idx} className="relative h-[170px] overflow-hidden rounded-2xl">
                      <Image
                        src={images[idx].image}
                        alt={images[idx].alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : null,
                )}
              </div>
              <div className="flex flex-col gap-4">
                {[3, 4].map(idx =>
                  images[idx] ? (
                    <div key={idx} className="relative h-full overflow-hidden rounded-2xl">
                      <Image
                        src={images[idx].image}
                        alt={images[idx].alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
