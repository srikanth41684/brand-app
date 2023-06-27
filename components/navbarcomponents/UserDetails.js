"use client";

import { useEffect, useState } from "react";
import profileImage from "/public/profile-icon.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import LogOutButton from "../LogOutButton";

const userObj = {
  title: "Profile",
  src: profileImage,
  href: "/profile",
};

const UserDetails = () => {
  const { data: session } = useSession(userObj);

  const [user, setUser] = useState(userObj);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    if (session) {
      setUser(session.user);
    } else {
      setUser(userObj);
    }
  }, [session]);

  const profileHandler = () => {
    setProfile(!profile);
  };

  return (
    <div className="relative">
      {!session && (
        <div className="flex flex-col px-1 items-center gap-1">
          <Image src={user.src.src} width={23} height={23} alt="logo" />
          <div className="text-sm">{user.title}</div>
        </div>
      )}
      {session && (
        <div
          onClick={profileHandler}
          className="flex flex-col px-1 items-center gap-1 cursor-pointer"
        >
          <Image
            className="rounded-full"
            src={user.image}
            width={23}
            height={23}
            alt="logo"
          />
          <div className="text-sm">{user.name}</div>
        </div>
      )}
      {profile && (
        <div className="w-[250px] h-[250px] absolute right-[0] top-[50px] bg-cyan-100 rounded p-6">
          <div className="flex flex-col items-center gap-1 mt-4">
            <Image
              className="rounded-full"
              src={user.image}
              width={70}
              height={70}
              alt="logo"
            />
            <div className="text-lg whitespace-nowrap">{user.email}</div>
          </div>
          <div className="pt-5 flex justify-center">
            <LogOutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
