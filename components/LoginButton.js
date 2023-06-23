"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn("google")}
        className="bg-cyan-500 hover:bg-cyan-600 rounded font-semibold text-stone-50 px-8 py-3"
      >
        LogIn with google
      </button>
    </div>
  );
};

export default LoginButton;
