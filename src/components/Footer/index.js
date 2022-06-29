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

const styleLogo = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "200px",
});

const style1 = () => ({
  zIndex: "-1",
  position: "absolute",
});

const style2 = (theme) => ({
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Footer = () => {
  return (
    <>
      <Box sx={style1}>
        <Image src={imgFooter} />
      </Box>
      <Box sx={styleLogo}>
        <Image src={wifiImg} width={250} height={75} />
      </Box>
      <Box sx={style2}>
        <a href="https://t.me/wifimarco" style={{ margin: "10px" }}>
          <Image src={telegramIcon} width={50} height={50} />
        </a>
        <a href="https://www.fb.com/marwifico" style={{ margin: "10px" }}>
          <Image src={facebookIcon} width={50} height={50} />
        </a>
        <a href="https://www.Twitter.Com/wifioficialnft " style={{ margin: "10px" }}>
          <Image src={twiterIcon} width={50} height={50} />
        </a>
        <div style={{ margin: "10px" }}>
          <Image src={DiscordIcon} width={50} height={50} />
        </div>
        <a href="https://www.instagram.com/wifioficial" style={{ margin: "10px" }}>
          <Image src={InstagramIcon} width={50} height={50} />
        </a>
      </Box>
    </>
  );
};
