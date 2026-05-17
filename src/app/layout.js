import { Toaster } from 'react-hot-toast';
import FloatingButtons from './components/hooks/FloatingButtons';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import './globals.css';

export const metadata = {
  title: 'Beauty Booth - Beauty & Cosmetics',
  description:
    'Discover premium beauty products including makeup, skincare, and more at Beauty Booth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />

        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
