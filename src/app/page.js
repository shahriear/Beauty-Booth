import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TopCategories from './components/TopCategories';
import Trending from './components/Trending';
import ComboOffers from './components/ComboOffers';
import BoishakhiOffer from './components/BoishakhiOffer';
import BestOfferBrands from './components/BestOfferBrands';
import Top3OfBeauty from './components/Top3OfBeauty';
import FreeDeliveryAvailable from './components/FreeDeliveryAvailable';
import BestOfSkincare from './components/BestOfSkincare';
import FeaturedInVideos from './components/FeaturedInVideos';
import FlatSalesPercentage from './components/FlatSalesPercentage';

export default function Home() {
  const featuredVideos = [
    {
      videoSrc: '/Videos/Videos-1.mp4',
      productImage: '/images/skin-care.webp',
      productName: 'Luxury Face Serum',
      category: 'Skincare',
      price: '$25',
      oldPrice: '$30',
    },
    {
      videoSrc: '/Videos/Videos-2.mp4',
      productImage: '/images/skin-care2.webp',
      productName: 'Glow Cream',
      category: 'Beauty',
      price: '$18',
      oldPrice: '$22',
    },
    {
      videoSrc: '/Videos/Videos-3.mp4',
      productImage: '/images/skin-care.webp',
      productName: 'Skin Toner',
      category: 'Care',
      price: '$12',
      oldPrice: '$15',
    },
    {
      videoSrc: '/Videos/Videos-4.mp4',
      productImage: '/images/skin-care2.webp',
      productName: 'Premium Care',
      category: 'Skincare',
      price: '$30',
      oldPrice: '$35',
    },
    {
      videoSrc: '/Videos/Videos-5.mp4',
      productImage: '/images/skin-care.webp',
      productName: 'Luxury Face Serum',
      category: 'Skincare',
      price: '$25',
      oldPrice: '$30',
    },
    {
      videoSrc: '/Videos/Videos-6.mp4',
      productImage: '/images/skin-care2.webp',
      productName: 'Glow Cream',
      category: 'Beauty',
      price: '$18',
      oldPrice: '$22',
    },
    {
      videoSrc: '/Videos/Videos-7.mp4',
      productImage: '/images/skin-care.webp',
      productName: 'Skin Toner',
      category: 'Care',
      price: '$12',
      oldPrice: '$15',
    },
  ];
  
  return (
    <div className="min-h-screen bg-white container">
      {/* <Header />
      <Navbar /> */}

      <Banner />
      <TopCategories />
      <Trending />
      <ComboOffers />
      <BoishakhiOffer />
      <BestOfferBrands />
      <Top3OfBeauty />
      <FreeDeliveryAvailable />
      <BestOfSkincare />

      {/*  FIXED: props pass করা হয়েছে */}
      <FeaturedInVideos featuredVideos={featuredVideos} />

      <FlatSalesPercentage />
    </div>
  );
}
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import TopCategories from './components/TopCategories';
// import Trending from './components/Trending';
// import ComboOffers from './components/ComboOffers';
// import BoishakhiOffer from './components/BoishakhiOffer';
// import BestOfferBrands from './components/BestOfferBrands';
// import Top3OfBeauty from './components/Top3OfBeauty';
// import FreeDeliveryAvailable from './components/FreeDeliveryAvailable';
// import BestOfSkincare from './components/BestOfSkincare';
// import FeaturedInVideos from './components/FeaturedInVideos';
// import FlatSalesPercentage from './components/FlatSalesPercentage';

// export default function Home() {

//   return (
//     <div className="min-h-screen bg-white container">
//       {/* <Header />
//       <Navbar /> */}
//       <Banner />
//       <TopCategories />
//       <Trending />
//       <ComboOffers />
//       <BoishakhiOffer />
//       <BestOfferBrands />
//       <Top3OfBeauty />
//       <FreeDeliveryAvailable />
//       <BestOfSkincare />
//       <FeaturedInVideos />
//       <FlatSalesPercentage />
//     </div>
//   );
// }