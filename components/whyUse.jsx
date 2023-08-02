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
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Fade from "react-reveal/Fade";
export default function WhyUse() {
  return (
    <Box sx={{ background: "#FFF9F9" }}>
      <Container>
        <Typography
          sx={{ color: "#CC2D3C" }}
          pt={7}
          align="center"
          variant="bold"
          component="h1"
        >
          ব্যবহারের সুবিধা ও ফিচার্স সমূহ
        </Typography>
        <Divider>
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
        </Divider>
        <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={10}>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
            }}
          >
            <List>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="ব্যবহারের সুবিধা"
                    secondary="Meal Manager একটি Online ভিত্তিক সেবা প্রদান কারি Mobile App।এটি ব্যবহার একদম সহজ সাথে রয়েছে দারুন সুবিধা।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="SMS সুবিধা"
                    secondary="মিলে কোন মেম্বার টাকা জমা দিলে তার ফোনে SMS যাবে সাথে সাথেই।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email Notification"
                    secondary="মেম্বার দের প্রতিদিনের মিলের উপডেট সাথে সাথেই Email এ Automatic সেন্ড হবে।কার কত গুলি মিল উঠানো হয়েছে।"
                  />
                </ListItem>
              </Fade>{" "}
              <Fade bottom delay={200} duration={2000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="বাজারের তালিকা"
                    secondary="তৈরী করা যাবে বাজার তালিকা। কার কবে বাজার Notification পাওয়া যাবে প্রতিদিন।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={100} duration={1000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="সকল হিসাব এক পলকে"
                    secondary="মেম্বার দের সকল হিসাব এক পলকেই। কে কত টাকা জমা দিয়েছে ,কত গুলি মিল হয়েছে ,ব্যলেন্স কত আছে সব সময় চখের সামনেই।এক জন মেম্বারের টুকি টাকি সকল তথ্য এক ক্লিকেই চখের সামনে।"
                  />
                </ListItem>
              </Fade>
            </List>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
              py: "50px",
            }}
          >
            <List>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="হিসাব হিস্ট্রি"
                    secondary="কে কবে কত টাকা জমা দিয়েছে, কত টাকা বাজার করেছে তার হিস্ট্রি এক নজরেই।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Meal Report"
                    secondary="আছে মেম্বার দের হিসাবের Report তৈরী করার সুবিধা ও তার সাথে সিয়ার করুন এক ক্লিকেই।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Utility Bill"
                    secondary="আছে নানান প্রকার Utility বিল যুক্ত করার সুবিধা।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="User Interface"
                    secondary="App টির UI খুবই পরিস্কার ভাবে ডিজাইন করা হয়েছে।তাই ব্যবহার এক দম সহজ।"
                  />
                </ListItem>
              </Fade>
              <Fade bottom delay={300} duration={3000}>
                <ListItem className="item">
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="ডাটা সেফটি"
                    secondary="আপনার হিসাব-নিকাশ সব সময় নিরাপদ। কখনো হারিয়ে যাবার ভয় নেই। App টি Google Server এর সাথে কানেক্ট্রেড।"
                  />
                </ListItem>
              </Fade>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
