import { ReactNode } from "react";

interface ButtonProps {
  color: string;
  children: ReactNode;
  onClick: () => void;
}

const Buttons = ({ color, children, onClick }: ButtonProps) => {
 
  return (
    <>
      <button type="button" className={`btn btn-` + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Buttons;
