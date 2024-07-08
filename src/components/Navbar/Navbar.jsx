import { Link } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const param = window.location.pathname;
  const [hover, setHover] = useState(param);

  const handleHover = (param) => setHover(param);

  return (
    <nav>
      <ul>
        <li>
          <Link
            to={"/"}
            style={{ color: hover == "/" ? "blue" : "" }}
            onClick={() => handleHover("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ color: hover == "/about" ? "blue" : "" }}
            onClick={() => handleHover("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/blog"}
            style={{ color: hover == "/blog" ? "blue" : "" }}
            onClick={() => handleHover("/blog")}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/register"}
            style={{ color: hover == "/register" ? "blue" : "" }}
            onClick={() => handleHover("/register")}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
