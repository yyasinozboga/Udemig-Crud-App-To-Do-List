import { elements } from "./helpers.js";
import { alert } from "./alert.js";

export const deleteItem = (e) => {
  const item = e.target.closest(".item");

  const id = item.dataset.id;

  elements.itemList.removeChild(item);

  elements.items.forEach((item, i) => {
    if (item.id === Number(id)) {
      elements.items.splice(i, 1);
    }
  });

  if (elements.items.length === 0) {
    elements.container.classList.remove("show");
  }

  localStorage.setItem("items", JSON.stringify(elements.items));

  alert("Değer silindi", "danger");
};
