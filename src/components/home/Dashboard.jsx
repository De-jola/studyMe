import { Link } from "react-router-dom";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserExists } from "../../features/authSlice";

const Dashboard = () => {
  const logOut = async () => {
    await signOut(auth);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        dispatch(checkUserExists(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <h1>studyMe Dashboard</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <button onClick={logOut}>Log Out</button>
    </>
  );
};
export default Dashboard;
