import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toaster from "./ui/Toaster";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
