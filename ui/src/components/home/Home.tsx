import React from "react";
import Header from "../header/Header";
import "./Home.css"
import {FileUploader} from "react-drag-drop-files";

function Home() {

  const handleFileSelect = (file: any) => {
    console.log('selected')
  }

  const handleAreaClick = (e: any) => {
    // Just a fix of lib's bug not to open file window 2 times
    if (e.target.className.includes('upload-wrapper')) {
      e.preventDefault()
    }
  }

  return (
    <div className="home-wrapper">
      <Header />

      <div className="d-flex justify-content-center" onClick={handleAreaClick}>
        <FileUploader id="asd" classes="upload-wrapper d-flex justify-content-center align-items-center flex-column"
                      types={['PDF']}
                      handleChange={handleFileSelect}
        >
          <p className="text-center fs-2">Upload PDF file</p>
          <button className="btn form-btn mt-4" id="upload-btn">
            <i className="fa fa-upload"/> Add Dashlet
          </button>
        </FileUploader>
      </div>

    </div>
  )
}

export default Home