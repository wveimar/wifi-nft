import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import wifiImg from "../../../public/image/002.png";
import { styled } from "@mui/material/styles";

const TextTitle = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  fontWeight: "bold"
}));

export const Footer = () => {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <Image src={wifiImg} width={200} height={50} />
      </div>
      <TextTitle>{"Proximamente nueva colección de NFT's"}</TextTitle>
    </>
  );
};
