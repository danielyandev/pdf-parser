import React from "react";
import Header from "../header/Header";
import "./Home.css"

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <Header />

        <div className="d-flex justify-content-center">
          <div className="upload-wrapper d-flex justify-content-center align-items-center flex-column">
            <p className="text-center fs-2">Upload PDF file</p>
            <button className="btn form-btn mt-4">
              <i className="fa fa-upload"/> Add Dashlet
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home