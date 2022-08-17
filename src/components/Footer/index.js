import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import wifiImg from "../../../public/image/002.png";
import DiscordIcon from "../../../public/image/discord.png";
import InstagramIcon from "../../../public/image/instagram.png";
import imgFooter from "../../../public/image/footer.png";
import facebookIcon from "../../../public/image/facebook.png";
import telegramIcon from "../../../public/image/telegram.png";
import twiterIcon from "../../../public/image/Twiter.png";
import { Box } from "@mui/material";

const styleGlobal = (theme) => ({
  height: "1rem"
})

const styleBackgroundFooter = () => ({
  zIndex: "-1",
  position: "absolute",
  height: "50px"
});

const styleLogo = (theme) => ({
  marginRight: "auto",
  marginLeft: "auto",
  paddingTop: "10rem",
  height: "75px",
  width: "225px",
  [theme.breakpoints.down("sm")]: {
    height: "10px",
    width: "150px",
    marginTop: "-6rem",
    paddingTop: "-2rem"
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "5rem",
    height: "50px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "30px",
  },
});

const logoWifi = (theme) => ({
  [theme.breakpoints.down("xs")]: {
    height: "25px",
    width: "50px",
  },
})

const styleIconSocial = (theme) => ({
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  [theme.breakpoints.down("sm")]: {
    height: "0.5px",
    with: "10px",
    paddingTop: "0.2rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "-1rem",
  },
});

export const Footer = () => {
  return (
    <Box sx={styleGlobal}>
      <Box sx={styleBackgroundFooter}>
        <Image src={imgFooter} alt="fondo"/>
      </Box>
      <Box sx={styleLogo}>
        <Image src={wifiImg} sx={logoWifi} layout="intrinsic" alt="wifi imagen logo"/>
      </Box>
      <Box sx={styleIconSocial}>
        <a href="https://t.me/wifimarco" style={{ margin: "10px" }}>
          <Image src={telegramIcon} width={40} height={40} alt="telegram img"/>
        </a>
        <a href="https://www.fb.com/wifioficialco" style={{ margin: "10px" }}>
          <Image src={facebookIcon} width={40} height={40} alt="facebook img" />
        </a>
        <a href="https://www.Twitter.Com/wifioficialnft " style={{ margin: "10px" }}>
          <Image src={twiterIcon} width={40} height={40} alt="twiter img"/>
        </a>
        <div style={{ margin: "10px" }}>
          <Image src={DiscordIcon} width={40} height={40} alt="discord img" />
        </div>
        <a href="https://www.instagram.com/wifioficial" style={{ margin: "10px" }}>
          <Image src={InstagramIcon} width={40} height={40} alt="instagram img" />
        </a>
      </Box>
    </Box>
  );
};
