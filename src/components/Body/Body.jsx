import Image from "next/image";
import bragrund from "../../../public/image/fondo.png";
import logo_large from "../../../public/image/002.png";
import galery from "../../../public/image/007.png";
import { Box, Stack, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Galery from "../Galery"

const style = (theme) => ({
  zIndex: "2",
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up('xl')]: {
    marginTop: "10rem",
    marginLeft: "8rem",
    maxWidth: "80rem",
  },
 
  [theme.breakpoints.up('lg')]: {
    marginTop: "10rem",
    marginLeft: "7rem",
    maxWidth: "60rem",
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: "5rem",
    marginLeft: "6rem",
  },
  [theme.breakpoints.down('md')]: {
    marginTop: "6rem",
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

export const Body = () => {
  return (
    <>
      <Box >
        <Box sx={style}>
          <Image
            layout="intrinsic"
            src={logo_large}
            alt="Picture of the author"
          />
        </Box>
        <Box sx={{ zIndex: "1"}}>
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
      </Box>
    </>
  );
};
