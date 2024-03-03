import React from 'react'
import "./Footer.scss"
import { RxTwitterLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import footlogo from "../../assets/footlogo.png"
import ps from "../../assets/ps.png"
import as from "../../assets/as.png"
import sp1 from "../../assets/sp1.png"
import sp2 from "../../assets/sp2.png"
import sp3 from "../../assets/sp3.png"
import sp4 from "../../assets/sp4.png"
const Footer = () => {
    return (
        <footer>
            <div className="top">
                <div className='span'>
                    <img src={footlogo} alt="" />
                    <div className='desc'>
                        BharatPe was started in 2018 with the mission to build a holistic FinTech platform for offline merchants and small businesses. Today, BharatPe offers a suite of simple, easy-to-use and secure fintech products including payments and business loans to its merchant partners. The company has an extensive network of 13+ million merchants across 450+ cities in the country.
                    </div>
                    <div className="download">
                        <h4>Download the app</h4>
                        <div className="stores">
                            <img src={ps} alt="" />
                            <img src={as} alt="" />
                        </div>
                    </div>
                </div>
                <div className='link-con'>
                    <div className='links'>
                        <h3>General</h3>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Contact us</p>
                    </div>
                    <div className='links'>
                        <h3>Legal</h3>
                        <p>Tearms & condition</p>
                        <p>Privacy Policy</p>
                        <p>Grivience Rediencal policy.</p>
                    </div>
                </div>
                <div className='link-con'>
                    <div className='links'>
                        <h3>Resources</h3>
                        <p>Build with bharatPe</p>
                        <p>Transforming Bharat</p>
                        <p>Merchant stories</p>
                    </div>
                    <div className="links">
                        <h3>Corporate Governance</h3>
                    </div>
                </div>
                <div className='link-con'>
                    <div className='links'>
                        <h3>Merchant Offerings</h3>
                        <p>BharatPe QR</p>
                        <p>BharatPe swipe</p>
                        <p>BharatPe speaker</p>
                    </div>
                </div>
            </div>
            <div className="sponser">
                <img src={sp1} alt="" />
                <img src={sp2} alt="" />
                <img src={sp3} alt="" />
                <img src={sp4} alt="" />

            </div>
            <div className="socials">
                <p>©️ 2024 all rights reserved.</p>
                <div className="icons">
                    <RxTwitterLogo />
                    <RxInstagramLogo />
                    <RxLinkedinLogo />
                    <CiFacebook />
                    <FaChevronUp onClick={() => window.scrollTo(0, 0)} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
