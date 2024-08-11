import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/home/About.jsx";
import Schools from "./pages/home/Schools.jsx";
import Scholars from "./pages/home/Scholars.jsx";
import Events from "./pages/home/Events.jsx";
import Programs from "./pages/home/Programs.jsx";
import News from "./pages/home/News.jsx";
import Supports from "./pages/home/Supports.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shools" element={<Schools />} />
        <Route path="/sholars" element={<Scholars />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shools" element={<News />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/supports" element={<Supports />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
