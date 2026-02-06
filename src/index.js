import "./css/topHalf.css";
import "./css/main.css";
import "./css/footer.css";
import flow from "./flow.png";

const ss = document.querySelector('.screenshot[number="1"]');

ss.style.backgroundImage = `url(${flow})`;
ss.style.backgroundSize = "cover"; // optional: make it cover the div
ss.style.backgroundPosition = "center"; // optional: center the image
