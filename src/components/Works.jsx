import React from 'react'
import { Link } from "react-router-dom";
const Works = () => {
    return (
        <>
            {/* loader  */}
            {/* <div className="loader_bg">
                <div className="loader">
                    <img src="images/loading.gif" alt="" />
                </div>
            </div> */}
            {/* end loader */}            
            {/* testimonial */}
            <div className="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="border_testi">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="titlepage text_align_center">
                                            <h2>Testimonial</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d_flex">
                                    <div className="col-md-10 offset-md-1">
                                        <div
                                            id="testimo"
                                            className="carousel slide our_testimonial"
                                            data-ride="carousel"
                                        >
                                            <ol className="carousel-indicators">
                                                <li
                                                    data-target="#testimo"
                                                    data-slide-to={0}
                                                    className="active"
                                                />
                                                <li data-target="#testimo" data-slide-to={1} />
                                                <li data-target="#testimo" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="carousel-caption posi_in">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="testomoniam_text text_align_center">
                                                                        <i>
                                                                            <img src="images/clint.jpg" alt="#" />
                                                                        </i>
                                                                        <h3>MorGan Den</h3>
                                                                        <span>Bitcoin</span>
                                                                        <img src="images/icon.png" alt="#" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div className="testomoniam_text text_align_left">
                                                                        <p>
                                                                            more-or-less normal distribution of letters,
                                                                            as opposed to using 'Content here, content
                                                                            here', making it look like readable English.
                                                                            Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                            letters, as opposed to using 'Content here,
                                                                            content here', making it look like readable
                                                                            English. Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="carousel-caption posi_in">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="testomoniam_text text_align_center">
                                                                        <i>
                                                                            <img src="images/clint.jpg" alt="#" />
                                                                        </i>
                                                                        <h3>MorGan Den</h3>
                                                                        <span>Bitcoin</span>
                                                                        <img src="images/icon.png" alt="#" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div className="testomoniam_text text_align_left">
                                                                        <p>
                                                                            more-or-less normal distribution of letters,
                                                                            as opposed to using 'Content here, content
                                                                            here', making it look like readable English.
                                                                            Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                            letters, as opposed to using 'Content here,
                                                                            content here', making it look like readable
                                                                            English. Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="carousel-caption posi_in">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="testomoniam_text text_align_center">
                                                                        <i>
                                                                            <img src="images/clint.jpg" alt="#" />
                                                                        </i>
                                                                        <h3>MorGan Den</h3>
                                                                        <span>Bitcoin</span>
                                                                        <img src="images/icon.png" alt="#" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div className="testomoniam_text text_align_left">
                                                                        <p>
                                                                            more-or-less normal distribution of letters,
                                                                            as opposed to using 'Content here, content
                                                                            here', making it look like readable English.
                                                                            Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                            letters, as opposed to using 'Content here,
                                                                            content here', making it look like readable
                                                                            English. Many desktop publishing packages and
                                                                            webmore-or-less normal distribution of
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                className="carousel-control-prev"
                                                href="#testimo"
                                                role="button"
                                                data-slide="prev"
                                            >
                                                <i className="fa fa-angle-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </Link>
                                            <Link
                                                className="carousel-control-next"
                                                href="#testimo"
                                                role="button"
                                                data-slide="next"
                                            >
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end testimonial */}
            {/* footer */}
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
                                                <i
                                                    className=" fa fa-map-marker "
                                                    aria-hidden=" true "
                                                />{" "}
                                                Location
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to=" Javascript:void(0) ">
                                                <i className=" fa fa-phone " aria-hidden=" true " /> Call
                                                +01 1234567890
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
                            <div className=" col-md-3 col-sm-6 ">
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
                            <div className="col-md-3 col-sm-6">
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
                                <div className="row">
                                    <div className=" col-md-12 ">
                                        <p>
                                            © 2020 All Rights Reserved. Design by{" "}
                                            <Link to="https://html.design/"> Free Html Template</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer */}
            {/* Javascript files*/}
        </>

    )
}

export default Works