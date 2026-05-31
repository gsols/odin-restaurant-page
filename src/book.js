function renderBook() {
    const content = document.querySelector("#content");
    const bookText = document.createElement("p");
    bookText.textContent = "Our restaurant is open from 11:00 AM to 10:00 PM, Monday to Sunday. We recommend making a reservation, especially on weekends, to ensure you get a table. You can book a table by calling us at (123) 456-7890 or by using our online reservation system on our website. We look forward to welcoming you and providing you with an exceptional dining experience!";
    content.appendChild(bookText);
}

export default renderBook;