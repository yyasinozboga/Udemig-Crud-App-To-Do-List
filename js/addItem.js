import { elements } from "./helpers.js";
import { deleteItem } from "./deleteItem.js";
import { editItem } from "./editItem.js";
import { alert } from "./alert.js";

export const addItem = (value) => {
  const id = Math.random() * 999999999999999;

  const item = document.createElement("div");

  const attr = document.createAttribute("data-id");

  attr.value = id;

  item.setAttributeNode(attr);

  item.innerHTML = `
              <h3 class="item-title">${value}</h3>
              <div class="btn-group">
                  <button class="item-edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="item-delete-btn">
                      <i class="fa-solid fa-trash-can"></i>
                  </button>
              </div>
          `;

  item.classList.add("item");

  elements.itemList.appendChild(item);

  const deleteBtn = item.querySelector(".item-delete-btn");
  deleteBtn.addEventListener("click", deleteItem);

  const editBtn = item.querySelector(".item-edit-btn");
  editBtn.addEventListener("click", editItem);

  const newItem = {
    id,
    title: value,
  };

  elements.items.push(newItem);

  localStorage.setItem("items", JSON.stringify(elements.items));

  elements.container.classList.add("show");

  alert("Değer eklendi", "success");
};
