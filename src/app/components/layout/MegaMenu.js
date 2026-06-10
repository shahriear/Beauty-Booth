'use client';

import Image from 'next/image';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getMegaMenuForCategory } from '@/services/categoryService';

export default function MegaMenu({ category, isOpen }) {
  const { data, loading } = useApi(
    () => getMegaMenuForCategory(category),
    [category],
  );

  if (!isOpen) return null;
  if (loading) return <SectionLoader className="py-8 bg-white" />;
  if (!data) return null;

  return (
    <div
      className={`w-full bg-white shadow-2xl border-t-2 border-purple-100 transition-all duration-300 ease-in-out origin-top
        ${isOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
      `}
    >
      <div className="mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 text-sm mb-4 flex items-center gap-">
                {column.image ? (
                  <Image
                    src={column.image}
                    alt={column.title}
                    width={32}
                    height={32}
                    className="rounded-md object-cover"
                  />
                ) : null}
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-red-600 hover:font-medium transition-all"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
