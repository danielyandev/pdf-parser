import React, {useState} from "react";
import Header from "../header/Header";
import "./Home.css"
import {FileUploader} from "react-drag-drop-files";
import {uploadFile} from "../../requests/app";
import ProgressBar from "../progressbar/ProgressBar";
const {NotificationManager} = require("react-notifications");

function Home() {
  const defaultParsedHtml = '<p class="text-center">Nothing to show, please upload a file</p>'

  const [uploadProgress, setUploadProgress] = useState(0)
  const [parsedFile, setParsedFile] = useState(defaultParsedHtml)

  const onUploadProgress = (progressEvent: any) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    setUploadProgress(percentCompleted)
  }

  const isUploading = () => {
    return uploadProgress > 0 && uploadProgress < 100
  }

  const handleFileSelect = async (file: any) => {
    const {response, error} = await uploadFile(file, onUploadProgress)

    // just to see a progressbar for some time
    setTimeout(function () {
      setUploadProgress(0)
    }, 3000)

    if (error) {
      NotificationManager.error(response.data.message || 'Error while uploading file')
      setParsedFile('')
      return
    }

    NotificationManager.success('File uploaded successfully')
    setParsedFile(response.data)
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
          <button className="btn form-btn mt-4" id="upload-btn" disabled={isUploading()}>
            <i className="fa fa-upload"/> Add Dashlet
          </button>
        </FileUploader>
      </div>

      <div className="d-flex justify-content-center flex-column align-items-center mt-5">
        <div className="w-25">
          <ProgressBar value={uploadProgress}/>
        </div>

        <p className="color-primary fs-3">Parsed file results</p>
        <div className="container d-flex flex-column justify-content-center" dangerouslySetInnerHTML={{__html: parsedFile}}/>
      </div>

    </div>
  )
}

export default Home