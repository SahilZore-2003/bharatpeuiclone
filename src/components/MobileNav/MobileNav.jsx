import React, { useState } from 'react'
import "./MobileNav.scss"
import logo from "../../assets/logo.png"
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { RxTwitterLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaUser } from "react-icons/fa";



const MobileNav = ({ setShowNav, shownav }) => {
    const [showOtherLinks, setShowOtherLinks] = useState(false)

    return (
        <div className={shownav ? 'mobile-nav active' :'mobile-nav'}>
            <div className="topnav">
                <img src={logo} alt="" />
                <HiXMark onClick={() => setShowNav(false)} />
            </div>
            <div className="mobile-links">
                <Link>Home</Link>
                <Link>About us</Link>
                <Link className={showOtherLinks ? 'extra-links active' : 'extra-links'} onClick={() => setShowOtherLinks(!showOtherLinks)}>
                    <div>Product  <FaChevronRight /></div>
                    <div className="mobile-other-links">
                        <Link>Merchants</Link>
                        <Link>Customers</Link>
                    </div>
                </Link>
                <Link>Resources</Link>
                <Link>Press</Link>
                <Link>Career</Link>
                <Link>Contact us</Link>
            </div>
            <div className="mobile-social">
                <div className="icons">
                    <RxInstagramLogo />
                    <RxLinkedinLogo />
                    <RxTwitterLogo />
                    <CiFacebook />
                </div>
                <button>Login <FaUser /></button>
            </div>
        </div>
    )
}

export default MobileNav
