import "./App.css";
import heroimage from "./assets/heroimg.jpg";
import {
  Navbar,
  HeroSection,
  Footer,
  ArticleSection,
} from "./components/WebSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection heroimage={heroimage} />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
