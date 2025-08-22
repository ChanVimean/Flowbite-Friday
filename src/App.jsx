import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PropDrilling1 from "./pages/PropDrilling1";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import About from "./pages/About";
import Anchor from "./pages/Anchor";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anchor" element={<Anchor />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
