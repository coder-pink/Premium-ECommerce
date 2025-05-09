
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl md:text-3xl font-bold">Premium E-Commerce</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
          <a href="/products" className="hover:text-gray-200 transition-colors">Products</a>
          <a href="/signup" className="hover:text-gray-200 transition-colors">Register</a>
          <a href="/signin" className="hover:text-gray-200 transition-colors">Login</a>
          <LogoutButton />
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
