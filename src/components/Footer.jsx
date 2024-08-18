import React from "react";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <div>
        <IconButton href="https://github.com/ImAtharva4907" target="_blank" aria-label="GitHub">
          <GitHub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/imatharva" target="_blank" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://www.instagram.com/real_atharvaa" target="_blank" aria-label="Instagram">
          <Instagram />
        </IconButton>
      </div>
      <p style={{color:"black"}}>Made by Atharva Chahan</p>
      <p style={{color:"black"}}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
