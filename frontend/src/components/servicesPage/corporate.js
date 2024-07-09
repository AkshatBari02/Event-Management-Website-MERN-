import ServicesPage from "../servicesPage";
import img1 from "../../images/corporate-5.jpg";
import img2 from "../../images/corporate-6.jpg";
import img3 from "../../images/corporate-7.jpg";
import img4 from "../../images/corporate-8.jpg";



function Corporate(){
    let text="At Celebrations, we specialize in creating impactful corporate events that enhance your brand and captivate your audience. Whether it's the grandeur of brand launches, the excitement of store openings, or the energy of product unveilings, we ensure each event aligns with your corporate goals. We also excel in organizing dealer meets, managing PR activities, and handling celebrity engagements to make your events truly memorable."
    return(
        <>
        <ServicesPage img1={img1} img2={img2} img3={img3} img4={img4} img5={img1} txt={text}/>
        </>
    )
}
export default Corporate;