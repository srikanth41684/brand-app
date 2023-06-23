import Image from "next/image";
import logo from "/public/logo.png";
import SearchInput from "./SearchInput";
import Link from "next/link";

const navList = [
  {
    id: 1,
    title: "Wish List",
    src: "",
    href: "/wishlist",
  },
  {
    id: 2,
    title: "My Cart",
    src: "",
    href: "/cart",
  },
  {
    id: 1,
    title: "Profile",
    src: "",
    href: "/profile",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="text-3xl text-sky-300 font-bold pl-2">Barand</div>
        </div>
        <div>
          <SearchInput />
        </div>
        <div className="flex gap-4">
          {navList.map((item, index) => {
            return (
              <Link
                href={item.href}
                className="flex flex-col px-1 items-center"
              >
                <Image src={logo} width={50} height={50} alt="logo" />
                <div>{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
