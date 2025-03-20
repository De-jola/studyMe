import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <h1>StudyMe landing page</h1>

      <Link to="/dashboard">
        <button>Go to dashboard</button>
      </Link>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </>
  );
};

export default Landing;
