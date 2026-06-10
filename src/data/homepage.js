/** Homepage & layout static content — consumed only via services */

export { megaMenuData } from './megaMenu';
export { seoContentByCategory, SUBCATEGORY_PLACEHOLDER } from './seoContent';

export const heroBanners = [
  '/images/banner-Img/banner-1.webp',
  '/images/banner-Img/banner-2.webp',
  '/images/banner-Img/banner-3.webp',
  '/images/banner-Img/banner-4.webp',
];

export const trendingBanners = [
  '/images/TRENDING-img/trendingIMG-1.webp',
  '/images/TRENDING-img/trendingIMG-2.webp',
  '/images/TRENDING-img/trendingIMG-3.webp',
  '/images/TRENDING-img/trendingIMG-4.webp',
];

export const exclusiveAccessoriesBanners = [
  '/images/ExclusiveAccessories/ExclusiveAccessories-1.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-2.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-3.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-4.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-5.webp',
];

export const topCategories = [
  { name: 'Make up', slug: 'makeup', img: '/images/Top-Categories/TopCategories-1.webp' },
  { name: 'Skin Care', slug: 'skin-care', img: '/images/Top-Categories/TopCategories-2.webp' },
  { name: 'Hair Care', slug: 'hair-care', img: '/images/Top-Categories/TopCategories-3.webp' },
  { name: 'Bath & Body Care', slug: 'bath-body-care', img: '/images/Top-Categories/TopCategories-4.webp' },
  { name: 'Mom & Baby Care', slug: 'mom-baby-care', img: '/images/Top-Categories/TopCategories-5.webp' },
  { name: 'Accessories', slug: 'accessories', img: '/images/Top-Categories/TopCategories-6.webp' },
];

export const bestOfSkincare = [
  { id: 1, name: 'Cleanser', description: 'Cleansing Products', img: '/images/Best-Skincare/Best-Skincare-1.webp', slug: 'skin-care', subcategory: 'Cleansers' },
  { id: 2, name: 'Serum', description: 'Serum Collection', img: '/images/Best-Skincare/Best-Skincare-2.webp', slug: 'skin-care', subcategory: 'Serums' },
  { id: 3, name: 'Sunscreen', description: 'Sun Protection', img: '/images/Best-Skincare/Best-Skincare-1.webp', slug: 'skin-care', subcategory: 'Sunscreen' },
];

export const top3OfBeauty = [
  { id: 1, name: 'Face', description: 'Face Care Collection', img: '/images/TOP-3-OF-BEAUTY/beauty-1.webp', slug: 'makeup', subcategory: 'Face' },
  { id: 2, name: 'Eyes', description: 'Eye Care Collection', img: '/images/TOP-3-OF-BEAUTY/beauty-2.webp', slug: 'makeup', subcategory: 'Eye Makeup' },
  { id: 3, name: 'Lips', description: 'Lip Care Collection', img: '/images/TOP-3-OF-BEAUTY/beauty-3.webp', slug: 'makeup', subcategory: 'Lip Makeup' },
];

export const brandLogos = [
  { id: 1, name: 'Alpecin', image: '/images/Our-Brands/Our-Brands-1.png' },
  { id: 2, name: 'Amlactin', image: '/images/Our-Brands/Our-Brands-2.png' },
  { id: 3, name: 'Aveeno', image: '/images/Our-Brands/Our-Brands-3.png' },
  { id: 4, name: 'Boots', image: '/images/Our-Brands/Our-Brands-4.png' },
  { id: 5, name: 'Cerave', image: '/images/Our-Brands/Our-Brands-5.jpg' },
  { id: 6, name: 'Cosrx', image: '/images/Our-Brands/Our-Brands-6.jpg' },
];

export const bestOfferBrands = [
  { id: 1, discount: 'Up to 35% Off', description: 'K-Beauty Must Have', productImg: '/images/best-offer/offer-1.webp', logo: '/images/Free-Delivery/delivery-logo-1.png' },
  { id: 2, discount: 'Up to 15% Off', description: 'On Entire Brand', productImg: '/images/best-offer/offer-2.webp', logo: '/images/Free-Delivery/delivery-logo-2.webp' },
  { id: 3, discount: 'Up to 50% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/best-offer/offer-3.webp', logo: '/images/Free-Delivery/delivery-logo-3.png' },
  { id: 4, discount: 'Up to 18% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/best-offer/offer-4.webp', logo: '/images/Free-Delivery/delivery-logo-4.webp' },
  { id: 5, discount: 'Up to 10% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/best-offer/offer-5.webp', logo: '/images/Free-Delivery/delivery-logo-5.webp' },
];

export const freeDeliveryOffers = [
  { id: 1, discount: 'Up to 35% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/Free-Delivery/Free-Delivery-1.webp', logo: '/images/Free-Delivery/delivery-logo-1.png' },
  { id: 2, discount: 'Up to 15% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/Free-Delivery/Free-Delivery-2.webp', logo: '/images/Free-Delivery/delivery-logo-2.webp' },
  { id: 3, discount: 'Up to 50% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/Free-Delivery/Free-Delivery-3.webp', logo: '/images/Free-Delivery/delivery-logo-3.png' },
  { id: 4, discount: 'Up to 18% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/Free-Delivery/Free-Delivery-4.webp', logo: '/images/Free-Delivery/delivery-logo-4.webp' },
  { id: 5, discount: 'Up to 10% Off', description: 'Free Delivery Over 999 bdt', productImg: '/images/Free-Delivery/Free-Delivery-5.webp', logo: '/images/Free-Delivery/delivery-logo-5.webp' },
];

export const flatSalesOffers = [
  { id: 1, discount: 'Flat 16% Off', description: 'On Entire Brand', productImg: '/images/flate-sales/flat-1.webp', logo: '/images/flate-sales/logo-1.png' },
  { id: 2, discount: 'Flat 16% Off', description: 'On Entire Brand', productImg: '/images/flate-sales/flat-2.webp', logo: '/images/flate-sales/logo-2.png' },
  { id: 3, discount: 'Flat 14% Off', description: 'On Entire Brand', productImg: '/images/flate-sales/flat-3.webp', logo: '/images/flate-sales/logo-3.png' },
  { id: 4, discount: 'Flat 13% Off', description: 'On Entire Brand', productImg: '/images/flate-sales/flat-4.webp', logo: '/images/flate-sales/logo-4.webp' },
  { id: 5, discount: 'Flat 13% Off', description: 'On Entire Brand', productImg: '/images/flate-sales/flat-5.webp', logo: '/images/flate-sales/logo-5.png' },
];

export const promoOffers = [
  { title: 'Free Gift Offer', description: 'Round Lab Mugwort Calming Serum (2ml) on orders above 2000 BDT', spend: 'Spend: 2000 TK', highlight: '৳150', label: 'Max Discount' },
  { title: 'New User Treat 🚚', description: 'New at Beauty Booth? Get Free delivery for your First order!', spend: 'Spend: 899 TK', highlight: 'Free Delivery', label: 'Max Discount' },
  { title: 'Free Gift Offer', description: 'Round Lab Mugwort Calming Serum (2ml) on orders above 2000 BDT', spend: 'Spend: 2000 TK', highlight: '৳150', label: 'Max Discount' },
  { title: 'Free Gift Offer', description: 'Skin1004 Centella Tea-Trica BHA Foam on orders above 2000 BDT', spend: 'Spend: 2000 TK', highlight: '৳150', label: 'Max Discount' },
];

export const customerReviews = [
  { id: 1, product: 'Isntree Hyaluronic Acid Moist Cream (100ml)', review: 'Perfect for dry skin', name: 'Mimi' },
  { id: 2, product: 'Gecomo Pond Flower Extract Cleansing Oil (150ml)', review: 'Budget friendly and it actually works as other branded oil cleanser.', name: 'Sarah' },
  { id: 3, product: 'The Ordinary Niacinamide 10% + Zinc 1%', review: 'Very good for oily skin and pores. Controls excess oil perfectly.', name: 'Ismaeel Maajed' },
  { id: 4, product: 'Anua Heartleaf 77% Soothing Toner', review: 'Very lightweight and fast absorbing.', name: 'Hafsa Mrittika' },
  { id: 5, product: 'Axis_Y Dark Spot Correcting Glow Serum', review: 'So good!', name: 'Riya' },
  { id: 6, product: 'Numbuzin No.5 Vitamin Concentrated Serum', review: 'Worked really well on my post-acne scars. Loved the texture.', name: 'Eliza Arefin' },
];

export const featuredVideosMeta = [
  { videoSrc: '/Videos/Videos-1.mp4', productImage: '/images/skin-care.webp', productName: 'Luxury Face Serum', category: 'Skincare', price: 25, oldPrice: 30, productIds: ['skin-care-1', 'skin-care-2', 'skin-care-3', 'skin-care-4'] },
  { videoSrc: '/Videos/Videos-2.mp4', productImage: '/images/skin-care2.webp', productName: 'Glow Cream', category: 'Beauty', price: 18, oldPrice: 22, productIds: ['skin-care-5', 'skin-care-6', 'skin-care-7', 'skin-care-8'] },
  { videoSrc: '/Videos/Videos-3.mp4', productImage: '/images/skin-care.webp', productName: 'Skin Toner', category: 'Care', price: 12, oldPrice: 15, productIds: ['skin-care-9', 'skin-care-10', 'skin-care-11', 'skin-care-12'] },
  { videoSrc: '/Videos/Videos-4.mp4', productImage: '/images/skin-care2.webp', productName: 'Premium Care', category: 'Skincare', price: 30, oldPrice: 35, productIds: ['skin-care-13', 'skin-care-14', 'skin-care-15', 'skin-care-16'] },
  { videoSrc: '/Videos/Videos-5.mp4', productImage: '/images/skin-care.webp', productName: 'Luxury Face Serum', category: 'Skincare', price: 25, oldPrice: 30, productIds: ['skin-care-17', 'skin-care-18', 'skin-care-19', 'skin-care-20'] },
  { videoSrc: '/Videos/Videos-6.mp4', productImage: '/images/skin-care2.webp', productName: 'Glow Cream', category: 'Beauty', price: 18, oldPrice: 22, productIds: ['skin-care-21', 'skin-care-22', 'skin-care-23', 'skin-care-24'] },
  { videoSrc: '/Videos/Videos-7.mp4', productImage: '/images/skin-care.webp', productName: 'Skin Toner', category: 'Care', price: 12, oldPrice: 15, productIds: ['skin-care-25', 'skin-care-26', 'skin-care-27', 'skin-care-28'] },
];

export const outletGallery = [
  { id: 0, image: '/images/Visit-Outlet/Visit-Outlet-1.webp', alt: 'Outlet Image 1' },
  { id: 1, image: '/images/Visit-Outlet/Visit-Outlet-2.webp', alt: 'Outlet Image 2' },
  { id: 2, image: '/images/Visit-Outlet/Visit-Outlet-3.webp', alt: 'Outlet Image 3' },
  { id: 3, image: '/images/Visit-Outlet/Visit-Outlet-4.webp', alt: 'Outlet Image 4' },
  { id: 4, image: '/images/Visit-Outlet/Visit-Outlet-5.webp', alt: 'Outlet Image 5' },
  { id: 5, image: '/images/Visit-Outlet/Visit-Outlet-6.webp', alt: 'Outlet Image 6' },
];

export const footerContact = {
  phones: ['+8801600000000', '+8809600000000'],
  address: 'Dhaka, Bangladesh',
  whatsapp: 'https://wa.me/8801XXXXXXXXX',
};

export const footerLinks = {
  column1: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Career', href: '/career' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  column2: [
    { label: 'About Us', href: '/about' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Return Policy', href: '/return' },
    { label: 'Shipping Policy', href: '/shipping' },
  ],
};

export const popularSearches = [
  'Skin Care', 'Serums & Treatments', 'Moisturizers', 'Cleansers', 'Body Care',
  'Makeup', 'Cerave', 'Cosrx', 'Beauty of Joseon', 'Lipstick', 'Toner',
  'Retinol', 'Face Wash', 'Shampoo', 'Sunscreen', 'lip tint', 'serum',
  'the ordinary', 'face wash', 'cathy doll',
];

export const searchFilters = [
  'sunscreen', 'moisturizer', 'toner', 'serum', 'lipstick', 'blush', 'foundation',
];

export const navMenuItems = [
  { label: 'Eid Festive Sale', slug: 'eid-festive-sale', icon: 'flame' },
  { label: 'New', slug: 'new', icon: 'sparkles' },
  { label: 'Combo', slug: 'combo', icon: null },
  { label: 'Brands', slug: 'brands', icon: 'star' },
  { label: 'Best Selling', slug: 'best-selling', icon: 'badge' },
  { label: 'Skin Care', slug: 'skin-care', icon: null, megaMenu: true },
  { label: 'Make Up', slug: 'makeup', icon: null, megaMenu: true },
  { label: 'Accessories', slug: 'accessories', icon: null, megaMenu: true },
  { label: 'Bath & Body Care', slug: 'bath-body-care', icon: null, megaMenu: true },
  { label: 'Mom & Baby Care', slug: 'mom-baby-care', icon: null, megaMenu: true },
  { label: 'Body Scrub', slug: 'body-scrub', icon: null },
  { label: "Men's Care", slug: 'mens-care', icon: null, megaMenu: true },
  { label: 'Hair Care', slug: 'hair-care', icon: null, megaMenu: true },
  { label: 'BOGO', slug: 'bogo', icon: null },
];

export const boishakhiTabs = [
  { label: 'Cleansers', value: 'cleansers' },
  { label: 'Serums & Treatments', value: 'serums' },
  { label: 'Moisturizing Cream', value: 'moisturizing' },
];

export const skinTypeTabs = [
  { label: 'Oily', value: 'oily' },
  { label: 'Dry', value: 'dry' },
  { label: 'Combination', value: 'combination' },
  { label: 'Sensitive', value: 'sensitive' },
];
