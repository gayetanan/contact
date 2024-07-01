import { contactListMessage } from "./main";

// contact type
export type Contact = {
  id: string,
  firstname: string,
  lastname: string,
  category: string,
  cover?: string,
  phone: string,
}
const api = (): Contact[] | null => {
  const store = localStorage.getItem("contacts");
  if (store) {
    return JSON.parse(store)
  }
  return null

}
const setItemToStore = (contacts: Contact[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}
let CONTACTS: Contact[] = api() ?? [];

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
               class="w-fit text-[10px] py-[2px] px-2">${contact.category.slice(0, 1).toUpperCase()}${contact.category.slice(1)}</span>
           </div>
         </div>
         <div>
           <button type="button" class="contact-menu bg-gray-200 inline-flex p-1 rounded-full">
             <i class='bx bx-dots-vertical-rounded'></i>
           </button>
         </div>

       </li>`
};

const addContactToUi = (contacts: Contact[]): void => {
  const contactList: Element = document.querySelector(".contacts")!;
  const contactData = contacts.map((conatct) => {
    return contactUIComponent(conatct);
  });
  contactList.innerHTML = contactData.join(" ");
};
//order contact data
const OrderedContact = (contacts: Contact[], orderType: "a" | "b") => {
  if (contacts.length >= 0 && contacts.length < 2) {
    return;
  }
  contacts.sort((a, b): number => {
    const f1 = (a.firstname + a.lastname).toLowerCase();
    const f2 = (b.firstname + b.lastname).toLowerCase();
    if (f1 > f2 && orderType === "a") return 1
    if (f1 < f2 && orderType === "b") return -1
    return 0
  });
};

// Delete contact by ID
const deleteContact = (contactElement: HTMLElement, id: string): void => {
  CONTACTS?.forEach((contact, idx) => {
    if (contact.id === id) {
      CONTACTS.splice(idx, 1);
      setItemToStore(CONTACTS);
    }
  })
  // contact element to UI
  contactElement.remove();
  contactListMessage("No contact.", CONTACTS)
}

const filterAndsearchContact = (category: string, search: string): Contact[] => {
  const searchPattern = search.toLowerCase().trim();
  if (category === "all" && searchPattern === "") {
    return CONTACTS;
  }

  const filteredContacts = CONTACTS.filter((contact, idx) => {
    const fullname = (contact.firstname + " " + contact.lastname).toLowerCase();
    if (category !== "all" && searchPattern === "") {
      return contact.category === category;
    }
    if (category === "all" && searchPattern !== "") {
      return fullname.indexOf(searchPattern) >= 0;
    }
    if (category !== "all" && searchPattern !== "") {
      return contact.category === category && fullname.indexOf(searchPattern) >= 0;
    }
  })

  return filteredContacts
};


// add contact to local storae
const addContactToStore = (contact: Contact): void => {
  const store = api();
  let newContactData = []
  if (!store) {
    newContactData.push(contact)
  } else {
    newContactData = store
    newContactData.push(contact);
    OrderedContact(newContactData, "a");
  }
  setItemToStore(newContactData)
  CONTACTS = newContactData
};
export { addContactToUi, CONTACTS, OrderedContact, deleteContact, filterAndsearchContact, addContactToStore }
