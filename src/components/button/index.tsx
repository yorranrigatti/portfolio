import { IconType } from "react-icons";

interface ButtonProps {
  icon?: IconType;
  children?: string;
  onClick?: () => void;
}

export const Button = ({ icon: Icon, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};
