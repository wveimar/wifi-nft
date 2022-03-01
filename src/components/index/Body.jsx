import Image from 'next/image'
import bragrund from '../../../public/image/004.png'
import logo_large from '../../../public/image/002.png'
import { Box } from '@mui/material'

const style = (theme) => ({
  zIndex: '2' , 
  position:"absolute" ,
  marginTop:"13rem" , 
  maxWidth: "90rem",
  [theme.breakpoints.down("sm")]: {
    marginTop:"4rem" 
  },
});

export const Body = () => {
  return (
    <>
    <Box >
        <Box  sx={style}>
        <Image 
    layout="intrinsic"
    src = {logo_large}
    alt="Picture of the author"
    />
    </Box>
   <Box sx={{ zIndex: '1',display:"block"}}>
      <Image 
    layout="intrinsic"
    src = {bragrund}
    alt="color de fondo"
  
    />
    </Box>

    </Box>
    </>
  )
}
