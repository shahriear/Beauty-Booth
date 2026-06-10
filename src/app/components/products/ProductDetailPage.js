'use client';

import Link from 'next/link';
import {
  ShoppingBag,
  Star,
  Smartphone,
  ShieldCheck,
  RotateCcw,
  Truck,
  Leaf,
} from 'lucide-react';
import { useState } from 'react';
import Breadcrumb from '@/app/components/products/Breadcrumb';
import ProductGallery from '@/app/components/products/ProductGallery';
import SaleCountdown from '@/app/components/products/SaleCountdown';
import ProductInfoTable from '@/app/components/products/ProductInfoTable';
import ProductReviews from '@/app/components/products/ProductReviews';
import ProductCarousel from '@/app/components/products/ProductCarousel';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import {
  getProductBySlugService,
  getRelatedProductsService,
  getBrandProductsService,
} from '@/services/productService';
import { getCategoryData } from '@/data/products';
import useCartStore from '@/app/components/store/useCartStore';

function getDeliveryDates() {
  const start = new Date();
  start.setDate(start.getDate() + 3);
  const end = new Date();
  end.setDate(end.getDate() + 6);
  const fmt = d =>
    `${d.getDate()}${['th', 'st', 'nd', 'rd'][(d.getDate() % 10 > 3 || Math.floor(d.getDate() / 10) === 1) ? 0 : d.getDate() % 10]} ${d.toLocaleString('en', { month: 'short' })}`;
  return `${fmt(start)} ~ ${fmt(end)}`;
}

function ReadMoreDescription({ text }) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.slice(0, 200);

  return (
    <div className="text-gray-600 text-sm leading-relaxed">
      <p>{expanded ? text : `${preview}${text.length > 200 ? '...' : ''}`}</p>
      {text.length > 200 && (
        <button
          type="button"
          onClick={() => setExpanded(e => !e)}
          className="text-primary-pink text-sm font-medium mt-2 hover:underline"
        >
          {expanded ? 'read less' : 'read more >'}
        </button>
      )}
    </div>
  );
}

const TRUST_BADGES = [
  { icon: ShieldCheck, label: '100% Authentic Product' },
  { icon: RotateCcw, label: 'Easy Returns Policy' },
  { icon: Truck, label: 'New User: 899+ Free Delivery' },
  { icon: Leaf, label: 'Cruelty-Free' },
];

export default function ProductDetailPage({ slug }) {
  const addToCart = useCartStore(state => state.addToCart);

  const { data: product, loading } = useApi(
    () => getProductBySlugService(slug),
    [slug],
  );

  const { data: relatedProducts, loading: relatedLoading } = useApi(
    () => (product ? getRelatedProductsService(product.id) : Promise.resolve([])),
    [product?.id],
  );

  const { data: brandProducts, loading: brandLoading } = useApi(
    () =>
      product
        ? getBrandProductsService(product.brand, product.id)
        : Promise.resolve([]),
    [product?.id, product?.brand],
  );

  if (loading) return <SectionLoader className="min-h-screen" />;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-600 mb-4">Product not found</p>
        <Link href="/" className="text-primary-pink font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const categoryData = getCategoryData(product.category);
  const categoryName = categoryData?.name || product.category;

  // const handleAddToCart = () => {
  //   console.log(product);
  //   addToCart({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //     quantity: 1,
  //   });
  // };
  const handleAddToCart = () => {
    //  console.log(product);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      discountedPrice: product.price,
      category: product.category,
      image: product.image,
      quantity: 1,
    });
  };

  const filledStars = Math.round(product.rating);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: categoryName, href: `/${product.category}` },
            { label: product.subcategory, href: `/${product.category}?subcategory=${encodeURIComponent(product.subcategory)}` },
            { label: product.name },
          ]}
        />

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <ProductGallery
            images={product.images}
            name={product.name}
            discount={product.discount}
            isOnSale={product.isSale}
          />

          <div className="flex flex-col">
            {product.saleEndsAt && <SaleCountdown endsAt={product.saleEndsAt} />}

            <p className="text-sm text-gray-500 mb-2">
              {product.subcategory}{' '}
              <span className="mx-1">•</span>
              <Link
                href={`/brands?brand=${encodeURIComponent(product.brand)}`}
                className="underline uppercase font-medium text-gray-700 hover:text-primary-pink"
              >
                {product.brand}
              </Link>
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < filledStars
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <button type="button" className="text-sm text-gray-600 hover:text-primary-pink underline">
                ({product.reviews} reviews)
              </button>
              {product.inStock && (
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  In Stock
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary-pink">৳ {product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-400 line-through">৳ {product.originalPrice}</span>
              )}
              {product.discount > 0 && (
                <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-base transition ${
                  product.inStock
                    ? 'bg-primary-pink text-white hover:bg-opacity-90'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ShoppingBag size={20} />
                Add to Bag
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-base border-2 border-orange-400 text-orange-500 hover:bg-orange-50 transition"
              >
                <Smartphone size={18} />
                App Price: ৳ {product.appPrice} →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-gray-600">
                  <Icon size={18} className="text-primary-pink shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 rounded-lg p-4 text-sm space-y-2 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">Delivery:</span>{' '}
                Estimated {getDeliveryDates()}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Fast selling:</span>{' '}
                People are loving it! Sold {product.soldLast24h} pcs in last 24 hrs.
              </p>
              <p>
                <span className="font-semibold text-gray-800">SKU code:</span> {product.sku}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <ProductCarousel
          title="Related Products"
          products={relatedProducts}
          loading={relatedLoading}
        />

        {/* Product info & description */}
        <section className="py-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Buy {product.name} Daily Use
          </h2>
          <ProductInfoTable product={product} />
          <div className="mt-6">
            <ReadMoreDescription text={product.longDescription} />
          </div>
        </section>

        {/* More from brand */}
        <ProductCarousel
          title="More From This Brand"
          products={brandProducts}
          loading={brandLoading}
          seeAllHref={`/brands?brand=${encodeURIComponent(product.brand)}`}
        />

        {/* Reviews */}
        <ProductReviews
          reviews={product.reviewItems}
          rating={product.rating}
          totalReviews={product.reviews}
        />
      </div>
    </div>
  );
}
