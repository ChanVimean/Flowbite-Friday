import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        <Home />
        {/* <Test /> */}
        {/* <Test2 /> */}
      </main>
 
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
