import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import MobileStore from "../components/mobileStore";
export default function Navbar() {
  return (
    <AppBar sx={{ bgcolor: "#CC2D3C" }} elevation={2}>
      <Toolbar>
        <Container>
          <MobileStore />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
