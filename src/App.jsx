import "./App.css";


// import { HeroSection, ArticleSection } from "./components/WebSection";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./page/Home";
import LandingPage from "./page/LandingPage";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import NotFound from "./page/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/landingpage/:landingId/:total"
            element={<LandingPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
