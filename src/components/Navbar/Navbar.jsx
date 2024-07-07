import { Link } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
