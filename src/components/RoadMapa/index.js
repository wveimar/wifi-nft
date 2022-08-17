import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import roadMapa from "../../../public/image/RoadMap.png";

const index = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://imgur.com/183RGwa.jpg")`,
        height: "100rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ height: "5rem" }}></div>
        <Image src={roadMapa} width={700} height={350} alt="logo road mapa"/>
      </div>
      <div style={{ height: "5rem" }}></div>
      <div style={{ width: "750px", marginRight: "auto", marginLeft: "auto" }}>
        <Typography
          variant="p"
          sx={{ fontSize: "1.8rem", textAlign: "center" }}
        >
          Es un proyecto de NFT colombiano que integra una colección de 666
          brujas que fueron asesinadas en la inquisición; cada bruja, construida
          en modelos 3D, tiene una identidad propia, un número exclusivo que
          determina su rareza y posición en el Akelarre y que del permite NFT la
          experiencia Metaverso a los poseedores inmersión de en brujería en una
          el donde cada poseedor, podrá visitar diferentes mundos (5 o 10)
          concepto exclusivos, basado brujería,en ancestraly un enla 100% la en
          con decodiﬁcación resolver dudas que le perturben, referenciando a su
          presente y futuro, mediante técnicas la de estudio brujería Tarot y la
          Egipcio, basadas lectura por una de en del las brujas más conocidas en
          el mundo digital, latinoamericano: SoyLaDyva
        </Typography>
      </div>
    </div>
  );
};

export default index;
