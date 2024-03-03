import React, { useState } from 'react'
import "./Offer.scss"
import o1 from "../../assets/o1.png"
import { FaAngleRight } from "react-icons/fa";
import { offers } from "../../data"
const Offer = () => {
    const [activeTab, setActiveTab] = useState(0);

    const { image, title, desc } = offers[activeTab]

    return (
        <div className='offer'>
            <h1>Merchant Offerings </h1>

            <div className="tabs">
                <div onClick={() => setActiveTab(0)} className={activeTab == 0 ? 'active' : ''} >payments</div>
                <div onClick={() => setActiveTab(1)} className={activeTab == 1 ? 'active' : ''}>Investment Platform </div>
                <div onClick={() => setActiveTab(2)} className={activeTab == 2 ? 'active' : ''}>Leading</div>
            </div>

            <div className="tab-card">
                <img src={image} alt="" />
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>Know More<FaAngleRight /> </button>
            </div>

        </div>
    )
}

export default Offer
