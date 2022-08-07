import React from "react";
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Thankyou from "./Thankyou";
import FileUpload from "./FileUpload";

const AnimalRegistration = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const navigate = useNavigate()
  const handleSubmit = () => {
    const response = fetch('http://127.0.0.1:5000/report_animals');
    const data = response.json();
    navigate('/animals');
  }

  const handleRegistration = () => {
    const response = fetch('http://127.0.0.1:5000/report_animals');
    const data = response.json();
  }
  
  

  return (
    <>
      <Typography
        variant="h5"
        noWrap
        color="blackv2"
        fontWeight="bold"
        position="relative"
        align="center"
        sx={{
          mt: "50px",
        }}
      >
        Animal Registration
      </Typography>
      <div class="max-w-2xl mx-auto bg-white p-16">
        <form>
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                Name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                Type
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                Breed
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                Sex
              </label>
              <input
                required
                type="url"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <input
              required
              type="text"
              id="large-input"
              class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Medical Description
            </label>
            <input
              type="text"
              id="large-input"
              class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Upload Image
            </label>
            <FileUpload
              files={uploadedImages}
              setFiles={setUploadedImages}
              dropzoneLabel="Drag 'n' drop report image, or click to select image."
            />

          </div>

          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Upload Model
            </label>
            <FileUpload
              files={uploadedFiles}
              setFiles={setUploadedFiles}
              dropzoneLabel="Drag 'n' drop report image, or click to select image."
            />

          </div>

          <div class="mb-6" />

          <button
            onClick={handleSubmit}
            // type="submit"
            class="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AnimalRegistration;
