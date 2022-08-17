import { useState } from "react";
import Image from "next/image";
import logo_small from "../../../public/image/002.png";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Menu,
} from "@mui/material";
import logoMetamask from "../../../public/image/metamask.png";
import logoOpenSea from "../../../public/image/openSea.png";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Home", url: "" },
  { name: "Akelarre", url: "akelarre666" },
  { name: "Road Mape", url: "roadMapa" },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "#07d5ed", height: "40px", color: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", marginTop: "-0.5rem"}}
        >
          <Button href="/" xs={{ display: { xs: "none", md: "flex" } }}>
            <Image
              src={logo_small}
              alt="Picture of the author"
              width={75}
              height={20}
            />
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={`/${page.url}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "flex" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
            {pages.map((page) => (
              <Link href={`/${page.url}`} key={page.name}>
                <Button style={{ color: "white" }}>{page.name}</Button>
              </Link>
            ))}
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Image height={"25px"} width={"25px"} src={logoMetamask} alt="logo metamask"/>
            </div>
            <a href="https://opensea.io/wifioficial">
              <Image height={"25px"} width={"25px"} src={logoOpenSea} alt="logo opensea"/>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
