import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import ThemeProvider from '@/context/ThemeContext';
import AuthProvider from '@/components/authprovider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tia Blog',
  description: 'Welcome to Tia Blog website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container ">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
