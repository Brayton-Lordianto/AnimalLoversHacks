import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CancelIcon from "@mui/icons-material/Cancel";
import QRCode from "react-qr-code";
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


const MODEL_ID = '28f5fe9c-f1df-405c-b543-de56956e299f'



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
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="./download_1.jpg"
                // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Nemo
                </Typography>

                <Typography variant="body2" color="blackv2">
                  Adopt Nemo the lost fish!
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
                  title="Loki"
                  subheader={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Type: Crab
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Breed: King Crab
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: Male
                      </Typography>
                    </>
                  }
                />
                <div >

                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={MODEL_ID}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  {/* <CardMedia
                    className='mx-auto w-full '
                    component="img"
                    style={{ height: 200, width: 200 }}
                    // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="green iguana"
                  /> */}
                </div>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Test Description
                  </Typography>
                  <Typography paragraph>
                    This is dummy medical description.
                  </Typography>
                </CardContent>
              </Card>
            </Backdrop>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="./2.png"
                // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Lago
                </Typography>

                <Typography variant="body2" color="blackv2">
                  Adopt the mischevious Lago!
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
                  title="Loki"
                  subheader={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Type: Crab
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Breed: King Crab
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: Male
                      </Typography>
                    </>
                  }
                />
                <div >

                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={MODEL_ID}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  {/* <CardMedia
                    className='mx-auto w-full '
                    component="img"
                    style={{ height: 200, width: 200 }}
                    // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="green iguana"
                  /> */}
                </div>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Test Description
                  </Typography>
                  <Typography paragraph>
                    This is dummy medical description.
                  </Typography>
                </CardContent>
              </Card>
            </Backdrop>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="./22.jpg"
                // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Rango
                </Typography>

                <Typography variant="body2" color="blackv2">
                  Adopt our favorite tree dweller named Rango!
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
                  title="Loki"
                  subheader={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Type: Crab
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Breed: King Crab
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: Male
                      </Typography>
                    </>
                  }
                />
                <div >

                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={MODEL_ID}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  {/* <CardMedia
                    className='mx-auto w-full '
                    component="img"
                    style={{ height: 200, width: 200 }}
                    // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="green iguana"
                  /> */}
                </div>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Test Description
                  </Typography>
                  <Typography paragraph>
                    This is dummy medical description.
                  </Typography>
                </CardContent>
              </Card>
            </Backdrop>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 6, ml: 6 }}>
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="./33.png"
                // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Loki
                </Typography>

                <Typography variant="body2" color="blackv2">
                  Take our favorite crab home with you!
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
                  title="Loki"
                  subheader={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Type: Crab
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Breed: King Crab
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: Male
                      </Typography>
                    </>
                  }
                />
                <div >

                  <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={MODEL_ID}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  {/* <CardMedia
                    className='mx-auto w-full '
                    component="img"
                    style={{ height: 200, width: 200 }}
                    // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="green iguana"
                  /> */}
                </div>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Test Description
                  </Typography>
                  <Typography paragraph>
                    This is dummy medical description.
                  </Typography>
                </CardContent>
              </Card>
            </Backdrop>
          </Card>
        </Grid>


      </Grid >
    </>
  );
};

export default Animals;
