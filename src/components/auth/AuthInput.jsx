const AuthInput = ({ type, placeholder, value, onChange, Icon }) => {
  return (
    <div className="relative border-2 border-gray-200 rounded-lg focus-within:border-[#004540]">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 focus:outline-none"
      />
      {Icon && (
        <p className="absolute right-2 top-3 bottom-3 cursor-pointer">{Icon}</p>
      )}
    </div>
  );
};

export default AuthInput;
