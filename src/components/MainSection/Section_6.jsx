import React from 'react';
import Acared from "../../commonResource/images/icons/arcade.png"

function Section_6() {
    return (
    <section className="sixth-heghlight-wrapper">
    <div className="container-fluid">
        <div className="row">

        <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
            <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                <img src={Acared}  />
                </div>
            </div>

            <div className="description-wraper white">
                Agent 8 is a small hero on a big mission.
            </div>

            <div className="links-wrapper">
                <ul>
                <li><a href="#">Play now<sup>2</sup></a></li>
                <li><a href="#">Learn about Apple Arcade</a></li>
                </ul>
            </div>
            </div>
        </div>

        <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
            <div className="title-wraper">
                Get 3% Daily Cash back with Apple Card.
            </div>

            <div className="description-wraper">
                And pay for your new iPhone over 24 months, interest-free with Apple Card.
            </div>

            <div className="links-wrapper">
                <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Apply now</a></li>
                </ul>
            </div>
            </div>
        </div>

        </div>
    </div>
    </section>
    );
}

export default Section_6;
