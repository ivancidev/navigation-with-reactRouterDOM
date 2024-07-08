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
            style={{ color: hover == "/" ? "#00a8ff" : "" }}
            onClick={() => handleHover("/")}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ color: hover == "/about" ? "#00a8ff" : "" }}
            onClick={() => handleHover("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/blog"}
            style={{ color: hover == "/blog" ? "#00a8ff" : "" }}
            onClick={() => handleHover("/blog")}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/contacts"}
            style={{ color: hover == "/register" ? "#00a8ff" : "" }}
            onClick={() => handleHover("/register")}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
