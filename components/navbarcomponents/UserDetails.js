"use client";

// import { useEffect, useState } from "react";
// import profileImage from "/public/profile-icon.png";
// import Image from "next/image";
// import { useSession } from "next-auth/react";

// const userObj = {
//   title: "Profile",
//   src: profileImage,
//   href: "/profile",
// };

const UserDetails = () => {
  // const { data: session } = useSession();

  // console.log("session--===>", session);
  // const [user, setUser] = useState(userObj);

  // useEffect(() => {
  //   if (session) {
  //     setUser(session.user);
  //   } else {
  //     setUser(userObj);
  //   }
  // }, []);

  // console.log("user======>", user);

  return (
    <div className="flex flex-col px-1 items-center gap-1">
      {/* <Image src={user.image} width={23} height={23} alt="logo" />
      <div className="text-sm">{user.name}</div> */}
      {/* {session ? (
        <div>
          <Image src={user.image} width={23} height={23} alt="logo" />
          <div className="text-sm">{user.name}</div>
        </div>
      ) : (
        <div>
          <Image src={user.src} width={23} height={23} alt="logo" />
          <div className="text-sm">{user.title}</div>
        </div>
      )} */}
    </div>
  );
};

export default UserDetails;
