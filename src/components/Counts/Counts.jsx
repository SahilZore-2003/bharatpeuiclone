import React from 'react'
import "./Counts.scss"
import c1 from "../../assets/c1.png"
import { counts } from '../../data'
const Counts = () => {
    return (
        <div className='counts'>
            <h1 className="center">Numbers tells our story.</h1>
            <div className="container">
                {
                    counts.map((e) => (
                        <div className="count" key={e.number}>
                            <img src={e.image} alt="" />
                            <h2>{e.heading}</h2>
                            <p>{e.subheading}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Counts
