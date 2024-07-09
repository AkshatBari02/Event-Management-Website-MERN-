import "./../css/galleryPage.css";
import { useLocation } from "react-router-dom";
import { useEffect} from "react";
import wedding1 from '../images/wedding-3.jpg';
import wedding2 from '../images/wedding-1.jpg';
import wedding3 from '../images/wedding-2.jpg';
import wedding4 from '../images/wedding-4.jpg';
import wedding5 from '../images/wedding-6.jpg';
import wedding6 from '../images/wedding-5.jpg';
import wedding7 from '../images/wedding-7.jpg';
import wedding8 from '../images/wedding-8.jpg';
import corporate1 from '../images/corporate-5.jpg';
import corporate2 from '../images/corporate-1.jpg';
import corporate3 from '../images/corporate-2.jpg';
import corporate4 from '../images/corporate-6.jpg';
import corporate5 from '../images/corporate-7.jpg';
import corporate6 from '../images/corporate-3.jpg';
import corporate7 from '../images/corporate-4.jpg';
import corporate8 from '../images/corporate-8.jpg';
import social1 from '../images/social-4.jpg';
import social2 from '../images/social-1.jpg';
import social3 from '../images/social-2.jpg';
import social4 from '../images/social-5.jpg';
import social5 from '../images/social-6.jpg';
import social6 from '../images/social-3.jpg';
import GalleryGrid from "./galleryGrid";


function GalleryPage(){

    const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return(
        <>
            <div className="galleryPage-header-bg">
                <div className="col-12">
                    <h1 className='galleryPage-h1'>About Us</h1>
                </div>
            </div>


            <div id="galleryGrids">
                <GalleryGrid heading={"Wedding"} img1={wedding1} img2={wedding2} img3={wedding3} img4={wedding4} img5={wedding5} img6={wedding6} img7={wedding7} img8={wedding8}/>

                <GalleryGrid heading={"Corporate"} img1={corporate1} img2={corporate2} img3={corporate3} img4={corporate4} img5={corporate5} img6={corporate6} img7={corporate7} img8={corporate8}/>

                <GalleryGrid heading={"Social"} img1={social1} img2={social2} img3={social3} img4={social4} img5={corporate1} img6={social6} img7={corporate2} img8={corporate4}/>                
            </div>


        
        </>
    )
}

export default GalleryPage;