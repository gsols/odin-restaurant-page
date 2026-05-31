import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";
import renderBook from "./book";

const navBtns = document.querySelectorAll(".nav-btn");

function refresh() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    navBtns.forEach((btn) => {
        btn.classList.remove("selected");
    });
}

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    refresh();
    homeBtn.classList.add("selected");
    renderHome();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    refresh();
    menuBtn.classList.add("selected");
    renderMenu();
});

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
    refresh();
    aboutBtn.classList.add("selected");
    renderAbout();
});


homeBtn.click();

export {refresh};