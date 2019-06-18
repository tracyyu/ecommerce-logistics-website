import React, { Component } from 'react';
import Slider from "react-slick";
import ReactDOM from "react-dom";

class ProductCarousel extends Component{
    render(){  
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
          return (
            <Slider {...settings}>
                {
                    this.props.products.map((value,i) => {
                        var imgObj = Object.values(value)[0];
                        return(
                            <div className="new-product-card" key={i}>
                                <p>{Object.keys(value)[0]}</p>
                                <img src={Object.values(imgObj)[0]} />
                            </div>
                        )
                    })
                }
            </Slider>
          );
    }
}

export default ProductCarousel;

/*
<Slider {...settings}>
    <div className="new-product-card">
    <p>SUNNY DAYS</p>
    <img src={product3} />
    </div>
    <div className="new-product-card">
    <p>SO PEACHY</p>
    <img src={product4} />
    </div>
    <div className="new-product-card">
    <p>GARDEN VARIETY</p>
    <img src={product5} />
    </div>
    <div className="new-product-card">
    <p>THANKSGIVING</p>
    <img src={product6} />
    </div>
    <div className="new-product-card">
    <p>LONG TIME NO SEE</p>
    <img src={product7} />
    </div>
</Slider>
*/