"use client";
interface ButtonProps {
  title: string;
  icon?: React.ElementType;
  handleButton: () => void;
  styleButton?: string;
  styleTitle?: string;
}

const Button = ({
  title,
  icon: Icon,
  handleButton,
  styleButton,
  styleTitle,
}: ButtonProps) => {
  return (
    <button
      className={`flex rounded-xl justify-center ${styleButton}`}
      onClick={handleButton}
    >
      <div className={`${styleTitle}`}>{title}</div>
      {Icon && <Icon className="w-6" />}
    </button>
  );
};

export default Button;
