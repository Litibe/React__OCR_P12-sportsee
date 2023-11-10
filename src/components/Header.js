import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header(props) {
    return (
        <header>
            <img className="logo" src={logo} alt={"Logo de SportSee"} />
            <nav className="nav">
                <Link to="/" className="nav__link">
                    {props.url === "home" ? (
                        <span className="active">Accueil</span>
                    ) : (
                        <span>Accueil</span>
                    )}
                </Link>
                <Link to="/profil" className="nav__link">
                    {props.url === "profil" ? (
                        <span className="active">Profil</span>
                    ) : (
                        <span>Profil</span>
                    )}
                </Link>
                <Link to="/reglages" className="nav__link">
                    {props.url === "reglages" ? (
                        <span className="active">Réglages</span>
                    ) : (
                        <span>Réglages</span>
                    )}
                </Link>
                <Link to="/communaute" className="nav__link">
                    {props.url === "communaute" ? (
                        <span className="active">Communauté</span>
                    ) : (
                        <span>Communauté</span>
                    )}
                </Link>
            </nav>
        </header>
    );
}
