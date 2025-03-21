import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const handleDisplayPassword = () => {
    setDisplayPassword((prev) => {
      const newValue = !prev;

      return newValue;
    });
  };
  return (
    <div className="text-left flex flex-col gap-3">
      <div className=" border-2 border-gray-200  rounded-lg focus-within:border-[#004540]">
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 focus:outline-none"
        />
      </div>

      <div className="relative border-2 border-gray-200 rounded-lg focus-within:border-[#004540]">
        <input
          type={displayPassword ? "text" : "password"}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 focus:outline-none "
        />
        <p className="absolute right-2 top-3 bottom-3 cursor-pointer">
          {displayPassword ? (
            <BsEye onClick={handleDisplayPassword} />
          ) : (
            <BsEyeSlash onClick={handleDisplayPassword} />
          )}
        </p>
      </div>
    </div>
  );
};
