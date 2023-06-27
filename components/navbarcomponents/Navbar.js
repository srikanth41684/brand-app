import Image from "next/image";
import logo from "/public/logo.png";
import SearchInput from "./SearchInput";
import Link from "next/link";
import wishImage from "/public/wishlist-icon.png";
import cartImage from "/public/cart-icon.png";
import UserDetails from "./UserDetails";

const navList = [
  {
    id: 0,
    title: "Wish List",
    src: wishImage,
    href: "/wishlist",
  },
  {
    id: 2,
    title: "My Cart",
    src: cartImage,
    href: "/cart",
  },
];

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex items-center h-[80px] justify-between px-5 max-w-[1400px] m-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="text-2xl text-blue-600 font-bold pl-2">Brand</div>
        </Link>
        <div className="w-2/4">
          <SearchInput />
        </div>
        <div className="flex gap-4 items-center">
          {navList.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="flex flex-col px-1 items-center gap-1"
              >
                <Image
                  src={item.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="details"
                />
                <div className="text-sm">{item.title}</div>
              </Link>
            );
          })}
          <div>
            <UserDetails />
          </div>
        </div>
      </div>
      <hr />
      <div className="px-5 max-w-[1400px] m-auto flex justify-between items-center h-[50px]">
        <div className="flex items-center gap-2">
          <div>
            <select className="px-3 py-1 outline-none">
              <option>All Categories</option>
              <option>All category1</option>
              <option>All category2</option>
              <option>All category3</option>
              <option>All category4</option>
              <option>All category5</option>
            </select>
          </div>
          <div>
            <select className="px-3 py-1 outline-none">
              <option>Pages</option>
              <option>Page1</option>
              <option>Page2</option>
              <option>Page3</option>
            </select>
          </div>
          <div className="flex gap-3">
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Projects</Link>
          </div>
        </div>
        <div className="flex">
          <select className="px-3 py-1 outline-none">
            <option>USD</option>
            <option>USD1</option>
            <option>USD2</option>
            <option>USD3</option>
          </select>
          <select className="px-3 py-1 outline-none">
            <option>English</option>
            <option>English1</option>
            <option>English2</option>
            <option>English3</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
