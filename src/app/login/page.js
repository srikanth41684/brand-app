import { getServerSession } from "next-auth";
import LoginButton from "../../../components/LoginButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const LogInScreen = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <h1>Contineu to LogIn</h1>
      <LoginButton />
    </div>
  );
};

export default LogInScreen;
