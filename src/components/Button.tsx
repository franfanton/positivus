interface ButtonProps {
  title: string;
  icon?: React.ElementType;
  handleButton: () => void;
}

const Button = ({ title, icon: Icon, handleButton }: ButtonProps) => {
  return (
    <button
      className="flex bg-secondaryColor rounded-xl py-5 px-9 border-2 border-black"
      onClick={handleButton}
    >
      <div className="text-xl text-black">{title}</div>
      {Icon && <Icon className="w-6" />}
    </button>
  );
};

export default Button;
