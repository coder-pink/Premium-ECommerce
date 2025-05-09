'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin' || pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}

