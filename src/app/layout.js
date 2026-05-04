import './globals.css';

export const metadata = {
  title: 'Beauty Booth - Beauty & Cosmetics',
  description:
    'Discover premium beauty products including makeup, skincare, and more at Beauty Booth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
