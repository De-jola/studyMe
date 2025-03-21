import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
import Landing from "./components/home/Landing";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/auth/login/Login";
import SignUp from "./components/auth/signIn/SignUp";

function App() {
  const checkUser = useSelector((state) => state.userAuth.value.userExists);
  const display = useSelector((state) => state.userAuth.value.display);

  return (
    <>
      <Router>
        <div className="content p-12">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/dashboard"
              element={checkUser ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={
                checkUser ? (
                  <Navigate to="/dashboard" />
                ) : display ? (
                  <SignUp />
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
