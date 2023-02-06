import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stacks from "./components/Stacks";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { HashRouter } from "react-router-dom";
import CP from "./components/CP";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Banner />
        <Stacks />
        <Experience />
        <Projects />
        <CP />
        <Footer />
      </div>
    </HashRouter>
  );
}
