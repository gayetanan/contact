import "./css/style.css";
const createButton = document.querySelector(".c-btn");
const closeButton = document.querySelector(".cl-btn");
const contactForm = document.querySelector("#c-form");
const ulContact = document.querySelector(".contacts")

import { addContactToUi, CONTACTS, OrderedContact, createNewContact } from "./contact";
import { contactMenu, toggleConctactMenu } from "./contactMenu";
import boxToggler, { resetFields } from "./contactForm";
import INT_INTANCE from "./phone";

// add form
createButton?.addEventListener("click", (): void => {
  boxToggler("false", undefined)
});

// close the form 
closeButton?.addEventListener("click", (): void => {
  boxToggler("true", undefined)
  resetFields();
});



// hander error message
function setErrorMsg(message: string): void {
  const messageElement = <HTMLElement>document.querySelector(".app__error");
  const isVisible = messageElement?.getAttribute("aria-error");
  if (isVisible !== "true") {
    messageElement?.setAttribute("aria-error", "true");
    messageElement.innerHTML = message;

    setTimeout(() => {
      messageElement.innerHTML = ""
      messageElement?.setAttribute("aria-error", "false");
    }, 6000)
  }
}


contactForm?.addEventListener("submit", (e): void => {
  e.preventDefault();
  const form = <HTMLFormElement>e.target;
  const fieldsCollection = form.elements;
  // Ignoring case there is multiple input with the same name;
  const firstname = fieldsCollection.namedItem("firstname") as HTMLInputElement;
  const lastname = fieldsCollection.namedItem("lastname") as HTMLInputElement;
  const isValidPhoneNumber = INT_INTANCE.isValidNumber();
  const phoneNumber = INT_INTANCE.getNumber();
  let category = fieldsCollection.namedItem("category") as HTMLInputElement;

  if (firstname.value.trim() === "" && lastname.value.trim() === "") {
    setErrorMsg("Please provide a name")
    return;
  };
  if (!isValidPhoneNumber && phoneNumber === "") {
    setErrorMsg("Phone number is required")
    return;
  };
  if (!isValidPhoneNumber && phoneNumber !== "") {
    setErrorMsg(`Invalide number for ${INT_INTANCE.getSelectedCountryData().name}`)
    return;
  }

  // update contact
  if (form.dataset.state === "edit") {
    const id = contactMenu.activeElement.id;
    const contact = CONTACTS.find((data) => id === data.id);
    if (contact) {
      contact.firstname = firstname.value;
      contact.lastname = lastname.value;
      contact.phone = INT_INTANCE.getNumber();
      contact.category = category.value;
    };

  } else {
    createNewContact(firstname.value, lastname.value, phoneNumber, category.value);
  }
  // loading contact toUI
  addContactToUi(CONTACTS);
  // reseting all fileds
  resetFields();
  // close box model
  boxToggler("true", undefined);
});


ulContact?.addEventListener("click", (e) => {
  const trigger = <HTMLElement>e.target;
  const contact = <HTMLElement>trigger?.parentElement?.parentElement;
  const top = trigger.getBoundingClientRect().height;
  // case the element that clicked it button
  if (trigger.tagName === "BUTTON" && trigger.classList.contains("contact-menu")) {
    toggleConctactMenu(contact, top)
  }

});

document.addEventListener("DOMContentLoaded", () => {
  OrderedContact(CONTACTS, "a");
  addContactToUi(CONTACTS);
});

