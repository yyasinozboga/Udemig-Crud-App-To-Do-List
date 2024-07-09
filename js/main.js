import { elements } from "./helpers.js";
import { displayAddedItems } from "./localStorage.js";
import { addItem } from "./addItem.js";
import { clearItem } from "./clearItem.js";
import { alert } from "./alert.js";

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = elements.input.value;

  if (value !== "" && !elements.isEditing) {
    addItem(value);
  } else if (value !== "" && elements.isEditing) {
    elements.editElement.innerText = value;
    elements.addBtn.innerText = "Add";

    elements.items.forEach((item) => {
      if (item.id === Number(elements.editId)) {
        item.title = value;
      }
    });

    localStorage.setItem("items", JSON.stringify(elements.items));

    elements.isEditing = false;

    alert("Değer düzenlendi", "info");
  }

  elements.input.value = "";
});

elements.clearBtn.addEventListener("click", clearItem);

window.addEventListener("DOMContentLoaded", displayAddedItems);
