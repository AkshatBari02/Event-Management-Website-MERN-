import { Link } from "react-router-dom";
import "../css/homeFooter.css";


function HomeFooter(){
    return(
        <>
        <footer>
            <section className="footer-section">
              <div className="container text-center text-md-start mt-0">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 col-sm-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3"></i>Celebrations
                    </h6>
                    <p>
                    Our team is dedicated to providing exceptional events, ensuring every detail is executed with precision and excellence. We consistently strive for perfection, making each event a memorable and flawless experience.
                    </p>
                      <div>
                        <Link to="" className="me-4 text-reset">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                          <i className="fab fa-google"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 col-sm-2 mx-auto mb-4 hide">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful Links
                    </h6>
                    <p>
                      <Link to="/about-us" className="text-reset">About</Link>
                    </p>
                    <p>
                      <Link to="/gallery" className="text-reset">Gallery</Link>
                    </p>
                    <p>
                      <Link to="/contact" className="text-reset">Contact Us</Link>
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 col-sm-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Services
                    </h6>
                    <p>
                      <Link to="wedding" className="text-reset">Weddings</Link>
                    </p>
                    <p>
                      <Link to="social-events" className="text-reset">Social Events</Link>
                    </p>
                    <p>
                      <Link to="corporate-events" className="text-reset">Corporate Events</Link>
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 col-sm-4 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3"></i>123 Main Street Anytown,Jaipur,302001
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                      celebrations@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i>+91-9988776655</p>
                    <p><i className="fas fa-print me-3"></i>0141-0123456</p>
                  </div>
                </div>
              </div>
            </section>
            <hr></hr>
            <div className="text-center p-4">
              © 2024 Copyright:
              <Link className="text-reset fw-bold" to="#">Celebrations 2024. All rights reserved.</Link>
            </div>
      </footer>
        </>
    );
}

export default HomeFooter;