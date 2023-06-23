import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const HomeScreen = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div>
      <h1 className="text-indigo-300 mt-9 text-xs">HomeScreen</h1>
    </div>
  );
};

export default HomeScreen;
