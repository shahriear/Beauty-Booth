import ProductDetailPage from '@/app/components/products/ProductDetailPage';
import { getProductBySlugService } from '@/services/productService';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlugService(slug);

  if (!product) {
    return { title: 'Product Not Found - Beauty Booth' };
  }

  return {
    title: `${product.name} - Beauty Booth`,
    description: product.description,
    keywords: `${product.name}, ${product.brand}, beauty products, Bangladesh`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
