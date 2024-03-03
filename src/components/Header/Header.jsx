import React from 'react'
import "./Header.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { headerData } from "../../data"

const Header = () => {

    const pagination = {
        clickable: true,
    };
    return (
        <header>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    headerData.map((e, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="banner">
                                    <div className="left">
                                        <h1>
                                           {e.title.split("-")[0]} <span>{e.title.split("-")[1]}</span>
                                        </h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sapiente nisi saepe hic velit unde explicabo quasi esse dolore voluptas!</p>
                                        <button>Enquire Now</button>
                                    </div>
                                    <div className="right">
                                        <img src={e.image} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>


            {/* <div className="banner">
                <div className="left">
                    <h1>Grow your business with <span>Bharat Pe</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sapiente nisi saepe hic velit unde explicabo quasi esse dolore voluptas!</p>
                    <button>Enquire Now</button>
                </div>
                <div className="right">
                    <img src={h1} alt="" />
                </div>
            </div> */}
        </header>
    )
}

export default Header
