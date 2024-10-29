import "./App.css";

// import { HeroSection, ArticleSection } from "./components/WebSection";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./page/Home";
import LandingPage from "./page/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
