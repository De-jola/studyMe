const AuthProviderButton = ({ onClick }) => {
  return (
    <button
      className="relative flex items-center place-self-center justify-center p-2 w-full cursor-pointer border-2 border-gray-200 rounded-lg"
      onClick={onClick}
    >
      <img
        src="/google-icon.png"
        alt="Google Logo"
        width={24}
        className="inline"
      />
      <p className="text-gray-500 text-sm ml-2">Google</p>
    </button>
  );
};

export default AuthProviderButton;
