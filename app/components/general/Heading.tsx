import { Head } from "next/document";

interface HeadingProps {
  center?: boolean;
  text?: string;
}
const Heading: React.FC<HeadingProps> = ({center, text}) => {
  return <div className={`text-brand-bg px-3 md:px-10 md:text-2xl my-3 md:my-10 ${center ? "text-center" : "text-start"}`}>
    {text}
  </div>;
};

export default Heading;
