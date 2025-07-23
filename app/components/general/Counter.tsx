interface CounterProps {
  cardProduct: any;
  increaseFunct: () => void;
  decreaseFunct: () => void;
}
const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunct,
  decreaseFunct,
}) => {
  return;
  <div>
    <div>-</div>
    <div>0</div>
    <div>+</div>
  </div>;
};

export default Counter;
