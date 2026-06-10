'use client';

import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getSeoContent } from '@/services/categoryService';

export default function SeoContent({ category }) {
  const { data: content, loading } = useApi(() => getSeoContent(category), [category]);

  if (loading) return <SectionLoader className="py-8" />;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {content?.title}
      </h2>
      <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
        <div dangerouslySetInnerHTML={{ __html: content?.content || '' }} />
      </div>
    </div>
  );
}
