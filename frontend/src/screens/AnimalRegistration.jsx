import React from "react";
import { Typography } from "@mui/material";

const AnimalRegistration = () => {
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
            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">JPEG</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Upload Model
            </label>
            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">USDZ</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div class="mb-6" />

          <button
            type="submit"
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
