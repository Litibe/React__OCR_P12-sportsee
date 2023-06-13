import { Link } from "react-router-dom";
import yogaSvg from "../assets/svg/yoga_svg.png";
import natationSvg from "../assets/svg/natation_svg.png";
import veloSvg from "../assets/svg/velo_svg.png";
import haltereSvg from "../assets/svg/haltere_svg.png";

function SlideBarMenu() {
    return (
        <div className="slideBar">
            <Link to="/" className="slideBar__link">
                <img src={yogaSvg} alt="Icone Yoga" />
            </Link>
            <Link to="/" className="slideBar__link">
                <img src={natationSvg} alt="Icone Natation" />
            </Link>
            <Link to="/" className="slideBar__link">
                <img src={veloSvg} alt="Icone Vélo" />
            </Link>
            <Link to="/" className="slideBar__link">
                <img src={haltereSvg} alt="Icone Haltère" />
            </Link>
            <div className="slideBar__copyright">Copyright, SportSee 2023</div>
        </div>
    );
}

export default SlideBarMenu;
