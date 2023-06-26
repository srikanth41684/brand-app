import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import LogOutButton from "../../components/LogOutButton";
import HeroSection from "../../components/homeHeroSection/Hero";
import Link from "next/link";
import Image from "next/image";

const categoryImages = [
  {
    id: 1,
    title: "laptops",
    src: "https://bootstrap-ecommerce-web.netlify.app/images/icons/nav/nav-1.jpg",
  },
  {
    id: 2,
    title: "smartphones",
    src: "https://bootstrap-ecommerce-web.netlify.app/images/items/tech/3.jpg",
  },
  {
    id: 3,
    title: "fragrances",
    src: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
  },
  {
    id: 4,
    title: "home-decoration",
    src: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
  },
  {
    id: 5,
    title: "furniture",
    src: "https://i.dummyjson.com/data/products/31/thumbnail.jpg",
  },
  {
    id: 6,
    title: "tops",
    src: "https://i.dummyjson.com/data/products/37/thumbnail.jpg",
  },
];

const HomeScreen = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div className="bg-slate-50">
      <div className="flex flex-col pt-5 gap-4 px-5 max-w-[1400px] m-auto">
        <HeroSection />
        <div className="py-10">
          <div className="text-3xl font-semibold">Popular Categories</div>
          <div className="flex justify-between mt-3">
            {categoryImages.map((item, index) => {
              return (
                <Link
                  href={`category/${item.title}`}
                  className="flex flex-col items-center gap-4"
                >
                  <Image
                    className="rounded-full"
                    src={item.src}
                    width={100}
                    height={100}
                    alt="cateImage"
                  />
                  <div>{item.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default HomeScreen;
