import { elements } from "./helpers.js";
import { addItem } from "./addItem.js";
import { alert } from "./alert.js";

export const displayAddedItems = () => {
  const addedItemsList = localStorage.getItem("items");

  const addedItems = JSON.parse(addedItemsList);

  addedItems.forEach((item) => {
    addItem(item.title);
  });

  if (elements.items.length > 0) {
    alert("Değerler yüklendi", "success");
  }
};
