import Image from 'next/image'
import bragrund from '../../../public/image/004.png'
import logo_large from '../../../public/image/002.png'
import { Box } from '@mui/material'

export const Body = () => {
  return (
    <>
    <Box>
        <Box sx={{ zIndex: 'tooltip' }}>
        <Image 
    
    layout="intrinsic"
    src = {logo_large}
    alt="Picture of the author"
  
    />
    </Box>
   <Box sx={{ zIndex: 'modal',display:"block"}}>
      <Image 
    layout="intrinsic"
    src = {bragrund}
    alt="Picture of the author"
  
    />
    </Box>

    </Box>
    </>
  )
}
