"use client";

import { useEffect, useState } from "react";
import profileImage from "/public/profile-icon.png";
import Image from "next/image";
import { useSession } from "next-auth/react";

const userObj = {
  title: "Profile",
  src: profileImage,
  href: "/profile",
};

const UserDetails = () => {
  const { data: session } = useSession(userObj);

  const [user, setUser] = useState(userObj);

  useEffect(() => {
    if (session) {
      setUser(session.user);
    } else {
      setUser(userObj);
    }
  }, [session]);

  console.log("user======>", user);

  return (
    <>
      {!session && (
        <div className="flex flex-col px-1 items-center gap-1">
          <Image src={user.src.src} width={23} height={23} alt="logo" />
          <div className="text-sm">{user.title}</div>
        </div>
      )}
      {session && (
        <div className="flex flex-col px-1 items-center gap-1">
          <Image src={user.image} width={23} height={23} alt="logo" />
          <div className="text-sm">{user.name}</div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
