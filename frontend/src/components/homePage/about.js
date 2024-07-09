import "./../../css/about.css";
import { Link } from "react-router-dom";

function About(){
    return(
        <>
            <div className="about-container">
               <div className="col-6 about-txt">
                    <h1>About</h1>
                    <span>Celebrations is an innovative event design and management company catering to weddings and diverse events. With over a decade of excellence, we have become one of Jaipur's leading event management firms. Our team of skilled professionals is renowned for their creativity and innovation. Passionate about transforming spaces, we deliver uniquely tailored events, making us the top choice for Event Organisers and Event Management in the region.</span>
                    <div className="know-btn">
                        <Link to="/about-us"><button type="button" id="knowMoreBtn">Know More</button></Link>
                    </div>
               </div>

               <div className="col-6 about-img">
               <img src={require(`./../../images/about.jpg`)} alt="About"/>
               </div>
            </div>
        
        
        </>
    )
}

export default About;