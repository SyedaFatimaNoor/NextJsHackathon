import Link from "next/link";
const PopularProducts = () => {
  const products = [
    {
      image: "/images/Large.png",
      title: "The Poplar suede sofa",
      price: "980",
    },
    {
      image: "/images/Photo.png",
      title: "The Dandy chair",
      price: "250",
    },
    {
      image: "/images/Parent.png",
      title: "The Dandy chair",
      price: "250",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-16">
      <h2 className="text-2xl md:text-3xl font-normal text-[#2A254B] mb-8">
        Our popular products
      </h2>

      {/* Grid layout for large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Product */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div
            className="bg-[#F5F5F5] mx-auto"
            style={{ maxWidth: "100%", height: "375px" }}
          >
            <img
              src={products[0].image}
              alt={products[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-xl font-normal text-[#2A254B]">
              {products[0].title}
            </h3>
            <p className="text-lg text-[#2A254B]">£{products[0].price}</p>
          </div>
        </div>

        {/* Other Products */}
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.slice(1).map((product, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div
                className="bg-[#F5F5F5] mx-auto"
                style={{ maxWidth: "100%", height: "375px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl font-normal text-[#2A254B]">
                  {product.title}
                </h3>
                <p className="text-lg text-[#2A254B]">£{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Collection Button */}
      <div className="mt-12 flex justify-center">
      <Link href="/ProductListing">
        <button className="px-8 py-4 border border-[#2A254B] text-[#2A254B] hover:bg-gray-100">
          View collection
        </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
