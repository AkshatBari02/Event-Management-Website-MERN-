import ServicesPage from "./servicesPage";
import img1 from "../images/wedding-3.jpg";
import img2 from "../images/wedding-4.jpg";
import img3 from "../images/wedding-6.jpg";
import img4 from "../images/wedding-8.jpg";



function Wedding(){
    let text="At Celebrations, we believe every wedding is a unique love story. Our dedicated team transforms your dreams into reality, ensuring every detail is perfect. From intimate gatherings to grand celebrations, we offer comprehensive wedding planning services tailored to your vision. Let us make your Engagement, Haldi, Mehandi, Sangeeth, Wedding, and Reception unforgettable experiences filled with cherished memories."
    return(
        <>
        <ServicesPage img1={img1} img2={img2} img3={img3} img4={img4} img5={img1} txt={text}/>
        </>
    )
}
export default Wedding;