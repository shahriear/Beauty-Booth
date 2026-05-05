import Header from './components/Header';
import Navbar from './components/Navbar';
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
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
