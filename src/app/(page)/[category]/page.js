import ProductListingPage from '@/app/components/products/ProductListingPage';
import { getCategoryBySlug } from '@/services/categoryService';

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryData = await getCategoryBySlug(category);
  const categoryName = categoryData?.name || 'Products';

  return {
    title: `${categoryName} - Beauty Booth`,
    description: `Shop our premium ${categoryName.toLowerCase()} collection at the best prices in Bangladesh. Discover top brands and quality products.`,
    keywords: `${categoryName}, beauty products, Bangladesh, best price`,
  };
}

export default async function Page({ params }) {
  const { category } = await params;
  return <ProductListingPage categorySlug={category} />;
}
