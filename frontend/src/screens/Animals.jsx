import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Grid,
  Box,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Backdrop,
  CardHeader,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";



const Animals = () => {
  const [open, setOpen] = React.useState(false);
  const [signIn, setsignIn] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handlesignIn = () => {
    setsignIn(true);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            noWrap
            color="blackv2"
            fontSize="24px"
            fontWeight="bold"
            sx={{
              mt: 7,
              ml: 4,
            }}
          >
            ADOPTABLE ANIMALS
          </Typography>
        </Grid>

      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Dog
                </Typography>
                <Typography variant="body2" color="blackv2">
                  Dogs are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >

              <Link to='/adopt'>
                <Button
                  variant="outlined"
                  sx={{
                    ml: '130%',
                    borderRadius: "50px",

                  }}
                >
                  <Typography
                    noWrap
                    color="blackv2"
                    position="relative"
                    align="center"
                  >
                    Adopt
                  </Typography>
                </Button>
              </Link>

            </CardActions>
          </Card>
        </Grid >
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="blackv2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/adopt'>
                <Button
                  variant="outlined"
                  sx={{
                    ml: '130%',
                    borderRadius: "50px",

                  }}
                >
                  <Typography
                    noWrap
                    color="blackv2"
                    position="relative"
                    align="center"
                  >
                    Adopt
                  </Typography>
                </Button>
              </Link>
            </CardActions>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <Card
                sx={{
                  maxWidth: 900,
                  maxHeight: 600,
                  overflow: "auto",
                }}
              >
                <CardHeader
                  action={
                    <>
                      <IconButton onClick={handleClose} aria-label="Cancel">
                        <CancelIcon />
                      </IconButton>
                    </>
                  }
                  title="title"
                  subheader={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        name
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Report Id: 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category: 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ok
                      </Typography>
                    </>
                  }
                />
                <CardMedia component="img" height="100%" alt="Report Image" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Hello
                  </Typography>
                  <Typography paragraph>
                    If there is any note that is provided by the doctor; it goes
                    here!!
                  </Typography>
                </CardContent>
              </Card>
            </Backdrop>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Cat
                </Typography>
                <Typography variant="body2" color="blackv2">
                  Cats are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/adopt'>
                <Button
                  variant="outlined"
                  sx={{
                    ml: '130%',
                    borderRadius: "50px",

                  }}
                >
                  <Typography
                    noWrap
                    color="blackv2"
                    position="relative"
                    align="center"
                  >
                    Adopt
                  </Typography>
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid >
    </>
  );
};

export default Animals;
