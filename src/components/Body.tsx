import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Experiencia from "./Experiencia";
import resume from "../asset/resume.json";

export default function Body() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {resume.experience.map((exp) => {
        return (
          <ListItem>
            <Experiencia data={exp} />
          </ListItem>
        );
      })}
    </List>
  );
}
