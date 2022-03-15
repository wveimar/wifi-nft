import Image from "next/image";
import bragrund from "../../../public/image/004.png";
import logo_large from "../../../public/image/002.png";
import galery from "../../../public/image/007.png";
import { Box, Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const style = (theme) => ({
  zIndex: "2",
  position: "absolute",
  [theme.breakpoints.up('xl')]: {
    marginTop: "18rem",
    marginLeft: "8rem",
    maxWidth: "80rem",
  },
 
  [theme.breakpoints.up('lg')]: {
    marginTop: "15rem",
    marginLeft: "7rem",
    maxWidth: "60rem",
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: "11rem",
    marginLeft: "6rem",
    maxWidth: "47rem",
  },
  [theme.breakpoints.down('md')]: {
    marginTop: "8rem",
    marginLeft: "5.5rem",
    maxWidth: "30rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "5rem",
    marginLeft: "2em",
    maxWidth: "20rem",
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
        <Box sx={{ zIndex: "1", position:"relative" }}>
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
        <Image layout="intrinsic" src={galery} alt="Picture of the author" />
      </Box>
    </>
  );
};
