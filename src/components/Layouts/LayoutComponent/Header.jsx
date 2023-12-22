import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    const [sidePanelWidth, setSidePanelWidth] = useState(0);

    const openNav = () => {
        if (sidePanelWidth == 250) {
            setSidePanelWidth(0);
        } else {
            setSidePanelWidth(250);
        }
    };

    const closeNav = () => {
        setSidePanelWidth(0);
    };
    return (
        <div>
            <>
                {/* basic */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                {/* mobile metas */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                {/* site metas */}
                <title>SMART PURSE TECH</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                {/* bootstrap css */}
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                {/* style css */}
                <link rel="stylesheet" href="css/style.css" />
                {/* responsive*/}
                <link rel="stylesheet" href="css/responsive.css" />
                {/* awesome fontfamily */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                {/*[if lt IE 9]>

<![endif]*/}
            </>
            <div id="mySidepanel" className="sidepanel" style={{ width: sidePanelWidth + 'px' }}>
                <Link to="javascript:void(0)" sidepanel="closebtn" onClick={closeNav}>
                    ×
                </Link>
                <Link sidepanel="active" to="/">
                    Home
                </Link>
                <Link to="about">About</Link>
                <Link to="searvices">Searvices</Link>
                <Link to="testimonial">Testimonial</Link>
                <Link to="works">Works</Link>
                <Link to="contact">Contact</Link>
            </div>

            <header>
                {/* header inner */}
                <div className="head-top">
                    <div className="container-fluid">
                        <div className="row d_flex">
                            <div className="col-sm-3">
                                <div className="logo">
                                    <Link to="index.html">SMART PURSE TECH</Link>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <ul className="social_icon text_align_right d_none">
                                    <li>
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-youtube-play" aria-hidden="true" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <ul className="email text_align_right">
                                    <li className="d_none">
                                        <Link to="Javascript:void(0)">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li className="d_none">
                                        {" "}
                                        <Link to="Javascript:void(0)">
                                            <i
                                                className="fa fa-search"
                                                style={{ cursor: "pointer" }}
                                                aria-hidden="true"
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li>
                                        <button className="openbtn" onClick={openNav}>
                                            <img src="images/menu_btn.png" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header