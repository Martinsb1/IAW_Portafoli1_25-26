import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Proyectos from "./components/Proyectos.jsx"
import AboutMe from "./components/AboutMe.jsx"; 
import Contact from "./components/Contact.jsx";
import Newsletter from "./components/NewsLetter.jsx";
import "./App.css";


export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

