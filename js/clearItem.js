import { elements } from "./helpers.js";
import { alert } from "./alert.js";

export const clearItem = () => {
  elements.itemList.innerHTML = "";
  elements.items = [];

  localStorage.setItem("items", JSON.stringify(elements.items));

  alert("Liste Temizlendi", "danger");

  elements.container.classList.remove("show");
};
