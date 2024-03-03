import React from 'react'
import "./Services.scss"
import s1 from "../../assets/s1.png"


const Services = () => {
    return (
        <div className='services'>
            <h2 className='title'>Why BharatPe</h2>
            <p className='sub-title'>we unlock true potential of your business.</p>

           

            <div className="content">
                <div>
                    <img src={s1} alt="" />
                </div>
                <div>
                    <h3>The perfect match for your credit needs.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil quisquam fugit omnis dicta corporis, possimus quos iste debitis soluta consequuntur mollitia quae magnam accusantium! Aliquam, doloribus? A, quam repudiandae.</p>
                </div>
            </div>

        </div>
    )
}

export default Services
