import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Typography
        variant="h1"
        noWrap
        color="primary"
        position="relative"
        align="center"
        sx={{
          mt: 20,
          fontWeight: "bold",
        }}
      >
        PET ME
      </Typography>
      <Typography
        variant="h6"
        noWrap
        color="blackv2"
        position="relative"
        align="center"
      >
        Save animals and help them find their home
      </Typography>
      <Box m={1} display="flex" justifyContent="center" alignItems="center">
        <Link to='/animals'>
          <Button
            variant="outlined"
            sx={{
              mt: 10,
              borderRadius: "50px",
            }}
          >
            <Typography
              noWrap
              color="blackv2"
              position="relative"
              align="center"
              fontSize="24px"
            >
              View Animals
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
