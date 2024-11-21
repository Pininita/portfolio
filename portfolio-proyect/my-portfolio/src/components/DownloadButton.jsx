import React from 'react'

const PDF_FILE_URL = 'http://localhost:5173/daniel-sanabria-cv-harvard.pdf'

export const DownloadButton = () => {

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className="download-cv">
      <button onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}>
           DOWNLOAD CV
        </button>
    </div>
  )
}
