import contacts from "./data/datas.json"

// contact type
export type Contact = {
  id: string,
  firstname: string,
  lastname: string,
  category: string,
  cover?: string,
  phone: string,
}
const CONTACTS: Contact[] = contacts;

const contactUIComponent = (contact: Contact): string => {
  return `
    <li class="flex justify-between items-center relative" data-id="${contact.id}">
         <div class="flex items-center gap-4">
           <div class="w-10 rounded-full overflow-hidden">
             <img src="${contact.cover}">
           </div>
           <div class="grid gap-[2px]">
             <span class="text-base font-bold">${contact.firstname} ${contact.lastname ?? ""}</span>
             <span aria-${contact.category}{
               class="w-fit text-[10px] py-[2px] px-2 aria-[${contact.category}]:bg-yellow-300 rounded-md">${contact.category.slice(0, 1).toUpperCase()}${contact.category.slice(1)}</span>
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

  CONTACTS.forEach((contact, idx) => {
    if (contact.id === id) {
      CONTACTS.splice(idx, 1);
    }
  })
  // contact element to UI
  contactElement.remove();
}
// Push contact to LIST CONTACTS
const createNewContact = (firstname: string, lastname: string, phone: string, category: string) => {
  const id = `@${new Date().getTime()}`;
  const newContact: Contact = {
    id,
    firstname,
    lastname,
    phone,
    category
  }
  CONTACTS.push(newContact);
  OrderedContact(CONTACTS, "a")
}
export { addContactToUi, CONTACTS, OrderedContact, deleteContact, createNewContact }
