import Skills from "./components/About/about";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import "./styles.css";

import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/Contact/contact";

import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
