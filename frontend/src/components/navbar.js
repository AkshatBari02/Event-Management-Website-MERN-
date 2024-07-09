import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
        const location = useLocation();

        const isActive = (path) => {
            return location.pathname === path ? "active" : "";
        };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav-cont">
          <Link className="navbar-brand" to="/">
            Celebrations
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-tab-cont"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${isActive("/")}`} id="home">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/about-us")}`} id="about">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className={`nav-item dropdown ${isActive("/services")}`} id="services">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/wedding">
                      Wedding
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/corporate-events">
                      Corporate Events
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/social-events">
                      Social Events
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${isActive("/gallery")}`} id="gallery">
                <Link className="nav-link" aria-current="page" to="gallery">
                  Gallery
                </Link>
              </li>
              <li className={`nav-item ${isActive("/contact")}`} id="contact">
                <Link className="nav-link" aria-current="page" to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
