import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import VideoPlayer from './components/home/VideoPlayer'
// import Search from "./components/home/Search";
//search what you can do with this
// import YouTube from 'react-youtube';

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
