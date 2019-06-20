import React, {Component} from "react";
//import {LinkContainer} from "react-router-bootstrap";
import {Carousel} from "react-bootstrap"
import NavBar from "./NavBar";
import "../styles/Slider.css"

class Slider extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.abeautifulmess.com/uploads/typekit/.a/6a00d8358081ff69e2016301db4217970d-800wi"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src="https://fortunedotcom.files.wordpress.com/2019/06/wedding-dress-shop-e1560979718914.jpg"
                                alt="First slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.glamour.com/photos/5ca27b4f4cb7bf2e49f7c0d2/master/w_1600%2Cc_limit/GettyImages-737175827.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }
}

export default Slider;