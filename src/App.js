import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "../src/styleSheets/home.css"
import "../src/styleSheets/header-footer.css"
import "../src/styles/main.scss"
import Test from "./pages/Test";
import GeoLocation from "./components/GeoLocation";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/projects"} exact element={<Projects/>}/>
                <Route path={"/courses"} exact element={<Courses/>}/>
                <Route path={"/contact"} exact element={<Contact/>}/>
                <Route path={"/test"} exact element={<Test/>}/>
                <Route path={"/test"} exact element={<Test />}/>
                <Route path={"/geoLocation"} exact element={<GeoLocation />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );



}

export default App;
