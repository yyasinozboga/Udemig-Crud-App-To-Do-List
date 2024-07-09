import { elements } from "./helpers.js";

export const editItem = (e) => {
  elements.editId = e.target.closest(".item").dataset.id;

  elements.editElement = e.target.closest(".btn-group").previousElementSibling;

  elements.input.focus();

  elements.input.value = elements.editElement.innerText;

  elements.addBtn.innerText = "Edit";

  elements.isEditing = true;
};
