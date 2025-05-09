// // 'use client'
// import './globals.css'
// import { ThemeProvider } from 'next-themes'
// import { AuthProvider } from '@/context/AuthContext'
// import { CartProvider } from '@/context/CartContext'
// import { WishlistProvider } from '@/context/WishlistContext'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Premium E-Commerce',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   const isAuthPage = pathname === '/signin' || pathname === '/signup';
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider attribute="class" enableSystem={true}>
//           <AuthProvider>
//             <WishlistProvider>
//               <CartProvider>
//                 {!isAuthPage && <Header />}
//                 <main>{children}</main>
//                 {!isAuthPage && <Footer />}
//               </CartProvider>
//             </WishlistProvider>
//           </AuthProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }




import './globals.css';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import ClientComponent from '@/components/ClientComponent';


export const metadata = {
  title: 'Premium E-Commerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
              <ClientComponent>{children}</ClientComponent>
                
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
