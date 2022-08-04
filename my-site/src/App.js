import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from './components/Navbar'
import User from './components/User'
import  GithubProvider  from "./components/GithubContext";




function App() {
  return (
    <GithubProvider>
    <Router>
      <Navbar/>
    <Routes>
     <Route exact path='/user' element={<User/>} /> 

     <Route  path='/about/' element={<About/>} /> 

     </Routes>
    </Router>
    </GithubProvider>
  )
}

export default App;
