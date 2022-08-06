import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import LoginContext from "../store/login-context";
import { Link } from "react-router-dom";

const pages = ["About Us", "Contact"];

const BaseLayout = (props) => {
  const loginCtx = useContext(LoginContext)
  return (
    <>
      <AppBar position="static" color="appbarColor">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              color="primary"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "blackv2",
                textDecoration: "none",
              }}
            >
              PET-ME
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, display: "block" }}
                  color="blackv2"
                  variant="h10"
                >
                  {page}
                </Button>
              ))}
              <Link to='animals'>

                <Button
                  sx={{ my: 2, display: "block" }}
                  color="blackv2"
                  variant="h10"
                >
                  Animals
                </Button>
              </Link>
            </Box>


            <IconButton
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
            {loginCtx.isLoggedIn ?
              <>
                <Link to='register-animal'>

                  <Button
                    variant="outlined"
                    sx={{
                      mr: 2,
                      borderRadius: "50px",
                    }}
                  // onClick={handlesignIn}
                  >
                    <Typography noWrap color="blackv2" fontSize="18px">
                      Register Animal
                    </Typography>
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  sx={{
                    // ml: 1,
                    mr: 3,
                    borderRadius: "50px",
                  }}
                // onClick={handlesignIn}
                >
                  <Typography noWrap color="blackv2" fontSize="18px">
                    View Requests
                  </Typography>
                </Button>
              </>

              :
              <Link to='login'>

                <Button
                  variant="outlined"
                  sx={{
                    mr: 3,
                    borderRadius: "50px",
                  }}
                // onClick={handlesignIn}
                >
                  <Typography noWrap color="blackv2" fontSize="18px">
                    Login
                  </Typography>
                </Button>
              </Link>
            }

          </Toolbar>
        </Container>
      </AppBar>
      {props.children}
    </>

  );
};
export default BaseLayout;
