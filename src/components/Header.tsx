import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import resume from "../asset/resume.json";

export default function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#4684DB",
      }}
      display="flex"
      alignItems="center"
      p={2}
      pl={8}
      pr={8}
    >
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} md={2}>
          <img
            style={{
              borderRadius: "50%",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "auto 80px",
            }}
            src={resume.image_profile}
          />
        </Grid>
        <Grid item xs={8} md={4}>
          <Typography variant="h3" color={"#FFFFFF"} gutterBottom>
            {resume.name}
          </Typography>
          <Typography variant="subtitle1" color={"#FFFFFF"} gutterBottom>
            {resume.about}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
