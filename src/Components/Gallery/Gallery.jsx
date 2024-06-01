import "./Gallery.css";

import galleryImage1 from "../../Images/gallery1.png";
import galleryImage2 from "../../Images/gallery2.png";
import galleryImage3 from "../../Images/gallery3.png";
import galleryImage4 from "../../Images/gallery4.png";
import galleryImage5 from "../../Images/gallery5.png";
import galleryImage6 from "../../Images/gallery6.png";
import galleryImage7 from "../../Images/gallery7.png";

const Gallery = () => {
    return (
        <div>
            {" "}
            <h2>The Gallery</h2>
            <div className="gallery-images">
                <img src={galleryImage1} alt="Gallery 1" />
                <img src={galleryImage2} alt="Gallery 2" />
                <img src={galleryImage3} alt="Gallery 3" />
                <img src={galleryImage4} alt="Gallery 4" />
                <img src={galleryImage5} alt="Gallery 5" />
                <img src={galleryImage6} alt="Gallery 6" />
                <img src={galleryImage7} alt="Gallery 7" />
            </div>
        </div>
    );
};

export default Gallery;
