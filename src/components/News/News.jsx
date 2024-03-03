import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import "./News.scss"
import Button from "../Button/Button"
import { news } from "../../data"
const News = () => {
    return (
        <div className='news'>
            <h1>Recent News</h1>

            <div className="news-container">
                {
                    news.map((e) => {
                        return (
                            <div className="main-news">
                                <div className="date">{e.date}</div>
                                <h3 className="title">
                                    {e.title}
                                </h3>
                                <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa cumque doloribus, eligendi quod, repellat animi ut quisquam provident consectetur placeat quo mollitia vitae, deserunt eius? Explicabo unde dolores commodi?</div>

                                <button>Read More <FaChevronRight /></button>
                            </div>
                        )
                    })
                }


            </div>

            <Button />

        </div>
    )
}

export default News
