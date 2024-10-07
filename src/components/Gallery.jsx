import Gallery1 from "../assets/image/gallery/gallery1.jpg"
import Gallery2 from "../assets/image/gallery/gallery2.jpg"
import Gallery3 from "../assets/image/gallery/gallery3.jpg"
import Gallery4 from "../assets/image/gallery/gallery4.jpg"
import Gallery5 from "../assets/image/gallery/gallery5.jpg"
import Gallery6 from "../assets/image/gallery/gallery6.jpg"

function Gallery(){
    return(
        <div className="gallery" id="gallery">
            <div className="container">
                <div className="content-gallery">
                    <img src={Gallery1} alt="" />
                    <img src={Gallery2} alt="" />
                    <img src={Gallery3} alt="" />
                    <img src={Gallery4} alt="" />
                    <img src={Gallery5} alt="" />
                    <img src={Gallery6} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;