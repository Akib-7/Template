import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import Loading from "./Components/Loading";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
function App() {
  // const lenisRef = useRef();
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loading loadMethod={handleLoading} />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}
export default App;
