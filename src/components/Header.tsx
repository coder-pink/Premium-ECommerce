
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl md:text-3xl font-bold">Premium E-Commerce</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-gray-200 transition-colors">Products</Link>
          <Link href="/signup" className="hover:text-gray-200 transition-colors">Register</Link>
          <Link href="/signin" className="hover:text-gray-200 transition-colors">Login</Link>
          <LogoutButton />
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
