import About from "./homePage/about";
import Gallery from "./homePage/gallery";
import HomeCarousel from "./homePage/homeCarousel";
import Services from "./homePage/services";

function Home(){
    return(
        <>
        <HomeCarousel/>
        <About/>
        <Services/>
        <Gallery/>
            
        </>
    )
}
export default Home;