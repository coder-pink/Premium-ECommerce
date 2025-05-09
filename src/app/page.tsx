

export default function Home() {
  return (
    <>
      

      <main className="min-h-[80vh] flex items-center justify-center flex-col text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
          Welcome to Premium E-Commerce
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Discover top-quality products, great deals, and seamless shopping experience.
        </p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-base font-medium hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </main>

    </>
  );
}


