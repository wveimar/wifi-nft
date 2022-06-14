import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import wifiImg from "../../../public/image/002.png";
import { styled } from "@mui/material/styles";
import DiscordIcon from "../../../public/image/dicordIcon.png";
import InstagramIcon from "../../../public/image/instagramIcon.png";

const TextTitle = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold",
}));

export const Footer = () => {
  return (
    <>
      <div
        style={{ textAlign: "center", height: "150px", background: "#07d5ed" }}
      >
        <div
          style={{
            padding: "40px",
          }}
        >
          <Image src={wifiImg} width={200} height={50} />
          <Image src={DiscordIcon} width={50} height={50} />
          <Image src={InstagramIcon} width={45} height={45} />
        </div>
        <div></div>
      </div>
    </>
  );
};
