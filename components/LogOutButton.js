"use client";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="bg-lime-500 font-bold text-xl text-yellow-50 rounded px-8 py-3"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
