import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TopCategories from './components/TopCategories';
import Trending from './components/Trending';
import ComboOffers from './components/ComboOffers';
import BoishakhiOffer from './components/BoishakhiOffer';

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
    </div>
  );
}
