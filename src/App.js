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
import EventPage from "./COMPONENTS/eventpage/EventPage";
import Fotter from "./COMPONENTS/fotter/Fotter";
import Homewindow from "./COMPONENTS/Windows/Homewindow";
import Upcevent from "./COMPONENTS/Windows/Upcevent";
import Announcement from "./COMPONENTS/Windows/Announcement";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route
          path="/"
          element={
            <>
            <Navbar/>
            <Homewindow/>
            <Upcevent/>
            <Announcement/>
            </>
          }
        />
         {/* <Route path="/event" element={<EventPage/>} /> */}
        {/* <Route path="/login" element={<Loginpage />} /> */}

        {/* <Route path="/Profile" element={<ProfilePage />} /> */}
      </Switch>
      <Fotter/>
    </Router>
  );
}

export default App;
