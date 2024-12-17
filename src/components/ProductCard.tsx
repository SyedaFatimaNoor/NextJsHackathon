import Image from "next/image";
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-6 cursor-pointer group transition duration-300 hover:shadow-lg hover:scale-105">
      {/* Image Container */}
      <div className="bg-[#F5F5F5] aspect-[4/5] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={50000}
          height={50000}
          className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-normal text-[#2A254B]">
          {title}
        </h3>
        <p className="text-lg text-[#2A254B]">£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
