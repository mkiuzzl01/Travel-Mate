import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const Root = () => {
  return (
    <div>
      <header className="sticky top-0 z-10">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-320px)] mx-2">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
