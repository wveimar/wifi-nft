import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from './style.module.css'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ImageList
        sx={{ width: 1000 }}
        variant="quilted"
        cols={5}
        rowHeight={140}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className={style.imgWitch}
          >
            <img
              {...srcset(item.img, 100, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: "scale-down" }}
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
    rows: 2,
    cols: 2,
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
