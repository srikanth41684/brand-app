import Image from "next/image";
import logo from "/public/logo.png";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="text-3xl text-sky-300 font-bold pl-2">Barand</div>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
