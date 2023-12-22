import React from 'react'
import { Link } from "react-router-dom";
const Graf = () => {
    return (
        <div className="graf">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul
                            className="nav nav-tabs md-tabs graf_tab"
                            id="myTabMD"
                            role="tablist"
                        >
                            <li>
                                <Link
                                    className="nav-link active"
                                    id="home-tab-md"
                                    data-toggle="tab"
                                    href="#tab1"
                                    role="tab"
                                    aria-controls="home-md"
                                    aria-selected="true"
                                >
                                    Bitcoin(BTC)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    id="profile-tab-md"
                                    data-toggle="tab"
                                    href="#tab2"
                                    role="tab"
                                    aria-controls="profile-md"
                                    aria-selected="false"
                                >
                                    Bitcoin Cash(BCH)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    id="contact-tab-md"
                                    data-toggle="tab"
                                    href="#tab3"
                                    role="tab"
                                    aria-controls="contact-md"
                                    aria-selected="false"
                                >
                                    Bitcoin Lite(LTC)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    id="contact-tab-md"
                                    data-toggle="tab"
                                    href="#tab4"
                                    role="tab"
                                    aria-controls="contact-md"
                                    aria-selected="false"
                                >
                                    Bitcoin Ethereum(ETH)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    id="contact-tab-md"
                                    data-toggle="tab"
                                    href="#tab5"
                                    role="tab"
                                    aria-controls="contact-md"
                                    aria-selected="false"
                                >
                                    Bitcoin Ripple(XRP)
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content card  graf_content" id="myTabContentMD">
                            <div
                                className="tab-pane fade show active padi"
                                id="tab1"
                                role="tabpanel"
                                aria-labelledby="home-tab-md"
                            >
                                <div className="row">
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                <span>USD</span> 123456.09 <br /> Last Price{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Daily Change{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour Low{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour High{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Today Open{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <div className="usd text_align_center">
                                            <h4>
                                                BTC 09876 <br /> 24 hour volume{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="graf_bootom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <figure>
                                                    <h3 className="h3tota">Total Growth</h3>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf1.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <h3>
                                                    LiveTrades{" "}
                                                    <span style={{ color: "#face34" }} className="pa_ri">
                                                        USD 123456.09
                                                    </span>
                                                </h3>
                                                <figure>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf2.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade padi"
                                id="tab2"
                                role="tabpanel"
                                aria-labelledby="profile-tab-md"
                            >
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                <span>USD</span> 123456.09 <br /> Last Price{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Daily Change{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour Low{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour High{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Today Open{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                BTC 09876 <br /> 24 hour volume{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="graf_bootom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <figure>
                                                    <h3 className="h3tota">Total Growth</h3>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf1.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <h3>
                                                    LiveTrades{" "}
                                                    <span style={{ color: "#face34" }} className="pa_ri">
                                                        USD 123456.09
                                                    </span>
                                                </h3>
                                                <figure>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf2.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade padi"
                                id="tab3"
                                role="tabpanel"
                                aria-labelledby="contact-tab-md"
                            >
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                <span>USD</span> 123456.09 <br /> Last Price{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Daily Change{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour Low{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour High{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Today Open{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                BTC 09876 <br /> 24 hour volume{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="graf_bootom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <figure>
                                                    <h3 className="h3tota">Total Growth</h3>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf1.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <h3>
                                                    LiveTrades{" "}
                                                    <span style={{ color: "#face34" }} className="pa_ri">
                                                        USD 123456.09
                                                    </span>
                                                </h3>
                                                <figure>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf2.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade padi"
                                id="tab4"
                                role="tabpanel"
                                aria-labelledby="contact-tab-md"
                            >
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                <span>USD</span> 123456.09 <br /> Last Price{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Daily Change{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour Low{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour High{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Today Open{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                BTC 09876 <br /> 24 hour volume{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="graf_bootom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <figure>
                                                    <h3 className="h3tota">Total Growth</h3>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf1.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <h3>
                                                    LiveTrades{" "}
                                                    <span style={{ color: "#face34" }} className="pa_ri">
                                                        USD 123456.09
                                                    </span>
                                                </h3>
                                                <figure>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf2.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade padi"
                                id="tab5"
                                role="tabpanel"
                                aria-labelledby="contact-tab-md"
                            >
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                <span>USD</span> 123456.09 <br /> Last Price{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Daily Change{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour Low{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> 24 Hour High{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                USD 123456.09 <br /> Today Open{" "}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="usd text_align_center">
                                            <h4>
                                                BTC 09876 <br /> 24 hour volume{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="graf_bootom">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <figure>
                                                    <h3 className="h3tota">Total Growth</h3>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf1.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="growth text_align_center">
                                                <h3>
                                                    LiveTrades{" "}
                                                    <span style={{ color: "#face34" }} className="pa_ri">
                                                        USD 123456.09
                                                    </span>
                                                </h3>
                                                <figure>
                                                    <img
                                                        className="img_responsive"
                                                        src="images/graf2.jpg"
                                                        alt="#"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Graf