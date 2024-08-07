import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function dateFormat(string) {
  const date = new Date(string);
  return meses[date.getMonth()] + "/" + date.getFullYear();
}

export default function Experiencia(props) {
  const data = props.data;

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "70%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={data.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dateFormat(data.startDate)} -{" "}
                {data.endDate == "" ? "Atual" : dateFormat(data.endDate)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
