import {CardProductProps} from "../detail/DetailClient"
interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunct: () => void;
  decreaseFunct: () => void;
}

const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunct, decreaseFunct }) => {
  const buttonStyle= "w-8 h-8 border flex items-center justify-center rounded-md text-lg"
  return (
    <div className="flex items-center gap-2">
      <div className={buttonStyle} onClick={decreaseFunct}>-</div>
      <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunct}>+</div>
    </div>
  );
}
export default Counter;
