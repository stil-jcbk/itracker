import { HiOutlineHome ,HiOutlineShoppingBag } from "react-icons/hi2";
import "./navbar.css";
import Navbutton from "./navbutton/navbutton";
import { useEffect} from "react";

function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      const navbar = document.getElementById("navbar")!;

      if (scrollTop > 0) {
        navbar.classList.add("moved")
      } else {
        navbar.classList.remove("moved")
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <div id="navbar">
      <div className="links">
      <Navbutton to="/">
          <HiOutlineHome />
        </Navbutton>
        <Navbutton to="/products">
          <HiOutlineShoppingBag />
        </Navbutton>
      </div>
    </div>
  );
}

export default Navbar;
