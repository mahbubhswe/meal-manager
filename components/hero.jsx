import { Container, Typography } from "@mui/material";
import React from "react";
export default function Hero() {
  return (
  
      <Container
        sx={{ height: {xs:"800px",sm:"700px",md:"600px"}, display: "grid", placeContent: "center" }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{ textAlign: "center", fontFamily: "initial" }}
        >
          We make your mess life easy! Start your mess life with
          <span style={{ color: "#CC2D3C" }}> Meal Manager App.</span>
        </Typography>
        <Typography
          fontWeight={700}
          variant="h4"
          sx={{ textAlign: "center", fontFamily: "initial", color: "#584139" }}
        >
          নির্ভুল ভাবে মিলের পাই টু পাই হিসাব রাখুন হাতের মোঠুই!
        </Typography>
      </Container>
 
  );
}
