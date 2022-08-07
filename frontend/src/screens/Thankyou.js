import React from 'react'
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Thankyou = () => {
    return (
        <>
            <Typography
                variant="h4"
                noWrap
                color="primary"
                position="relative"
                align="center"
                sx={{
                    mt: 20,
                    fontWeight: "bold",
                }}
            >
                Thank you for adopting me
            </Typography>
            <Typography
                variant="h6"
                noWrap
                color="blackv2"
                position="relative"
                align="center"
            >
                We will contact you soon!
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
                        >
                            View Other Animals
                        </Typography>
                    </Button>
                </Link>
            </Box>

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
                        >
                            View Other Animals
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default Thankyou