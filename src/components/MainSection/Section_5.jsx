import React from 'react';
import Apple_Tv from "../../commonResource/images/icons/apple-tv-logo.png"
import banker from "../../commonResource/images/home/banker.png"
import Apple_Watch_series_5 from "../../commonResource/images/home/watch-series-5.jpg"

function Section_5() {
    return (
    <section className="fifth-heghlight-wrapper">
    <div className="container-fluid">
        <div className="row">

        <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
            <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                <img src={Apple_Tv} />
                </div>
            </div>

            <div className="tvshow-logo-wraper">
                <img src={banker} />
            </div>

            <div className="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
            </div>
            </div>
        </div>

        <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
            <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                <img src={Apple_Watch_series_5} />
                </div>
            </div>

            <div className="description-wraper">
                With the Always-On Retina display.<br />
                You’ve never seen a watch like this.
            </div>

            <div className="links-wrapper">
                <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Buy</a></li>
                </ul>
            </div>
            </div>
        </div>

        </div>
    </div>
    </section>
    );
}

export default Section_5;