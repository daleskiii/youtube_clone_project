import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Navbar";
import About from "./components/about/About"
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
