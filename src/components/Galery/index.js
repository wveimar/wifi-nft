import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import * as React from "react";
import style from './style.module.css'

export default function QuiltedImageList() {
  return (
    <div >
      <ImageList rowHeight={180} sx={{
        display: "flex", 
        overflow: 'hidden',
        width: 1000,
        height: 350,
        marginLeft: "auto", marginRight: "auto", marginTop: "5%"
      }}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={item.img} alt={item.title} className={style.imgWitch} />
            <ImageListItemBar
              sx={{borderRadius: "0 0 10px 10px", height: "45px"}}
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
            //   actionIcon={
            //     <IconButton aria-label={`info about ${item.title}`} className={{ color: 'rgba(255, 255, 255, 0.54)'}}>
            //     {/* <InfoIcon /> */}
            //     </IconButton>
            // }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://imgur.com/yBKH6vD.jpg",
    title: "Bruja1",
    author: "@akelarre",
  },
  {
    img: "https://imgur.com/yBKH6vD.jpg",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://imgur.com/7lrNWJe.jpg",
    title: "Bruja2",
    author: "@akelarre726",
  },
  {
    img: "https://imgur.com/MtEbyZ0.jpg",
    title: "Bruja3",
    author: "@akelarre",
  },
  {
    img: "https://imgur.com/MtEbyZ0.jpg",
    title: "Bruja3",
    author: "@akelarre",
  },
  {
    img: "https://imgur.com/yBKH6vD.jpg",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://imgur.com/7lrNWJe.jpg",
    title: "Bruja2",
    author: "@akelarre726",
  },

];
