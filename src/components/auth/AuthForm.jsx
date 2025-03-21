import { auth, googleProvider } from "../../firebase/firebaseconfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserExists, display } from "../../features/authSlice";

import { BsEyeSlash, BsPerson } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa6";
import AuthButton from "./AuthButton";
import AuthProviderButton from "./AuthProviderButton";
import AuthInput from "./AuthInput";

const AuthForm = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const render = useSelector((state) => state.userAuth.value.display);

  const handleDisplayPassword = () => setDisplayPassword((prev) => !prev);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      console.log("Success");
    } catch (error) {
      console.error("Authentication failed:", error.message);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use");
      } else if (error.code === "auth/invalid-credential") {
        setErrorMessage("Invalid Credentials");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid Email");
      }
    }
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
      <div>
        <h1 className="text-2xl font-semibold">
          {" "}
          {isSignUp
            ? "Create a StudyMe Account"
            : "Login to your StudyMe Account"}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          {isSignUp
            ? "Sign up with your details"
            : "Enter your details to log in"}
        </p>
      </div>
      <AuthProviderButton onClick={loginWithGoogle} />
      <div className="flex items-center justify-between">
        <p className="border-b border-1 w-1/2 border-gray-200"></p>
        <p className="text-[10px] font-bold text-gray-500 w-1/6">OR</p>
        <p className="border-b border-1 w-1/2 border-gray-200"></p>
      </div>
      <div className="text-left flex flex-col gap-5">
        <div className=" flex flex-col gap-3">
          <p className="text-[10px] text-red-500 font-bold">{errorMessage}</p>
          {render && (
            <>
              <AuthInput
                type="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}
          <AuthInput
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthInput
            type={displayPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            Icon={
              displayPassword ? (
                <BsEye onClick={handleDisplayPassword} />
              ) : (
                <BsEyeSlash onClick={handleDisplayPassword} />
              )
            }
          />
        </div>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}

          <span
            onClick={() => {
              dispatch(display());
            }}
            className="ml-3 text-[#004540] underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
      <AuthButton text={isSignUp ? "Sign Up" : "Login"} onClick={handleAuth} />
    </div>
  );
};

export default AuthForm;
