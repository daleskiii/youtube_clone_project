import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import VideoPlayer from './components/home/VideoPlayer'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
