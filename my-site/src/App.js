import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import User from "./components/User";
import {GithubContext} from "./contexts/GithubContext";

function App() {
  return (
    <GithubContext.Consumer>
      {() => (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/user" element={<User />} />

            <Route path="/about/" element={<About />} />
          </Routes>
        </Router>
      )}
    </GithubContext.Consumer>
  );
}

export default App;
