import BestOfferBrands from '@/app/components/Home/BestOfferBrands';
import BestOfSkincare from '@/app/components/Home/BestOfSkincare';
import FeaturedInVideos from '@/app/components/Home/FeaturedInVideos';
import BoishakhiOffer from '@/app/components/Home/BoishakhiOffer';
import ComboOffers from '@/app/components/Home/ComboOffers';
import FreeDeliveryAvailable from '@/app/components/Home/FreeDeliveryAvailable';
import Banner from '@/app/components/Home/Banner';
import Top3OfBeauty from '@/app/components/Home/Top3OfBeauty';
import TopCategories from '@/app/components/Home/TopCategories';
import Trending from '@/app/components/Home/Trending';
import FlatSalesPercentage from '@/app/components/Home/FlatSalesPercentage';
import SkinType from '@/app/components/Home/SkinType';
import ExclusiveAccessories from '@/app/components/Home/ExclusiveAccessories';
import BuyOneGetOne from '@/app/components/Home/BuyOneGetOne';
import CustomerReviews from '@/app/components/Home/CustomerReviews';
import FlashSale from '@/app/components/Home/FlashSale';
import OurBrands from '@/app/components/Home/OurBrands';
import VisitOutlet from '@/app/components/Home/VisitOutlet';
import OfferSection from '@/app/components/Home/OfferSection';

export default function Home() {
  return (
    <div className="min-h-screen container">
      <Banner />
      <TopCategories />
      <Trending />
      <OfferSection />
      <ComboOffers />
      <BoishakhiOffer />
      <BestOfferBrands />
      <Top3OfBeauty />
      <FreeDeliveryAvailable />
      <BestOfSkincare />
      <FeaturedInVideos />
      <FlatSalesPercentage />
      <SkinType />
      <ExclusiveAccessories />
      <BuyOneGetOne />
      <CustomerReviews />
      <FlashSale />
      <OurBrands />
      <VisitOutlet />
    </div>
  );
}
