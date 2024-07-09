import ServicesPage from "../servicesPage";
import img1 from "../../images/social-4.jpg";
import img2 from "../../images/social-5.jpg";
import img3 from "../../images/social-6.jpg";



function Social(){
    let text="At Celebrations, we skillfully organize a wide range of social events, such as saree and dhoti ceremonies, cradle ceremonies, birthdays, anniversaries, housewarming parties, and other special occasions. Our dedicated team ensures each celebration is uniquely personalized and unforgettable, making every moment memorable."
    return(
        <>
        <ServicesPage img1={img1} img2={img2} img3={img3} img4={img3} img5={img1} txt={text}/>
        </>
    )
}
export default Social;