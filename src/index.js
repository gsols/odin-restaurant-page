import "./styles.css";
import image from "../public/images/1.png";

const right = document.querySelector(".home-right");
const image1 = document.createElement("img");
image1.src = image;
image1.alt = "home page image";
image1.classList.add("home-page-image");
right.appendChild(image1);
