import React, { useState } from 'react'
import { Counts, CusOffers, Footer, Header, Navbar, News, Offer, Services, Stories, VideoPopup } from "../components"
const Home = () => {
    const [shownav, setShowNav] = useState(false)
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    return (
        <>
            <Navbar setShowNav={setShowNav} shownav={shownav} />
            <VideoPopup show={show} videoId={videoId} setShow={setShow} setVideoId={setVideoId} />
            <div id="move" className={shownav ? 'moveleft' : 'moveright'}>
                <Header />
                <Counts />
                <Services />
                <Offer />
                <CusOffers />
                <Stories setShow={setShow} setVideoId={setVideoId} />
                <News />
                <Footer />
            </div>

        </>
    )
}

export default Home
