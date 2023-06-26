import Link from "next/link";
import HeroBanner from "./HeroBanner";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
];

const HeroSection = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        {categories.map((item, index) => {
          return (
            <Link
              className="hover:bg-blue-200 py-1 text-lg capitalize"
              key={index}
              href={`category/${item}`}
            >
              {item.replace("-", " ")}
            </Link>
          );
        })}
      </div>
      <div className="w-1/2">
        <HeroBanner />
      </div>
    </div>
  );
};

export default HeroSection;
