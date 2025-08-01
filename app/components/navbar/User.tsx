"use client";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

interface UserProps {
  currentUser: User | null | undefined;
}
const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  console.log(currentUser);
  const menuFunc = (type: any) => {
          setOpenMenu(false);
    if (type == "logout") {

      signOut({ callbackUrl: "/login" });
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FaRegUser size="20" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {openMenu && (
        <div className="absolute w-[150px] top-11 bg-brand-textlogo right-0 p-2 shadow-xl rounded-md">
          {currentUser ? (
            <div className="space-y-1">
              <div onClick={() => router.push("/admin")} className="text-brand-primary">Admin</div>
              <div
                onClick={() => menuFunc("logout")}
                className="text-brand-primary"
              >
                Logout
              </div>
            </div>
          ) : (
            <div>
              <div
                onClick={() => menuFunc("register")}
                className="text-brand-primary"
              >
                Register
              </div>
              <div
                onClick={() => menuFunc("login")}
                className="text-brand-primary"
              >
                Login
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
