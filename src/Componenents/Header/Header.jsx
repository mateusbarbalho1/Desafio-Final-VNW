import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderStyle, StyleLink, Ul } from "./style";

export default function Header() {
  return (
    <header className="header">
      <img src="" alt="logomarca" />
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/novidades">Novidades</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </nav>
    </header>
  );
}
