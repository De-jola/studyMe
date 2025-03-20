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

function App() {
  const checkUser = useSelector((state) => state.userAuth.value.userExists);

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
              element={checkUser ? <Navigate to="/dashboard" /> : <Login />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
