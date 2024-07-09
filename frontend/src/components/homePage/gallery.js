import { Link } from "react-router-dom";
import "./../../css/gallery.css";

function Gallery(){
    return(
        <>
          <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                            <Link to="/gallery#wedding">
                            <img src={require(`./../../images/wedding-3.jpg`)} alt="wedding" className="gallery-container-img img-1"/>
                            </Link>
                            <h4>Wedding</h4>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                            <Link to="/gallery#corporate">
                                <img src={require(`./../../images/wedding-3.jpg`)} alt="wedding" className="gallery-container-img img-2"/>
                            </Link>
                            <h4>Corporate Events</h4>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                            <Link to="/gallery#social">
                                <img src={require(`./../../images/wedding-3.jpg`)} alt="wedding" className="gallery-container-img img-3"/>
                            </Link>
                            <h4>Social Events</h4>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Gallery;