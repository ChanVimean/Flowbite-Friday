import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PropDrilling1 from "./pages/PropDrilling1";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        {/* <Home /> */}
        {/* <Test /> */}
        {/* <Test2 /> */}
        {/* <PropDrilling1 name={"John"} /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
