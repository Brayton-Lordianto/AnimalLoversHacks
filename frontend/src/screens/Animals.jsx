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
            <CardActionArea onClick={handleToggle}>
              <CardMedia
                component="img"
                height="100%"
                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
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
                  Test Description
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
                        Type: Dog
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Breed: Harrier
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: Male
                      </Typography>
                    </>
                  }
                />
                <div >

                  <CardMedia
                    className='mx-auto w-full '
                    component="img"
                    style={{ height: 200, width: 200 }}
                    // src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="green iguana"
                  />
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
