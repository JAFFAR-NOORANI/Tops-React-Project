import "./App.css";
import Headers from "./components/header.jsx";
import { Footer } from "./components/Footer.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
