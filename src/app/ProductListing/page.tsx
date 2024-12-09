import Navbar from "@/components/Navbar";
import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  {
    image: "/images/Photo.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new1.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new2.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new3.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/Photo4.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/Parent.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new4.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new5.png",
    title: "The Dandy chair",
    price: 250
  },
  {
    image: "/images/new6.png",
    title: "The Dandy chair",
    price: 250
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url('/images/header.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative h-[209px] flex items-center px-8 md:px-16"
      >
        <h1 className="text-white text-4xl font-normal font-clash">
          All products
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Filters */}
          <div className="lg:w-[385px] border-r border-[#DBDBDB]">
            <FilterSection />
          </div>

          {/* Products Grid */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <button className="px-8 py-4 border border-[#2A254B] text-[#2A254B] hover:bg-[#2A254B] hover:text-white transition duration-200">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
