
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
import featuredVideos from './components/data/featuredVideos';
import SkinType from './components/SkinType';
import ExclusiveAccessories from './components/ExclusiveAccessories';
import BuyOneGetOne from './components/BuyOneGetOne';
import CustomerReviews from './components/CustomerReviews';

export default function Home() {
  

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

      {/* props pass */}
      <FeaturedInVideos featuredVideos={featuredVideos} />

      <FlatSalesPercentage />
      <SkinType />
      <ExclusiveAccessories />
      <BuyOneGetOne />
      <CustomerReviews/>
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
