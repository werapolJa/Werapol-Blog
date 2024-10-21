import "./App.css";
import heroimage from "./assets/heroimg.jpg";
import { Navbar, HeroSection, Footer } from "./components/WebSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection heroimage={heroimage} />
      <Footer />
    </>
  );
}

export default App;
