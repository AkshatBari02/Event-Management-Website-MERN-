import '../css/aboutPage.css';

function AboutPage(){
    return(
        <>
            <div className="aboutPage-header-bg">
                <div className="col-12">
                    <h1 className='aboutPage-h1'>About Us</h1>
                </div>
            </div>

            <div className="aboutPage-container-1">
               <div className="col-6 aboutPage-txt">
                    <h1>About</h1>
                    <span>Celebrations is an innovative event design and management company catering to weddings and diverse events. With over a decade of excellence, we have become one of Jaipur's leading event management firms. Our team of skilled professionals is renowned for their creativity and innovation. Passionate about transforming spaces, we deliver uniquely tailored events, making us the top choice for Event Organisers and Event Management in the region.</span>
               </div>

               <div className="col-6 aboutPage-img-1">
               <img src={require(`../images/about.jpg`)} alt="About"/>
               </div>
            </div>

            <div className="aboutPage-container-2">
               <div className="col-6 aboutPage-txt">
                    <h1>Why Choose Us ?</h1>
                    <li><b>Creativity And Innovation: </b><span>Our team is fueled by creativity, constantly introducing innovative concepts to elevate each event we oversee.</span></li>
                    <li><b>Expertise: </b><span>With over a decade in the industry, we possess the proficiency to manage events of varying scales and intricacies.</span></li>
                    <li><b> Committed Professionals: </b><span>Our team of passionate individuals is devoted to achieving excellence, guaranteeing the success of your event.</span></li>
                    <li><b>Space Transformation: </b><span>We specialize in revitalizing spaces, crafting captivating event settings that leave a lasting impact.</span></li>

               </div>

               <div className="col-6 aboutPage-img-2">
               <img src={require(`../images/gallery-1.jpg`)} alt="About"/>
               </div>
            </div>


            <div className="aboutPage-container-3">
               <div className="col-md-6 col-lg-6 col-sm-12 aboutPage-txt">
                    <h1>Innovation Works</h1>
                    <span>We specialize in crafting impressive settings such as a replica of the Eiffel Tower, elaborate Christmas tree displays, buildings adorned in flag-themed lighting, and hosting distinctive sleep concerts. Celebrations consistently innovates to offer unforgettable and imaginative experiences, constantly pushing creative boundaries.</span>

               </div>

               <div className="col-md-6 col-lg-6 col-sm-12 aboutPage-img-3">
                    <div className='row'>
                        <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                            <img src={require(`../images/gallery-2.jpg`)} alt="About"/>
                        </div>
                        <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                        <img src={require(`../images/gallery-3.jpg`)} alt="About"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                        <img src={require(`../images/gallery-4.jpg`)} alt="About"/>
                        </div>
                        <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                        <img src={require(`../images/gallery-5.jpg`)} alt="About"/>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default AboutPage;