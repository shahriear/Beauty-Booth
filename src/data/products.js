/**
 * Main data source for the fake API layer.
 * Only service modules should import from this file.
 */
import { slugify } from '@/lib/productUtils';
import * as homepage from './homepage';

export const categories = [
  {
    id: 'skin-care',
    name: 'Skin Care',
    slug: 'skin-care',
    description:
      'Discover our comprehensive collection of skincare products designed to nourish and rejuvenate your skin.',
    banner: true,
    subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Face Masks', 'Sunscreen', 'Anti-Aging'],
  },
  {
    id: 'makeup',
    name: 'Make Up',
    slug: 'makeup',
    description: 'Explore our premium makeup collection including foundations, lipsticks, eyeshadows, and more.',
    banner: true,
    subcategories: ['Face', 'Eye Makeup', 'Lip Makeup', 'Cheeks', 'Makeup Tools', 'Nails'],
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    slug: 'hair-care',
    description: 'Complete hair care solutions for every hair type and concern.',
    banner: true,
    subcategories: ['Shampoo', 'Conditioner', 'Hair Masks', 'Hair Oil', 'Hair Treatment', 'Styling'],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Essential beauty accessories to complement your beauty routine.',
    banner: false,
    subcategories: ['Brushes', 'Mirrors', 'Storage', 'Tools', 'Organizers'],
  },
  {
    id: 'bath-body-care',
    name: 'Bath & Body Care',
    slug: 'bath-body-care',
    description: 'Luxurious bath and body care products for ultimate relaxation and skincare.',
    banner: false,
    subcategories: ['Body Wash', 'Body Lotion', 'Bath Bombs', 'Body Scrub', 'Hand Cream'],
  },
  {
    id: 'combo',
    name: 'Combo',
    slug: 'combo',
    description: 'Amazing combo deals with perfect product pairings at special prices.',
    banner: true,
    subcategories: [],
  },
  {
    id: 'brands',
    name: 'Brands',
    slug: 'brands',
    description: 'Explore our curated collection of premium beauty brands.',
    banner: false,
    subcategories: [],
  },
];

export const brands = [
  "L'Oréal", 'Maybelline', 'MAC', 'NARS', 'Urban Decay', 'Charlotte Tilbury',
  'Fenty Beauty', 'Estée Lauder', 'Clinique', 'Shiseido', 'SK-II',
  'La Roche-Posay', 'CeraVe', 'Neutrogena', 'Cetaphil', 'COSRX', 'ANUA',
  'Beauty Of Joseon', 'SKIN1004',
];

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="18" fill="%239ca3af"%3EProduct Image%3C/text%3E%3C/svg%3E';

const SKIN_TYPES = ['oily', 'dry', 'combination', 'sensitive'];
const BOISHAKHI_GROUPS = ['cleansers', 'serums', 'moisturizing'];

const baseProducts = {
  'skin-care': [
    { name: 'Hydrating Facial Serum', description: 'Deep hydration serum with hyaluronic acid', price: 2499, originalPrice: 3499, subcategory: 'Serums' },
    { name: 'Gentle Cleanser', description: 'pH-balanced face cleanser for all skin types', price: 1299, originalPrice: 1799, subcategory: 'Cleansers' },
    { name: 'Anti-Aging Moisturizer', description: 'Rich moisturizer with retinol and vitamin E', price: 3999, originalPrice: 5499, subcategory: 'Moisturizers' },
    { name: 'Vitamin C Brightening Cream', description: 'Brightens and evens skin tone', price: 2999, originalPrice: 4299, subcategory: 'Moisturizers' },
    { name: 'Exfoliating Face Mask', description: 'Deep cleansing mask with AHAs and BHAs', price: 1899, originalPrice: 2599, subcategory: 'Face Masks' },
    { name: 'SPF 50 Sunscreen', description: 'Broad spectrum UV protection', price: 1599, originalPrice: 2299, subcategory: 'Sunscreen' },
    { name: 'Night Repair Serum', description: 'Intensive overnight restoration serum', price: 3499, originalPrice: 4799, subcategory: 'Serums' },
    { name: 'Acne Treatment Spot', description: 'Targeted acne spot treatment', price: 999, originalPrice: 1499, subcategory: 'Cleansers' },
    { name: 'Pore Minimizing Toner', description: 'Tightens pores and refreshes skin', price: 1199, originalPrice: 1699, subcategory: 'Anti-Aging' },
    { name: 'Centella Soothing Toner', description: 'Calms irritated and sensitive skin', price: 1450, originalPrice: 1800, subcategory: 'Serums' },
    { name: 'Snail Mucin Essence', description: 'Repairs and hydrates damaged skin barrier', price: 1650, originalPrice: 2100, subcategory: 'Serums' },
    { name: 'Glow Deep Serum', description: 'Rice and ginseng brightening serum', price: 1550, originalPrice: 1900, subcategory: 'Serums' },
    { name: 'Madagascar Ampoule', description: 'Centella ampoule for redness relief', price: 1750, originalPrice: 2200, subcategory: 'Serums' },
  ],
  makeup: [
    { name: 'Liquid Foundation', description: 'Full coverage liquid foundation', price: 1799, originalPrice: 2499, subcategory: 'Face' },
    { name: 'Lipstick Classic Red', description: 'Iconic red lipstick with long wear formula', price: 1299, originalPrice: 1799, subcategory: 'Lip Makeup' },
    { name: 'Eyeshadow Palette', description: '12-shade eyeshadow palette with rich pigments', price: 2499, originalPrice: 3499, subcategory: 'Eye Makeup' },
    { name: 'Mascara Volumizer', description: 'Volumizing mascara for dramatic lashes', price: 1099, originalPrice: 1599, subcategory: 'Eye Makeup' },
    { name: 'Blusher Powder', description: 'Silky powder blush with natural flush', price: 899, originalPrice: 1299, subcategory: 'Cheeks' },
    { name: 'Highlighter Stick', description: 'Radiant highlighter for luminous glow', price: 1399, originalPrice: 1999, subcategory: 'Cheeks' },
    { name: 'Eyeliner Pencil', description: 'Precision eyeliner pencil', price: 699, originalPrice: 999, subcategory: 'Eye Makeup' },
    { name: 'Lip Gloss', description: 'Glossy lip finish with shine', price: 799, originalPrice: 1199, subcategory: 'Lip Makeup' },
    { name: 'Matte Lip Tint', description: 'Long-lasting matte lip tint', price: 950, originalPrice: 1350, subcategory: 'Lip Makeup' },
    { name: 'Cushion Foundation', description: 'Lightweight dewy cushion foundation', price: 2199, originalPrice: 2899, subcategory: 'Face' },
  ],
  'hair-care': [
    { name: 'Volumizing Shampoo', description: 'Adds volume and bounce to hair', price: 899, originalPrice: 1299, subcategory: 'Shampoo' },
    { name: 'Hydrating Conditioner', description: 'Deep conditioning formula', price: 899, originalPrice: 1299, subcategory: 'Conditioner' },
    { name: 'Hair Growth Oil', description: 'Promotes healthy hair growth', price: 1499, originalPrice: 2099, subcategory: 'Hair Oil' },
    { name: 'Protein Hair Mask', description: 'Repairs and strengthens damaged hair', price: 1299, originalPrice: 1899, subcategory: 'Hair Masks' },
    { name: 'Anti-Frizz Serum', description: 'Smooths and controls frizz', price: 1099, originalPrice: 1599, subcategory: 'Hair Treatment' },
    { name: 'Color Protection Spray', description: 'Protects colored hair from fading', price: 799, originalPrice: 1199, subcategory: 'Hair Treatment' },
    { name: 'Heat Protection Spray', description: 'Protects from heat styling damage', price: 699, originalPrice: 999, subcategory: 'Styling' },
    { name: 'Scalp Treatment Tonic', description: 'Soothes dry and itchy scalp', price: 1199, originalPrice: 1599, subcategory: 'Hair Treatment' },
  ],
  accessories: [
    { name: 'Makeup Brush Set', description: '15-piece professional brush set', price: 1999, originalPrice: 2799, subcategory: 'Brushes' },
    { name: 'Vanity Mirror', description: 'LED vanity mirror with magnification', price: 2499, originalPrice: 3499, subcategory: 'Mirrors' },
    { name: 'Beauty Blender', description: 'Premium makeup sponge applicator', price: 399, originalPrice: 599, subcategory: 'Tools' },
    { name: 'Hair Straightener', description: 'Professional ceramic hair straightener', price: 3999, originalPrice: 5499, subcategory: 'Tools' },
    { name: 'Storage Organizer', description: 'Beauty product storage cabinet', price: 1299, originalPrice: 1899, subcategory: 'Storage' },
    { name: 'Makeup Palette Case', description: 'Protective palette storage case', price: 599, originalPrice: 899, subcategory: 'Organizers' },
  ],
  'bath-body-care': [
    { name: 'Moisturizing Body Wash', description: 'Gentle moisturizing body cleanser', price: 699, originalPrice: 999, subcategory: 'Body Wash' },
    { name: 'Luxury Body Lotion', description: 'Rich creamy body lotion', price: 1099, originalPrice: 1599, subcategory: 'Body Lotion' },
    { name: 'Exfoliating Body Scrub', description: 'Smooth and polished skin scrub', price: 899, originalPrice: 1299, subcategory: 'Body Scrub' },
    { name: 'Bath Bomb Set', description: '5 colorful bath bombs', price: 799, originalPrice: 1199, subcategory: 'Bath Bombs' },
    { name: 'Hand Cream', description: 'Nourishing hand cream', price: 499, originalPrice: 799, subcategory: 'Hand Cream' },
    { name: 'Bath Salts', description: 'Aromatherapy bath salts', price: 599, originalPrice: 899, subcategory: 'Bath Bombs' },
  ],
  combo: [
    { name: 'Skincare Starter Kit', description: 'Complete skincare routine combo', price: 4999, originalPrice: 7999, subcategory: 'Skincare' },
    { name: 'Makeup Essentials Combo', description: 'All essential makeup products', price: 5999, originalPrice: 9499, subcategory: 'Makeup' },
    { name: 'Hair Care Combo', description: 'Shampoo, conditioner and mask combo', price: 2499, originalPrice: 3999, subcategory: 'Hair' },
    { name: 'Gift Box Deluxe', description: 'Premium beauty gift set', price: 6999, originalPrice: 10999, subcategory: 'Gift' },
    { name: 'Dark Spot Combo', description: 'Dark spot treatment duo (50ml+50ml)', price: 1350, originalPrice: 2350, subcategory: 'Skincare' },
    { name: 'Dandruff Defence Combo', description: 'Anti-dandruff shampoo and treatment (250ml)', price: 1349, originalPrice: 1870, subcategory: 'Hair' },
    { name: 'Budget Brightening Combo', description: 'Brightening serum and cream (50ml+100ml)', price: 1299, originalPrice: 1699, subcategory: 'Skincare' },
  ],
  brands: [
    { name: 'MAC Lipstick Set', description: 'MAC professional lipstick collection', price: 8999, originalPrice: 12999, subcategory: 'MAC' },
    { name: 'Urban Decay Palette', description: 'Urban Decay eyeshadow palette', price: 5499, originalPrice: 7999, subcategory: 'Urban Decay' },
    { name: 'Charlotte Tilbury Highlighter', description: 'Luxury highlighter by Charlotte Tilbury', price: 4499, originalPrice: 6499, subcategory: 'Charlotte Tilbury' },
    { name: 'CeraVe Moisturizing Cream', description: 'Dermatologist-recommended moisturizer', price: 1899, originalPrice: 2499, subcategory: 'CeraVe' },
    { name: 'COSRX Snail Essence', description: 'Best-selling snail mucin essence', price: 1650, originalPrice: 2100, subcategory: 'COSRX' },
  ],
};

const seededRandom = seed => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

let catalogCache = null;

function buildCatalog() {
  const products = [];

  categories.forEach(category => {
    const templates = baseProducts[category.id] || baseProducts['skin-care'];
    const count = category.id === 'combo' ? 40 : 35;

    for (let i = 0; i < count; i++) {
      const base = templates[i % templates.length];
      const seed = `${category.id}-${i}`.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
      const r1 = seededRandom(seed);
      const r2 = seededRandom(seed + 1);
      const r3 = seededRandom(seed + 2);
      const r4 = seededRandom(seed + 3);
      const r5 = seededRandom(seed + 4);
      const r6 = seededRandom(seed + 5);

      const discount = Math.floor(((base.originalPrice - base.price) / base.originalPrice) * 100);
      const id = `${category.id}-${i + 1}`;
      const name = i > 0 ? `${base.name} #${i + 1}` : base.name;
      const slug = `${slugify(base.name)}-${i + 1}`;

      const skinType = category.id === 'skin-care' ? SKIN_TYPES[Math.floor(r1 * SKIN_TYPES.length)] : null;
      let boishakhiGroup = null;
      if (category.id === 'skin-care') {
        if (base.subcategory === 'Cleansers') boishakhiGroup = 'cleansers';
        else if (base.subcategory === 'Serums') boishakhiGroup = 'serums';
        else if (base.subcategory === 'Moisturizers') boishakhiGroup = 'moisturizing';
        else boishakhiGroup = BOISHAKHI_GROUPS[Math.floor(r2 * BOISHAKHI_GROUPS.length)];
      }

      products.push({
        id,
        slug,
        name,
        description: base.description,
        category: category.id,
        subcategory: base.subcategory || 'Other',
        brand: brands[Math.floor(r3 * brands.length)],
        image: PLACEHOLDER_IMAGE,
        price: base.price,
        originalPrice: base.originalPrice,
        discount,
        rating: Number((r4 * 2 + 3).toFixed(1)),
        reviews: Math.floor(r5 * 500 + 10),
        stock: r6 > 0.15 ? Math.floor(r6 * 100) + 5 : 0,
        featured: r1 > 0.7,
        bestSeller: r2 > 0.65,
        newArrival: r3 > 0.75,
        isCombo: category.id === 'combo',
        isSale: discount > 20 || r4 > 0.7,
        isFlashSale: category.id === 'combo' && r5 > 0.5,
        isBogo: r6 > 0.85,
        skinType,
        boishakhiGroup,
        inStock: r6 > 0.15,
      });
    }
  });

  return products;
}

export function getAllProducts() {
  if (!catalogCache) catalogCache = buildCatalog();
  return catalogCache;
}

export function getProductById(id) {
  return getAllProducts().find(p => p.id === id) || null;
}

const SIZES = ['30ml', '50ml', '100ml', '150ml', '210ml', '250ml'];
const IDEAL_FOR = ['All Skin Types', 'Oily Skin', 'Dry Skin', 'Combination Skin', 'Sensitive Skin'];
const INGREDIENT_SETS = [
  ['Ginseng seed oil extract', 'Soybean oil extract'],
  ['Hyaluronic acid', 'Niacinamide', 'Vitamin C'],
  ['Centella asiatica', 'Madecassoside', 'Panthenol'],
  ['Snail secretion filtrate', 'Betaine', 'Allantoin'],
  ['Retinol', 'Vitamin E', 'Peptide complex'],
];

const REVIEW_AUTHORS = [
  'Dr Jesmin Akter Jessy',
  'Nusrat Jahan',
  'Farhana Ahmed',
  'Sadia Rahman',
  'Tasnim Hossain',
];

const REVIEW_COMMENTS = [
  'Best for all skin types',
  'Love this product! Will buy again.',
  'Great value for money. Highly recommend.',
  'Works exactly as described. Very satisfied.',
  'My skin feels amazing after using this.',
];

function makePlaceholderImage(label, hue = 243) {
  const text = encodeURIComponent(label);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Crect width='600' height='600' fill='%23${hue.toString(16).padStart(6, '0')}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='22' fill='%236b7280'%3E${text}%3C/text%3E%3C/svg%3E`;
}

function enrichProduct(product) {
  const seed = product.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const r1 = seededRandom(seed + 10);
  const r2 = seededRandom(seed + 11);
  const r3 = seededRandom(seed + 12);
  const r4 = seededRandom(seed + 13);

  const size = SIZES[Math.floor(r1 * SIZES.length)];
  const idealFor = IDEAL_FOR[Math.floor(r2 * IDEAL_FOR.length)];
  const keyIngredients = INGREDIENT_SETS[Math.floor(r3 * INGREDIENT_SETS.length)];
  const sku = `880${String(Math.floor(r4 * 9999999999)).padStart(10, '0')}`;
  const tagBase = `${product.brand} ${product.subcategory}`.toLowerCase();

  const reviewCount = Math.min(product.reviews, 5);
  const reviewItems = Array.from({ length: Math.max(1, reviewCount) }, (_, i) => ({
    id: `${product.id}-review-${i}`,
    author: REVIEW_AUTHORS[i % REVIEW_AUTHORS.length],
    rating: Math.min(5, Math.round(product.rating)),
    comment: REVIEW_COMMENTS[i % REVIEW_COMMENTS.length],
    date: new Date(Date.now() - (i + 1) * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  }));

  const longDescription = `${product.description}. This premium ${product.subcategory.toLowerCase()} from ${product.brand} is formulated to deliver visible results. It helps cleanse, remove impurities, and brighten your complexion while maintaining the skin's natural moisture barrier. Suitable for daily use as part of your skincare routine.`;

  return {
    ...product,
    size,
    idealFor,
    keyIngredients,
    sku,
    tags: [
      `${tagBase}`,
      `${product.name.toLowerCase()}`,
      `${product.brand.toLowerCase()} ${product.subcategory.toLowerCase()}`,
      `buy ${product.name.toLowerCase()} online`,
    ],
    images: [
      makePlaceholderImage('Product Image', 0xf3f4f6),
      makePlaceholderImage('Ingredients', 0xfef3f2),
      makePlaceholderImage('How to Use', 0xfff7ed),
      makePlaceholderImage('Packaging', 0xf0fdf4),
    ],
    longDescription,
    appPrice: Math.round(product.price * 0.98),
    soldLast24h: Math.floor(r1 * 80 + 10),
    saleEndsAt: product.isSale || product.discount > 0
      ? Date.now() + 2 * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000
      : null,
    reviewItems,
  };
}

export function getProductBySlug(slug) {
  const product = getAllProducts().find(p => p.slug === slug) || null;
  return product ? enrichProduct(product) : null;
}

export function getProductsByBrand(brand, excludeId, limit = 8) {
  return getAllProducts()
    .filter(p => p.brand === brand && p.id !== excludeId)
    .slice(0, limit);
}

export function getCategoryData(categorySlug) {
  return categories.find(c => c.slug === categorySlug) || null;
}

export function getAllCategories() {
  return categories;
}

export function getFilteredProducts(products, filters = {}) {
  let filtered = [...products];

  if (filters.priceRange) {
    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );
  }
  if (filters.categories?.length) {
    filtered = filtered.filter(p => filters.categories.includes(p.category));
  }
  if (filters.subcategory) {
    filtered = filtered.filter(p => p.subcategory === filters.subcategory);
  }
  if (filters.brands?.length) {
    filtered = filtered.filter(p => filters.brands.includes(p.brand));
  }
  if (filters.categorySlug) {
    const cat = getCategoryData(filters.categorySlug);
    if (cat) filtered = filtered.filter(p => p.category === cat.id);
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q),
    );
  }
  if (filters.featured) filtered = filtered.filter(p => p.featured);
  if (filters.bestSeller) filtered = filtered.filter(p => p.bestSeller);
  if (filters.newArrival) filtered = filtered.filter(p => p.newArrival);
  if (filters.isFlashSale) filtered = filtered.filter(p => p.isFlashSale);
  if (filters.isCombo) filtered = filtered.filter(p => p.isCombo);
  if (filters.isBogo) filtered = filtered.filter(p => p.isBogo);
  if (filters.skinType) filtered = filtered.filter(p => p.skinType === filters.skinType);
  if (filters.boishakhiGroup) filtered = filtered.filter(p => p.boishakhiGroup === filters.boishakhiGroup);

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'best-sale':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'new-arrival':
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
  }

  return filtered;
}

export function paginateProducts(products, page = 1, perPage = 12) {
  const total = products.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const start = (page - 1) * perPage;
  return {
    products: products.slice(start, start + perPage),
    total,
    page,
    perPage,
    totalPages,
  };
}

export function getRelatedProducts(productId, limit = 8) {
  const product = getProductById(productId);
  if (!product) return [];
  return getAllProducts()
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export function getFeaturedVideos() {
  const all = getAllProducts();
  return homepage.featuredVideosMeta.map(video => ({
    ...video,
    products: video.productIds
      .map(id => all.find(p => p.id === id))
      .filter(Boolean)
      .map(p => ({
        id: p.id,
        slug: p.slug,
        brand: p.brand,
        name: p.name,
        discountedPrice: p.price,
        originalPrice: p.originalPrice,
        badge: 'ON SALE',
      })),
  }));
}

export function getMegaMenuData() {
  return categories
    .filter(c => c.subcategories.length > 0)
    .map(category => ({
      title: category.name,
      slug: category.slug,
      columns: [
        {
          title: 'Shop by Type',
          items: category.subcategories.map(sub => ({
            label: sub,
            href: `/${category.slug}?subcategory=${encodeURIComponent(sub)}`,
            image: '/images/skin-care.webp',
          })),
        },
      ],
    }));
}

// Re-export homepage static content for services
export const homepageData = homepage;
