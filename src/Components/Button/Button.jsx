
const Button = ({ text, icon, isTransparent }) => {
  return (
    <button
      className={`flex gap-1.5 items-center py-1.5 px-3 md:text-xl text-lg ${
        isTransparent
          ? "bg-transparent text-[#1A1A1A]"
          : "bg-[#5700FF] text-white hover:bg-[#5500ffc0] transition-colors"
      }  rounded-lg cursor-pointer`}
    >
      <span className="font-medium">{text}</span> <span>{icon}</span>
    </button>
  );
};

export default Button;
