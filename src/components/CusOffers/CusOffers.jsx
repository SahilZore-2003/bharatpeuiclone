import React from 'react'
import "./CusOffers.scss"
import c1 from "../../assets/co1.png"
import c2 from "../../assets/co2.png"
import c3 from "../../assets/co3.png"
const CusOffers = () => {
    return (
        <div className='customer-offers'>
            <h1 className="center">
                Customer Offerings
            </h1>

            <div className="content">
                <div className="left">
                    <img src={c1} alt="" />
                </div>
                <div className="right">
                    <div className='top'>
                        <img src={c3} alt="" />
                        <h3>Grow your industry-leading return.</h3>
                    </div>
                    <div className="list">
                        <div>
                            <img src={c2} alt="" />
                            <p>watch your earning grow daily.</p>
                        </div>
                        <div>
                            <img src={c2} alt="" />
                            <p>watch your earning grow daily.</p>
                        </div>
                        <div>
                            <img src={c2} alt="" />
                            <p>watch your earning grow daily.</p>
                        </div>
                        <div>
                            <img src={c2} alt="" />
                            <p>watch your earning grow daily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CusOffers
