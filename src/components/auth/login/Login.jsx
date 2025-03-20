import { auth, googleProvider } from "../../../firebase/firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkUserExists } from "../../../features/authSlice";
import { BsEyeSlash, BsPerson } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const [displayPassword, setDisplayPassword] = useState(false);
  const dispatch = useDispatch();

  const handleDisplayPassword = () => {
    setDisplayPassword((prev) => {
      const newValue = !prev;

      return newValue;
    });
  };

  const login = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    setIsLoggedIn(true);
  };
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(checkUserExists(currentUser?.email));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="text-center flex flex-col gap-3">
      <div className="w-16 h-16 m-auto rounded-full bg-linear-to-b from-[#f2f2f2] to-[#ffffff] p-2 flex justify-center">
        <div className="place-self-center bg-white rounded-full w-10 h-10 flex justify-center shadow-md border-2 border-gray-200">
          <BsPerson className="place-self-center" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Login to your studyMe account</h1>
      <p className="text-sm text-gray-500 mb-4">Enter your details to log in</p>
      <div className=" rounded-lg border-2 border-gray-200 p-2">
        <button
          className="relative flex items-center place-self-center p-1"
          onClick={loginWithGoogle}
        >
          <div>
            <img
              src="/google-icon.png"
              alt="Google Logo"
              width={24}
              className="inline"
            />
          </div>
          <p>Google</p>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="border-b border-1 w-1/2 border-gray-200"></p>
        <p className="text-[10px] font-bold text-gray-500 w-1/6">OR</p>
        <p className="border-b border-1 w-1/2 border-gray-200"></p>
      </div>
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
            <BsEyeSlash onClick={handleDisplayPassword} />
          </p>
        </div>

        <button
          className="bg-[#004540] text-white p-2 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-[#004540] active:bg-[#004540] active:text-white"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
