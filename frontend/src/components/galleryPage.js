import "./../css/galleryPage.css";
import { useLocation } from "react-router-dom";
import { useEffect} from "react";


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
                <div  id="wedding">
                    <h1 className="galleryPage-wedding-h1">Wedding</h1>
                    <div className="container-fluid">
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <div className="d-flex flex-column">
                                <img src={require(`../images/wedding-3.jpg`)} className="img-fluid gallery-img"/>
                    
                                <img src={require(`../images/wedding-1.jpg`)} className="img-fluid"/>
                                </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/wedding-2.jpg`)} className="img-fluid gallery-img"/>
                    
                                <img src={require(`../images/wedding-4.jpg`)} className="img-fluid scale"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/wedding-6.jpg`)} className="img-fluid gallery-img scale mb-2"/>
                                
                                <img src={require(`../images/wedding-5.jpg`)}  className="img-fluid"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/wedding-7.jpg`)} className="img-fluid gallery-img m-1 p-1"/>
                                
                                <img src={require(`../images/wedding-8.jpg`)} className="img-fluid image m-1 p-1"/>
                            </div>
                        </div>
                    </div>
                </div>


                <hr></hr>


                <div  id="corporate">
                    <h1 className="galleryPage-wedding-h1">Corporate Events</h1>
                    <div className="container-fluid">
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <div className="d-flex flex-column">
                                <img src={require(`../images/corporate-5.jpg`)} className="img-flu gallery-imgid"/>
                    
                                <img src={require(`../images/corporate-1.jpg`)} className="img-fluid"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/corporate-2.jpg`)} className="img-flu gallery-imgid"/>
                    
                                <img src={require(`../images/corporate-6.jpg`)} className="img-fluid scale"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/corporate-7.jpg`)} className="img-flu gallery-imgid scale mb-2"/>
                                
                                <img src={require(`../images/corporate-3.jpg`)}  className="img-fluid"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/corporate-4.jpg`)} className="img-flu gallery-imgid m-1 p-1"/>
                                
                                <img src={require(`../images/corporate-8.jpg`)} className="img-fluid image m-1 p-1"/>
                            </div>
                        </div>
                    </div>
                </div>


                <hr></hr>


                <div  id="social">
                    <h1 className="galleryPage-wedding-h1">Social Events</h1>
                    <div className="container-fluid">
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <div className="d-flex flex-column">
                                <img src={require(`../images/social-4.jpg`)} className="img-fluid" gallery-img/>
                    
                                <img src={require(`../images/social-1.jpg`)} className="img-fluid"/>
                                </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/social-2.jpg`)} className="img-fluid" gallery-img/>
                    
                                <img src={require(`../images/social-5.jpg`)} className="img-fluid scale"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/social-6.jpg`)} className="img-fluid  gallery-imgscale mb-2"/>
                                <img src={require(`../images/social-3.jpg`)}  className="img-fluid"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={require(`../images/corporate-1.jpg`)} className="img-flu gallery-imgid m-1 p-1"/>
                                <img src={require(`../images/corporate-6.jpg`)} className="img-fluid image m-1 p-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        
        </>
    )
}

export default GalleryPage;