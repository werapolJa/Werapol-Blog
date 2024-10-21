import "./App.css";
import heroimage from "./assets/heroimg.jpg";
import { Navbar, HeroSection } from "./components/WebSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection heroimage={heroimage} />
    </>
  );
}

export default App;
