import First from "../../assets/bball.jpg";
import Second from "../../assets/brgyhall.jpg";
import Third from "../../assets/bg6.jpg";
import { Button } from "@mui/material";

export default [
  {
    title: "First Slide",
    description: "This is the first slider Image of our carousel",
    urls: First,
    button:  <Button sx={{ justifyContent: "center", mt:30 }} size="small" variant="outlined">Learn More</Button>
  },
  {
    title: "Second Slide",
    description: "This is the second slider Image of our carousel",
    urls: Second,
  },
  {
    title: "Third Slide",
    description: "This is the Third slider Image of our carousel",
    urls: Third,
  },
  {
    title: "Fourth Slide",
    description: "This is the Fourth slider Image of our carousel",
    urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg",
  },
  {
    title: "Fifth Slide",
    description: "This is the Fifth slider Image of our carousel",
    urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(147).jpg",
  },
  {
    title: "Sixth Slide",
    description: "This is the Sixth slider Image of our carousel",
    urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
  },
  {
    title: "Seventh Slide",
    description: "This is the Seventh slider Image of our carousel",
    urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg",
  },
];