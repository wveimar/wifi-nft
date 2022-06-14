import Image from "next/image";
import logo_small from "../../../public/image/002.png";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import logoMetamask from "../../../public/image/metamask.png";
import logoOpenSea from "../../../public/image/openSea.png";

// const style = (theme) => ({
//   flexGrow: "1",

//   [theme.breakpoints.up("xl")]: {},

//   [theme.breakpoints.up("lg")]: {
//     marginLeft: "7rem",
//     fontSize: "2rem",
//     marginTop: "-30px",
//   },
//   [theme.breakpoints.down("lg")]: {
//     marginLeft: "5rem",
//     fontSize: "3.8rem",
//   },
//   [theme.breakpoints.down("md")]: {
//     marginLeft: "0.5rem",
//     fontSize: "2.3rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     marginLeft: "0.3rem",
//     fontSize: "1.3rem",
//   },
// });

export const Header = () => {
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#07d5ed", height: "35px" }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Toolbar>
              <div style={{ marginTop: "-30px", marginLeft: "-12px" }}>
                <Image
                  src={logo_small}
                  alt="Picture of the author"
                  width={75}
                  height={20}
                />
              </div>
            </Toolbar>
          </Box>
          <Box
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginRight: "10px"
            }}
          >
            <div style={{marginLeft: "10px", marginRight: "10px"}}>
              <Image height={"25px"} width={"25px"} src={logoMetamask} />
            </div>
            <div>
              <Image height={"25px"} width={"25px"} src={logoOpenSea} />
            </div>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};
