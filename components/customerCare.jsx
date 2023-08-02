import {
  Box,
  Container,
  Stack,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Fade from "react-reveal/Fade";
export default function CustomerCare() {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      autoplay: true,

      animationData: require("../public/customerCare.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <Box sx={{ background: "#FFFFFF" }}>
      <Container>
        <Typography
          sx={{ color: "#CC2D3C" }}
          pt={7}
          align="center"
          variant="bold"
          component="h1"
        >
          কাস্টমার সেবা
        </Typography>
        <Divider>
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
          <AdjustIcon fontSize="3" />
        </Divider>
        <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
          {" "}
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
            }}
          >
            <p ref={container} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "50%" },
              display: "grid",
              placeContent: "center",
              py: "50px",
            }}
          >
            <Fade bottom delay={300} duration={3000}>
              <ListItem className="item">
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#CC2D3C" }} />
                </ListItemIcon>
                <ListItemText>
                  যে কোন ধরণের সমস্যাই আমাদের আছে ২৪/৭ ঘন্টা কাস্টমার সেবা।
                  আপনার প্রয়োজনে আমরা আছি সব সময় পাসে।
                </ListItemText>
              </ListItem>
            </Fade>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
