import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Link className="logo_bottom" to="/">
                                    SMART PURSE TECH
                                </Link>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className=" Informa conta ">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            {" "}
                                            <Link to=" Javascript:void(0) ">
                                                {" "}
                                                <i className=" fa fa-map-marker " aria-hidden=" true " />{" "}
                                                Location
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to=" Javascript:void(0) ">
                                                <i className=" fa fa-phone " aria-hidden=" true " /> Call +01
                                                1234567890
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to=" Javascript:void(0) ">
                                                {" "}
                                                <i className=" fa fa-envelope " aria-hidden=" true " />{" "}
                                                demo@gmail.com
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>Readable content of</li>
                                        <li>a page when looking</li>
                                        <li>at its layoutreadable</li>
                                        <li>content of a page</li>
                                        <li>when looking at its</li>
                                        <li>layout</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" col-md-3 col-sm-6">
                                <div className="Informa helpful">
                                    <h3>Useful Link</h3>
                                    <ul>
                                        <li>Readable content of</li>
                                        <li>a page when looking</li>
                                        <li>at its layoutreadable</li>
                                        <li>content of a page</li>
                                        <li>when looking at its</li>
                                        <li>layout</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" Informa ">
                                <h3>Offices</h3>
                                <ul>
                                    <li>Readable content of</li>
                                    <li>a page when looking</li>
                                    <li>at its layoutreadable</li>
                                    <li>content of a page</li>
                                    <li>when looking at its</li>
                                    <li>layout</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-md-3 col-sm-6 ">
                            <div className=" Informa ">
                                <h3>Newsletter</h3>
                                <form className=" newslatter_form ">
                                    <input
                                        className=" ente "
                                        placeholder=" Enter your email "
                                        type=" text "
                                        name=" Enter your email "
                                    />
                                    <button className=" subs_btn ">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=" copyright text_align_center ">
                        <div className=" container ">
                            <div className=" row ">
                                <div className=" col-md-12 ">
                                    <p>
                                        © 2020 All Rights Reserved. Design by{" "}
                                        <Link to=" https://html.design/ "> Free Html Template</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
         
        </>
    )
}

export default Footer