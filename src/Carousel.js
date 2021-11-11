import { useState } from 'react';

let count = 0;

function Carousel(props) {

    let arrImgs = props.imgs;

    const [image, setImage] = useState(arrImgs[0]);

    function handleNext() {
        if(count < arrImgs.length - 1) {
            count++;
            setImage(arrImgs[count]);
        } else {
            count = 0;
            setImage(arrImgs[count]);
        }
    }
  
    function handlePrevious() {
        if(count > 0) {
            count--;
            setImage(arrImgs[count]);
        } else {
            count = 3;
            setImage(arrImgs[count]);
        }
    }
    
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade w-25" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="..."/>
                </div>
            <button onClick={handlePrevious} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={handleNext} className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Carousel;