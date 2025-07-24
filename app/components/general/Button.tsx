//import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  //icon?: IconType | undefined
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({text, onClick, small, outline, disabled}) => {
  return <button disabled={disabled} className={`rounded-lg p-3 ${small? "w-[250px]":"w-full"} ${outline? "border text-brand-bg":"bg-brand-bg text-white"}`} onClick={() => {}}>{text}</button>;
};

export default Button;
