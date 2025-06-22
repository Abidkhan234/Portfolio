import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  AOS.init();

  return (
    <div className="h-full w-full bg-[#EBE7E0] overflow-hidden">
      <>
        <Navbar />
      </>
      <main className="sm:px-5 px-3.5 my-7 mt-14 pt-3">
        <Outlet />
      </main>
      <footer
        className="border-t-2 border-t-[#E1DBD1] sm:px-5 px-3.5"
        data-aos-offset="50"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
