import INT_INTANCE from "./phone";
import "./css/style.css";
const createButton = document.querySelector(".c-btn");
const closeButton = document.querySelector(".cl-btn");
const contactForm = document.querySelector("#c-form");
const ulContact = document.querySelector(".contacts")
import contacts from "./data/datas.json"


closeButton?.addEventListener("click", (e) => {
  const button = <HTMLElement>e.target;
  boxToggler("true", button)
});
// hander error message
function setErrorMsg(message: string) {
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
// reset fields
function resetFields() {
  const firstnameInput = document.querySelector("#firstname") as HTMLInputElement;
  const lastnameInput = document.querySelector("#lastname") as HTMLInputElement;
  const categoryInput = document.querySelector("#category") as HTMLSelectElement;
  firstnameInput.value = '';
  lastnameInput.value = '';
  categoryInput.value = "friend"
  INT_INTANCE.setNumber("");
}
// Open BOX MODEL FOR CREATING Contact
const boxToggler = (state: string, trigger: HTMLElement): void => {
  const boxID = trigger.dataset.target!;
  const boxModel = document.querySelector(boxID);
  boxModel?.setAttribute("aria-hidden", state);
};
createButton?.addEventListener("click", (e) => {
  const button = <HTMLElement>e.target;
  boxToggler("false", button)
});

/////////////////////////////////////////

type Contact = {
  id: string,
  firstname: string,
  lastname?: string,
  cover?: string
  category: string,
  phone: string
}
const CONTACTS: Contact[] = contacts;

/// order contact data
const OrderedContact = (contacts: Contact[], orderType: "a" | "b") => {
  if (contacts.length >= 0 && contacts.length < 2) {
    return contacts;
  }
  contacts.sort((a, b): number => {
    const f1 = (a.firstname + a.lastname).toLowerCase();
    const f2 = (b.firstname + b.lastname).toLowerCase();
    if (f1 > f2 && orderType === "a") return 1
    if (f1 < f2 && orderType === "b") return -1
    return 0
  })
};

const contactUIComponent = (contact: Contact): string => {
  return `
    <li class="flex justify-between items-center relative" data-id="${contact.id}">
         <div class="flex items-center gap-4">
           <div class="w-10 rounded-full overflow-hidden">
             <img src="${contact.cover}">
           </div>
           <div class="grid gap-[2px]">
             <span class="text-base font-bold">${contact.firstname} ${contact.lastname ?? ""}</span>
             <span aria-${contact.category}
               class="w-fit text-[10px] py-[2px] px-2 aria-[${contact.category}]:bg-yellow-300 rounded-md">Family</span>
           </div>
         </div>
         <div>
           <button type="button" class="contact-menu bg-gray-200 inline-flex p-1 rounded-full">
             <i class='bx bx-dots-vertical-rounded'></i>
           </button>
         </div>

       </li>`
};
// Displaying contact to UI
const addContactToUi = (contacts: Contact[]): void => {
  const contactList: Element = document.querySelector(".contacts")!;
  const contactData = contacts.map((conatct) => {
    return contactUIComponent(conatct);
  });
  contactList.innerHTML = contactData.join(" ");
};

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = <HTMLFormElement>e.target;
  const fieldsCollection = form.elements;
  // Ignoring case there is multiple input with the same name;
  const firstname = fieldsCollection.namedItem("firstname") as HTMLInputElement;
  const lastname = fieldsCollection.namedItem("lastname") as HTMLInputElement;
  const isValidPhoneNumber = INT_INTANCE.isValidNumber();
  const phoneNumber = INT_INTANCE.getNumber()

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
  let actualCategory = category.value || "friend";
  const id = new Date().getTime()

  const newContact: Contact = {
    id: `@${id}`,
    firstname: firstname.value,
    lastname: lastname.value,
    category: actualCategory,
    phone: phoneNumber
  };
  // add contact to contact store
  CONTACTS.push(newContact);
  // sort array
  // loading contact toUI
  addContactToUi(CONTACTS);
  // reseting all fileds
  resetFields();
  // close box modle
  boxToggler("true", <HTMLElement>closeButton);
});


type ContactMenu = {
  position: {
    top: number,
    right?: number
  },
  activeElement: {
    id: string | null,
    element: HTMLElement | null
  }
}
const contactMenu: ContactMenu = {
  position: { top: 0, right: 0 },
  activeElement: {
    id: null,
    element: null
  }
}



const resetActiveElement = () => {
  contactMenu.activeElement.id = null
  contactMenu.activeElement.element = null
}
// Create contact Menu;
const setContactMenu = (clickedContact: HTMLElement | null | undefined) => {
  const contactMenuClassList = "menu absolute z-50 bg-white text-sm p-1 grid justify-start gap-2 border-[1px] border-gray-900/10 rounded-md"
  const contactMenuElementCtn = document.createElement("div");

  contactMenuElementCtn.setAttribute("class", contactMenuClassList);
  contactMenuElementCtn.innerHTML = `<button data-type="edit" class="p-[2px] bg-purple-700 hover:bg-purple-400 rounded-sm">Edit</button><button data-type="delete" class="text-red-500 hover:text-red-700">delete</button>`;

  contactMenuElementCtn.style.top = `${contactMenu.position.top + 12}px`;
  contactMenuElementCtn.style.right = `${contactMenu.position.right ?? 0}px`;

  if (clickedContact) {
    clickedContact.appendChild(contactMenuElementCtn);
    contactMenuElementCtn.addEventListener("click", (e) => {
      const button = e.target as HTMLElement;

      if (button.dataset.type === "delete") {
        // grab id of the current active element
        const id = contactMenu.activeElement.id;
        // remove that element from contact list
        CONTACTS.forEach((contact, idx) => {
          if (contact.id === id) CONTACTS.splice(idx, 1)
        })
        // remove that element form UI
        contactMenu.activeElement.element?.remove();
        // reset contact Menu
        resetActiveElement();
      };

    })
  }
};
// Remove Contact Menu to UI
const removeMenu = () => {
  const menu = <HTMLElement>document.querySelector(".menu");
  menu.remove();
}
// Toggle Contact Menu to UI
const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {
  if (!contactMenu.activeElement?.element) {
    contactMenu.position = { top }
    contactMenu.activeElement.element = contactUiElement;
    contactMenu.activeElement.id = contactUiElement.dataset.id!
    setContactMenu(contactUiElement);
    return;

  };
  if (contactMenu.activeElement?.element === contactUiElement) {
    resetActiveElement()
    removeMenu();
    return;
  };
  if (contactMenu.activeElement?.element && contactMenu.activeElement?.element !== contactUiElement) {
    removeMenu();
    contactMenu.position = { top }
    contactMenu.activeElement.element = contactUiElement;
    contactMenu.activeElement.id = contactUiElement.dataset.id!
    setContactMenu(contactUiElement);
    return;
  }
}

ulContact?.addEventListener("click", (e) => {
  const trigger = <HTMLElement>e.target;
  const contact = <HTMLElement>trigger?.parentElement?.parentElement;
  const triggerDetails = trigger.getBoundingClientRect();
  // case the element that clicked it button
  if (trigger.tagName === "BUTTON" && trigger.classList.contains("contact-menu")) {
    toggleConctactMenu(contact, triggerDetails.height)
  }

});

document.addEventListener("DOMContentLoaded", () => {
  OrderedContact(CONTACTS, "a")
  addContactToUi(CONTACTS)
});