import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import HomeFooter from './components/homeFooter';
import Home from './components/home';
import AboutPage from './components/aboutPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GalleryPage from './components/galleryPage';
import Wedding from './components/wedding';
import Corporate from './components/corporate';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us" element={<AboutPage/>}></Route>
          <Route path="/gallery" element={<GalleryPage/>}></Route>
          <Route path="/wedding" element={<Wedding/>}></Route>
          <Route path="/corporate-events" element={<Corporate/>}></Route>
          <Route path="/social-events" element={<Social/>}></Route>
          <Route path="/contact" element={<Home/>}></Route>
        </Routes>
        <HomeFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
