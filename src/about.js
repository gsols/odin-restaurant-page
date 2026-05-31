function renderAbout() {
    const content = document.querySelector("#content");
    const aboutText = document.createElement("p");
    aboutText.textContent = "Welcome to our restaurant! We are passionate about serving delicious food made from the freshest ingredients. Our menu features a variety of dishes inspired by global cuisines, crafted with care by our talented chefs. Whether you're in the mood for a hearty meal or a light bite, we have something for everyone. Join us for an unforgettable dining experience where great food meets exceptional service.";
    content.appendChild(aboutText);
}

export default renderAbout;