import '../css/galleryPage.css';
function GalleryGrid({heading,img1,img2,img3,img4,img5,img6,img7,img8}){
    return(
        <>
                <div  id={heading}>
                    <h1 className="galleryPage-wedding-h1">{heading}</h1>
                    <div className="container-fluid">
                        <div className="d-flex flex-row flex-wrap justify-content-center" style={{padding:"2vw 0"}}>
                            <div className="d-flex flex-column">
                                <img src={img1} className="img-fluid gallery-img"/>
                    
                                <img src={img2} className="img-fluid"/>
                                </div>
                
                            <div className="d-flex flex-column">
                                <img src={img3} className="img-fluid gallery-img"/>
                    
                                <img src={img4} className="img-fluid scale"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={img5} className="img-fluid gallery-img scale mb-2"/>
                                
                                <img src={img6}  className="img-fluid"/>
                            </div>
                
                            <div className="d-flex flex-column">
                                <img src={img7} className="img-fluid gallery-img m-1 p-1"/>
                                
                                <img src={img8} className="img-fluid image m-1 p-1"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
        
        </>
    )
}

export default GalleryGrid;