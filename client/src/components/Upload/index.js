import React, { useRef } from "react"
import S3 from "react-aws-s3";
import {BiCloudUpload} from "react-icons/bi";

function Upload() {
    const fileInput = useRef()
    
    const handleClick = event => {
        event.preventDefault()
        let file = fileInput.current.files[0]
        console.log("file:", file)
        let newFileName = fileInput.current.files[0].name
        console.log("new file name:", newFileName)

        const config = {
            bucketName: 'living-real-bucket',
            dirName: "properties",
            region: 'us-east-2',
            accessKeyId: process.env.ACCESS_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            key: newFileName
        };
        const ReactS3Client = new S3(config)
        // debugger
    ReactS3Client.uploadFile(file, newFileName)
      .then(data  => {
          console.log("Data sent to s3 bucket", data)
          if(data.status === 204) {
              console.log("success", )
          } else {
              console.log("failed to upload")
          }
      })
    }
    

    return(
        <>
        <form className="upload-steps" onSubmit={handleClick}>
            <label>
            Upload file:
            <input type='file' ref={fileInput} />
            </label> 
            <br />
            <br />
            <button className='btn' type="submit"><BiCloudUpload size={30} color="var(--primary)"></BiCloudUpload>
                <br /><b>Upload</b></button>
        </form>
        </>
    )
}

export default Upload;