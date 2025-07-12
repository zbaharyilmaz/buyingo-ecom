import { RxHamburgerMenu } from "react-icons/rx";
const HamburgerMenu = () => {
  return (
    <div className="relative flex md:hidden cursor-pointer">
      <RxHamburgerMenu className="text-purple-100" />
    </div>
  );
};

export default HamburgerMenu;