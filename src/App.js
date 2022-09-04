import logo from "./logo.svg";
import "./App.css";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Loginpage from "./Pages/Loginpage";
import ProfilePage from "./Pages/ProfilePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Loginpage />} />

        <Route path="/Profile" element={<ProfilePage />} />
      </Switch>
    </Router>
  );
}

export default App;
