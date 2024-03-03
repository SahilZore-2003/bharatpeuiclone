import React, { useState } from 'react'
import "./Stories.scss"
import st1 from "../../assets/st1.png"
import { FaPlay } from "react-icons/fa6";
import Button from '../Button/Button';
import { videos } from "../../data"



const Stories = ({setShow,setVideoId}) => {



    return (
        <div className='story'>
            <h1 className="center">BharatPe Merchant Stories.</h1>
            <div className="story-con">
                {
                    videos.map((e) => {
                        return (
                            <div className='main-story' key={e.videoId}>
                                <div className="img-con" onClick={() => {
                                    setVideoId(e.videoId)
                                    setShow(true)
                                }}>
                                    <img src={e.image} alt="" />
                                    <FaPlay />
                                </div>
                                <h3>{e.name}</h3>
                                <p>{e.location}</p>
                            </div>
                        )
                    })
                }

            </div>
            <Button />
        </div>
    )
}

export default Stories
