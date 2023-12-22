import React from 'react'
import { Link } from "react-router-dom";
const Searvices = () => {
  return (
    <>
    {/* wallet */}
    <div className="wallet">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Our Searvice</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div id="wa_hover" className="wallet_box text_align_center">
              <i>
                <img src="images/wa1.svg" alt="#" />
              </i>
              <h3>ONLINE WALLET</h3>
              <p>
                It is a long established fact that a reader will be distracted by{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div id="wa_hover" className="wallet_box text_align_center">
              <i>
                <img src="images/wa2.svg" alt="#" />
              </i>
              <h3>SEND COINS</h3>
              <p>
                It is a long established fact that a reader will be distracted by{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div id="wa_hover" className="wallet_box text_align_center">
              <i>
                <img src="images/wa3.svg" alt="#" />
              </i>
              <h3>MOBILE APP </h3>
              <p>
                It is a long established fact that a reader will be distracted by{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div id="wa_hover" className="wallet_box text_align_center">
              <i>
                <img src="images/wa4.svg" alt="#" />
              </i>
              <h3>COIN MINING</h3>
              <p>
                It is a long established fact that a reader will be distracted by{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end wallet */}
    {/* Javascript files*/}
  </>
  
  )
}

export default Searvices