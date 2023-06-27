import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import LogOutButton from "../../components/LogOutButton";
import HeroSection from "../../components/homeHeroSection/Hero";
import Link from "next/link";
import Image from "next/image";
import { getLimitedData } from "../../utils";
import Subscribe from "../../components/Subscribe";

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

  const products = await getLimitedData(10, 35);

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
          <div className="text-3xl font-semibold pb-4">New products</div>
          <div className="flex flex-wrap">
            {products?.products?.map((item, index) => {
              return (
                <div className="w-[20%] pr-5 pb-5">
                  <Link href={`category/${item.category}/${item.id}`}>
                    <div className="bg-white shadow hover:shadow-lg h-[341px] p-3 rounded">
                      <div className="w-90% h-56 relative">
                        <Image
                          src={item.thumbnail}
                          layout="fill"
                          objectFit="contain"
                          alt="nex products"
                        />
                      </div>
                      <div className="pt-5">
                        <div>${item.price}</div>
                        <div className="capitalize pt-1">{item.title}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default HomeScreen;
