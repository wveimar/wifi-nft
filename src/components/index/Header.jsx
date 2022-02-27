import Image from 'next/image'
import logo_small from '../../../public/image/002.png'
import { Box,Typography,AppBar,Toolbar } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const Header = () => {
 
  return (
    <>
    <ThemeProvider theme={theme}>
<Box alignItems="center">
      <AppBar position="static" sx={{ backgroundColor:"#aaabaf"}} >
        <Toolbar>
        <Image 
    src = {logo_small}
    alt="Picture of the author"
    width={300}
    height={80}

    />
    
          <Typography 
         variant="h2"
          component="div" 
          sx={{ flexGrow: 1 , ml:15}}
        
         
          >
            N F T ´ S Gallery
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>

    </ThemeProvider>
    </>
  )
}
