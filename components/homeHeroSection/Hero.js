import Link from "next/link";
import HeroBanner from "./HeroBanner";
import heroProfile from "/public/hero-profile.png";
import Image from "next/image";

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
    <div className="flex gap-5 bg-white p-5 shadow-md">
      <div className="flex flex-col w-1/4">
        {categories.map((item, index) => {
          return (
            <Link
              className="hover:bg-blue-200 py-[6px] rounded text-base pl-2 capitalize"
              key={index}
              href={`category/${item}`}
            >
              {item.replace(`-`, ` `)}
            </Link>
          );
        })}
      </div>
      <div className="w-[55%]">
        <HeroBanner />
      </div>
      <div className="flex flex-col w-[20%] gap-3">
        <div className="bg-blue-200 p-4 rounded">
          <div className="flex pb-4">
            <div className="bg-slate-300 rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={heroProfile}
                width={40}
                height={40}
                alt="hero-profile"
              />
            </div>
            <div className="pl-3">
              <div>Hi User</div>
              <div>Let&apos;s get stated</div>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 text-white w-full py-1 rounded">
              Join now
            </button>
          </div>
        </div>
        <div className="bg-orange-500 p-4 rounded">
          <div className="text-white">
            Get US $10 off with a new supplier account
          </div>
          <Link className="text-white font-medium hover:underline" href="/">
            Get now
          </Link>
        </div>
        <div className="bg-cyan-400 p-4 rounded">
          <div className="text-white">
            Send quotes with supplier preferences
          </div>
          <Link className="text-white font-medium hover:underline" href="/">
            Try now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
