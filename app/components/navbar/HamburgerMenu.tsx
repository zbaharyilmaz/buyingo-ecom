import { RxHamburgerMenu } from "react-icons/rx";
const HamburgerMenu = () => {
  return (
    <div className="relative flex md:hidden cursor-pointer">
      <RxHamburgerMenu className="" />
    </div>
  );
};

export default HamburgerMenu;