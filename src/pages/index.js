import Galery from "../components/Galery";
import Image from "next/image";
import { Box, Button, Stack } from "@mui/material";
import logo_large from "../../public/image/002.png";
import bragrund from "../../public/image/fondo.png";
import SendIcon from "@mui/icons-material/Send";

const style = (theme) => ({
  zIndex: "2",
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("xl")]: {
    marginTop: "10rem",
    marginLeft: "8rem",
    maxWidth: "80rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "30rem",
  },
});

const styleBackgroundImage = (theme) => ({
  zIndex: "1",
  marginTop: "40px"
})

export default function Home() {
  return (
    <>
      <Box sx={style}>
        <Image
          layout="intrinsic"
          src={logo_large}
          alt="Picture of the author"
        />
      </Box>
      <Box sx={styleBackgroundImage}>
        <Image layout="intrinsic" src={bragrund} alt="color de fondo" />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mt={6}
        mb={2}
      >
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ backgroundColor: "#91d8f6", width: "30%" }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ backgroundColor: "#91d8f6", width: "30%" }}
        />
      </Stack>
      <Galery />
    </>
  );
}
