const AuthButton = ({ text, onClick, isPrimary = true }) => {
  return (
    <button
      className={`p-2 rounded-lg cursor-pointer w-full ${
        isPrimary
          ? "bg-[#004540] text-white hover:bg-gray-300 hover:text-[#004540] active:bg-[#004540] active:text-white"
          : "border-2 border-gray-200 text-gray-500 hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
