import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import LoginContext from "../store/login-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const loginCtx = useContext(LoginContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (loginCtx.isLoggedIn) {
      navigate('/')

    }
  }, [loginCtx.isLoggedIn])
  const handleSubmit = () => {
    loginCtx.toggleIsLoggedIn()
  }
  if (loginCtx.isLoggedIn) {
    return <></>
  }
  return (
    <>
      <Box
        noWrap
        align="center"
        sx={{
          mt: "32px",
          mx: "32px",
        }}
      ></Box>
      <div class="max-w-2xl mx-auto bg-white p-16">
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            onClick={handleSubmit}

            type="submit"
            class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center "
          >
            Sign In
          </button>

        </form>
      </div>
    </>
  );
};

export default Login;
