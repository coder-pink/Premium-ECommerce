
const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 mt-10">
        <div className="container mx-auto px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Premium E-Commerce. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  