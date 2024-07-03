import React from "react";
import { IoArrowUpCircle } from "react-icons/io5";

function Landing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-5">
            <h1 className="text-center fs-1 fw-bold lh-1">
              India's leading Tax e-filing website
            </h1>
            <p className="text-center text-gray">
              Filing the income tax return is so straightforward that users can
              easily fill and submit it on their own.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center gap-4">
        <div className="col-md-5 card-width">
          <div className="shadow-lg rounded px-4 py-3">
            <div className="d-flex align-items-start">
              <img
                className="width-img"
                src="https://www.myitronline.com/build/assets/call-support-DMg_3X3d.svg"
                alt=""
              />
              <div className="ms-3">
                <h2>Start ITR filing Yourself</h2>
                <p className="text-justify">
                We have changed the way people do tax filing in India. We don’t just get your tax return filed within minutes but get you maximum refunds in shortest time.
                </p>
                <div className="d-flex">
                  <button className="button-bg">File ITR Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 card-width">
          <div className="shadow-lg rounded px-4 py-3">
            <div className="d-flex align-items-start">
              <img
                className="width-img"
                src="https://www.myitronline.com/build/assets/call-support-DMg_3X3d.svg"
                alt=""
              />
              <div className="ms-3">
                <h2>Hire a Tax Expert Now</h2>
                <p className="text-justify">
                  We have changed the way people do tax filing in India. We
                  don’t just get your tax return filed within minutes but get
                  you maximum refunds in shortest time.
                </p>
                <div className="d-flex">
                  <button className="button-bg">Hire Expert Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center  gap-5 mt-5">
        <div className="col-md-auto">
          <button className="button-blue">
            Upload Form16 Direct <IoArrowUpCircle className="fs-3" />
          </button>
        </div>
        <div className="col-md-auto">
          <button className="button-bg">Consultancy Free</button>
        </div>
        <div className="col-md-auto">
          <button className="button-bg">Generate Free Rent Receipt</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
