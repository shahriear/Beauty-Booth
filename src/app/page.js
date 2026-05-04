import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TopCategories from './components/TopCategories';
import Trending from './components/Trending';
import OfferSection from './components/OfferSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <Navbar />
      <Banner />
      <TopCategories />
      <Trending />
      <OfferSection />
    </div>
  );
}
