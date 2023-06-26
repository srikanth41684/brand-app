import Image from "next/image";
import logo from "/public/logo.png";
import SearchInput from "./SearchInput";
import Link from "next/link";
import wishImage from "/public/wishlist-icon.png";
import cartImage from "/public/cart-icon.png";
import profileImage from "/public/profile-icon.png";

const navList = [
  {
    id: 1,
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
  {
    id: 1,
    title: "Profile",
    src: profileImage,
    href: "/profile",
  },
];

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center py-4 justify-between px-12 max-w-[1400px] m-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="text-2xl text-blue-600 font-bold pl-2">Barand</div>
        </Link>
        <div className="w-2/4">
          <SearchInput />
        </div>
        <div className="flex gap-4">
          {navList.map((item, index) => {
            return (
              <Link
                href={item.href}
                className="flex flex-col px-1 items-center gap-1"
              >
                <Image src={item.src} width={23} height={23} alt="logo" />
                <div className="text-sm">{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="px-12 max-w-[1400px] m-auto flex justify-between items-center py-3">
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
