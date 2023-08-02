import {
  Box,
  Container,
  Stack,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MobileStore from "./mobileStore";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF9F9",
        paddingY: "25px",
        boxShadow: "0 4px 20px rgba(0,0,0,.15)",
        borderStartEndRadius: "100px",
        borderStartStartRadius: "100px",
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={1}>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
              width: { xs: "100%", sm: "100%", md: "50%" },
              height: "300px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Typography
              fontWeight={700}
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "revert",
                color: "#584139",
              }}
            >
              Download Our Mobile App
            </Typography>{" "}
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "revert",
                color: "#584139",
              }}
            >
              নির্ভুল ভাবে মিলের পাই টু পাই হিসাব রাখুন হাতের মোঠুই!
            </Typography>
            <MobileStore />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              height: "300px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: "#CC2D3C" }} />
                </ListItemIcon>
                <ListItemText primary="Phone" secondary="+8801623218618" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "#CC2D3C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary="mealmanagerhelp@gmail.com"
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: "#CC2D3C" }} />
                </ListItemIcon>
                <ListItemText primary="Address" secondary="Dhanmondi, Dhaka" />
              </ListItem>
            </List>
          </Box>
        </Stack>
        <Divider></Divider>
        <Typography align="center" sx={{ color: "gray", mt: "20px" }}>
          All Rights Reserved @ {new Date().getFullYear()} mealmanager.xyz
        </Typography>
      </Container>
    </Box>
  );
}
