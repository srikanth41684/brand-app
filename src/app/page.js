import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import LogOutButton from "../../components/LogOutButton";
import HeroSection from "../../components/homeHeroSection/Hero";

const HomeScreen = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div className="bg-slate-50">
      <div className="flex flex-col pt-5 gap-4 px-12 max-w-[1400px] m-auto">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomeScreen;
