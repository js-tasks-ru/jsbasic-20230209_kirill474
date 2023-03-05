function highlight(table) {
  [...table.children[1].rows].map((item) => {
    let available = item.cells[3];
    let gender = item.cells[2].textContent;

    if (available.hasAttribute("data-available"))
      available.dataset.available === 'true' ? item.classList.add("available") : item.classList.add("unavailable");
    else item.hidden = true;

    gender === 'f' ? item.classList.add("female") : item.classList.add("male")

    let age = Number(item.cells[1].textContent);
    if (age < 18) item.style.textDecoration = "line-through";
  })
}
