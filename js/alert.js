import { elements } from "./helpers.js";

export const alert = (message, className) => {
  elements.alert.classList = "alert";

  elements.alert.classList.add(`alert-${className}`);

  elements.alert.innerText = message;

  setTimeout(() => {
    elements.alert.classList = "alert";

    elements.alert.innerText = "";
  }, 2000);
};
