import "./css/style.css";
const createButton = document.querySelector(".c-btn");
const closeButton = document.querySelector(".cl-btn");
const contactForm = document.querySelector("#c-form");
const ulContact = document.querySelector(".contacts") as HTMLElement;
const searchForm = document.querySelector("#search-form");
const filterTriger = document.querySelector(".filter-trigger")

import { addContactToUi, CONTACTS, filterAndsearchContact, Contact, addContactToStore } from "./contact";
import { contactMenu, toggleConctactMenu } from "./contactMenu";
import boxToggler, { resetFields } from "./contactForm";
import INT_INTANCE from "./phone";

export const contactListMessage = (message: string, conatcts: Contact[], callback?: Function) => {
  if (conatcts.length <= 0)
    return ulContact.innerHTML = `<div class='mx-auto text-gray-400'>${message}</div>`;
  if (callback) callback(conatcts)
}
// add form
createButton?.addEventListener("click", (): void => {
  boxToggler("false", undefined)
});

// close the form 
closeButton?.addEventListener("click", (): void => {
  boxToggler("true", undefined)
  resetFields();
});
filterTriger?.addEventListener("click", (e) => {
  const btn = e.target as HTMLElement;
  const id: string | undefined = btn.dataset.target;
  const filterList = document.querySelector(`#${id ?? ""}`);
  if (filterList?.classList.contains("hidden")) {
    filterList.classList.replace("hidden", "block")
  } else {
    filterList?.classList.replace("block", "hidden")
  }

})
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
    const id = `@${new Date().getTime()}`;
    const newContact: Contact = {
      id,
      firstname: firstname.value,
      lastname: lastname.value,
      phone: phoneNumber,
      category: category.value
    }
    addContactToStore(newContact)
    // createNewContact(newContact);
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

const getParams = () => {
  const location = window.location.toString();
  const url = new URL(location)
  const params = url.searchParams;
  return { params, url }
}

const setParams = (param: string, value: string) => {
  const { params, url } = getParams()
  if (params.has(param)) {
    // remove params when defautl category is provided 
    // or no search
    if (param === "search" && value === "" || param === "category" && value === "all") {
      params.delete(`${param}`);
      window.history.replaceState(false, '', url)
      return;
    };
  }

  params.set(param, value);
  window.history.replaceState(false, '', url)
}
const searchFormValues = (key: string) => {
  const form = searchForm as HTMLFormElement;
  const formdata = new FormData(form);
  const value = formdata.get(key) as string;
  return { value }
}
searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = searchFormValues("search")
  setParams("search", value);

  const { params } = getParams();

  const category = params.get("category") as string ?? "all";
  const searchPattern = params.get("search") as string ?? "";
  const contacts = filterAndsearchContact(category, searchPattern);

  contactListMessage("no contact found", contacts, () => addContactToUi(contacts))
});



document.querySelectorAll("#category-list label input").forEach((input) => {
  input.addEventListener("click", (e) => {
    const input = e.target as HTMLInputElement
    const value = input.value as string

    setParams("category", value);
    const { params } = getParams();

    const category = params.get("category") as string ?? "all";
    const searchPattern = params.get("search") as string ?? "";
    const contacts = filterAndsearchContact(category, searchPattern);
    contactListMessage("No contact found.", contacts, () => addContactToUi(CONTACTS))

  })
})


document.addEventListener("DOMContentLoaded", () => {
  contactListMessage("No contact.", CONTACTS, () => addContactToUi(CONTACTS))
});

