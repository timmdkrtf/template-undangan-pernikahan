import ImgBg from "../assets/image/bg/1.jpg"

import { BsChevronDoubleDown } from "react-icons/bs";

function Home(){
    return(
        <div className="home" id="home">
            <div className="img-bg">
                <img src={ImgBg} alt="" />
            </div>
            <div className="container">
                <div className="text">
                    <div className="text-top">
                        <p>We Are Getting Married</p>
                        <h1>Tara & Sumi</h1>
                    </div>
                    <div className="text-bottom">
                        <h4>December 30th 2025</h4>
                        <a href="#quote">
                            <BsChevronDoubleDown />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;