import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { InputField } from "../../components/input-field";
import "./index.css";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import TourIcon from "@mui/icons-material/Tour";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CallIcon from "@mui/icons-material/Call";
import useMediaQuery from '@mui/material/useMediaQuery';
const primaryColor = "#27AE60";

const GodrejNagpurPlots = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const verifyUser = () => {
    if (name && (mobile || email)) {
      fetch(
        "https://spacebhk-1dd97-default-rtdb.firebaseio.com/spacebhk.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            mobile,
            email,
            message : "plot"
          }),
        }
      );
      alert("Your enquiry sent successfully, thanks");
    } else {
      if (!name) {
        alert("Enter Name");
      }
      if (!mobile && !email) {
        alert("Enter contact number or email address");
      }
    }
  };
  return (
    <div>
      <div>
        <img
          src="/nagpur_plots/godrejplot.jpg"
          width={"100%"}
          height={matches ? "700px" : "100%"}
        />
      </div>
      <div className="overlay-box">
        <Grid container>
          <Grid item xs={3} sm={3} sx={{ backgroundColor: "#ECF0F1", borderRadius: 2 }}>
            <Typography
              sx={{ color: primaryColor }}
              mt={2}
              mb={5}
              align="center"
              variant="h5"
            >
              We Promise
            </Typography>
            <Typography align="center">
              <PhoneCallbackIcon sx={{ fontSize: 60, color: primaryColor }} />
            </Typography>

            <Typography mb={2} align="center" sx={{ color: primaryColor }}>
              Instant Call Back
            </Typography>
            <Typography align="center">
              <TourIcon sx={{ fontSize: 60, color: primaryColor }} />
            </Typography>
            <Typography mb={2} sx={{ color: primaryColor }} align="center">
              Site Visit
            </Typography>
            <Typography align="center">
              <CurrencyRupeeIcon sx={{ fontSize: 60, color: primaryColor }} />
            </Typography>
            <Typography mb={2} sx={{ color: primaryColor }} align="center">
              Unmatched Price
            </Typography>
          </Grid>
          <Grid item xs={9} sm={9} p={2}>
            <Typography align="center" variant="h4">
              Godrej Plots - Nagpur
            </Typography>
            <Typography align="center" variant="h6">
              Register here and avail the Best Offers!!
            </Typography>
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              id="standard-password-input"
              label="Name"
              type="text"
              variant="standard"
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              id="standard-password-input"
              label="Mobile No."
              type="text"
              variant="standard"
              onChange={(event) => setMobile(event.target.value)}
            />
            <TextField
              sx={{ marginTop: 2 }}
              fullWidth
              id="standard-password-input"
              label="Email"
              type="text"
              variant="standard"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Typography align="left" mt={5}>
              <Button
                onClick={verifyUser}
                variant="contained"
                sx={{ backgroundColor: primaryColor }}
              >
                Get Instant Call Back
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            backgroundColor: primaryColor,
            color: "#FFFFFF",
            borderRadius: 2,
          }}
          align="center"
          variant="h6"
        >
          Call us : +91 7887578111
        </Typography>
      </div>
    </div>
  );
};

export default GodrejNagpurPlots;
