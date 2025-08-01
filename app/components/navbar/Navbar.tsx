import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

const Navbar = async() => {
  const currentUserRaw = await getCurrentUser();
  const currentUser = currentUserRaw
    ? {
        ...currentUserRaw,
        createdAt: new Date(currentUserRaw.createdAt),
        updatedAt: new Date(currentUserRaw.updatedAt),
        emailVerified: currentUserRaw.emailVerified
          ? new Date(currentUserRaw.emailVerified)
          : null,
      }
    : null;

  return (
    <div className="flex gap-3 items-center justify-between md:gap-10 px-3 md:px-10 h-16 bg-brand-bg text-brand-text">
      <Logo />
      <Search />
      <CardCount />
      <User currentUser={currentUser}/>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
