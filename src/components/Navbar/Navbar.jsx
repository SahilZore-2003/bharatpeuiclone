import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from '../MobileNav/MobileNav';

const Navbar = ({ shownav, setShowNav }) => {



    return (
        <nav>
            <MobileNav setShowNav={setShowNav} shownav={shownav} />
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <NavLink className="activelink">home</NavLink>
                <NavLink>About us</NavLink>
                <NavLink>product <FaChevronDown />
                    <div className="other-link">
                        <Link>
                            Merchant <FaChevronRight />
                            <div className="other-other-links">
                                <Link>Payments <FaChevronRight /></Link>
                                <Link>Lending<FaChevronRight /></Link>
                            </div>
                        </Link>
                        <Link>Customer<FaChevronRight />
                            <div className="other-other-links">
                                <Link>Postpay <FaChevronRight /></Link>
                                <Link>Zilion<FaChevronRight /></Link>
                            </div>
                        </Link>
                    </div>
                </NavLink>
                <NavLink>resource</NavLink>
                <NavLink>press</NavLink>
                <NavLink>career</NavLink>
            </div>
            <button>Login<FaUser /></button>
            <RxHamburgerMenu onClick={() => setShowNav(true)} className='hamburger' />
        </nav>
    )
}

export default Navbar
