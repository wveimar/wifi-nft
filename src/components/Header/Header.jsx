import Image from "next/image";
import logo_small from "../../../public/image/002.png";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";

const style = (theme) => ({
  flexGrow: "1",

  [theme.breakpoints.up("xl")]: {},

  [theme.breakpoints.up("lg")]: {
    marginLeft: "7rem",
    fontSize: "5rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "5rem",
    fontSize: "3.8rem",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0.5rem",
    fontSize: "2.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0.3rem",
    fontSize: "1.3rem",
  },
});

export const Header = () => {
  return (
    <>
      <Box alignItems="center">
        <AppBar position="static" sx={{ backgroundColor: "#aaabaf" }}>
          <Toolbar>
            <Image
              src={logo_small}
              alt="Picture of the author"
              width={200}
              height={40}
            />

            <Typography variant="h2" component="div" sx={style}>
              N F T ´ S Gallery
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
