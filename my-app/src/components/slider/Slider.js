import React from 'react';
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button} from "react-bootstrap";
import logo1 from "./b10d8aa265c089eb54d1e1666fef2c17 1.png"
import {Link} from "react-router-dom";

export default function SimpleSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoPlay:true,
        autoplaySpeed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "SlickMain",
        dotsClass: "button__bar",
    };

    return (
        <div className={"slider-form"}>
            <Slider {...settings}>
                <div className={"item item-1"}>
                    <div className="item_1-info">
                        <img src={logo1}/>
                        <p>Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                        <h4>4999 Р</h4>
                        <div className="item_1-info-btn">
                            <Button className={"cart-btn"}>В корзину</Button>
                            <Link to={"/10"}><Button className={"more-btn"}>Подробнее</Button></Link>
                        </div>
                    </div>
                </div>
                <div className={"item item-1"}>
                    <div className="item_1-info">
                        <img src={logo1}/>
                        <p>Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                        <h4>4999 Р</h4>
                        <div className="item_1-info-btn">
                            <Button className={"cart-btn"}>В корзину</Button>
                            <Link to={"/10"}><Button className={"more-btn"}>Подробнее</Button></Link>
                        </div>
                    </div>
                </div>
                <div className={"item item-1"}>
                    <div className="item_1-info">
                        <img src={logo1}/>
                        <p>Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
                        <h4>4999 Р</h4>
                        <div className="item_1-info-btn">
                            <Button className={"cart-btn"}>В корзину</Button>
                            <Link to={"/10"}><Button className={"more-btn"}>Подробнее</Button></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}