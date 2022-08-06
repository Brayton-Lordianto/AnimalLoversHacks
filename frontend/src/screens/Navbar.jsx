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

const pages = ["About Us", "Contact"];

const Navbar = () => {
  return (
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
          </Box>

          <Typography
            sx={{ mr: 5, display: "block" }}
            color="primary"
            variant="h10"
          >
            save-animals@gmail.com
          </Typography>
          <Typography
            sx={{ mr: 5, display: "block" }}
            color="blackv2"
            variant="h10"
          >
            (977) 981-5555555
          </Typography>
          <IconButton
            color="secondary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="secondary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="secondary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
