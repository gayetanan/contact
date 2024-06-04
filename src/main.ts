import "./css/style.css";
// // const filterButton = document.querySelector(".filter-trigger") as HTMLButtonElement;
// // const categotyListButton = document.querySelectorAll("#category-list li") as NodeList;
// const ulContact = <HTMLUListElement>document.querySelector(".contacts");
// const addButton = <HTMLButtonElement>document.querySelector(".add-btn");
// import datas from "./data/datas.json";


// type Contact = {
//     id: string,
//     firstname: string,
//     lastname: string,
//     cover: string
//     email: string,
//     category: string,
//     phones: {
//         personnal: string,
//         company?: string
//     };
// }







// // type ContactMenu = {
// //     position: {
// //         top: number,
// //         right?: number
// //     },
// //     activeElement: {
// //         id: string | null,
// //         element: HTMLElement | null
// //     }
// // }
// // const CONTACTS: Contact[] = datas

// // const contactMenu: ContactMenu = {
// //     position: { top: 0, right: 0 },
// //     activeElement: {
// //         id: null,
// //         element: null
// //     }
// // }
// // //Displaying contact to UI
// // const addContactToUi = (contacts: Contact[]): void => {
// //     const contactList: Element = document.querySelector(".contacts")!;

// //     const contactsData = contacts.map((conatct) => {
// //         return `
// //         <li class="flex justify-between items-center relative" data-id="${conatct.id}">
// //         <div class="flex items-center gap-4">
// //           <div class="w-10 rounded-full overflow-hidden">
// //             <img src="${conatct.cover}">
// //           </div>
// //           <div class="grid gap-[2px]">
// //             <span class="text-base font-bold">${conatct.firstname} ${conatct.lastname}</span>
// //             <span aria-${conatct.category}
// //               class="w-fit text-[10px] py-[2px] px-2 aria-[${conatct.category}]:bg-yellow-300 rounded-md">Family</span>
// //           </div>
// //         </div>
// //         <div>
// //           <button type="button" class="contact-menu bg-gray-200 inline-flex p-1 rounded-full">
// //             <i class='bx bx-dots-vertical-rounded'></i>
// //           </button>
// //         </div>

// //       </li>
// //         `
// //     })

// //     contactList.innerHTML = contactsData.join(" ");
// // }
// // const resetActiveElement = () => {
// //     contactMenu.activeElement.id = null
// //     contactMenu.activeElement.element = null
// // }
// // // Create contact Menu;
// // const setContactMenu = (clickedContact: HTMLElement | null | undefined) => {
// //     const contactMenuClassList = "menu absolute z-50 bg-white text-sm p-1 grid justify-start gap-2 border-[1px] border-gray-900/10 rounded-md"
// //     const contactMenuElementCtn = document.createElement("div");

// //     contactMenuElementCtn.setAttribute("class", contactMenuClassList);
// //     contactMenuElementCtn.innerHTML = `<button data-type="edit" class="p-[2px] bg-purple-700 hover:bg-purple-400 rounded-sm">Edit</button><button data-type="delete" class="text-red-500 hover:text-red-700">delete</button>`;

// //     contactMenuElementCtn.style.top = `${contactMenu.position.top + 12}px`;
// //     contactMenuElementCtn.style.right = `${contactMenu.position.right ?? 0}px`;

// //     if (clickedContact) {
// //         clickedContact.appendChild(contactMenuElementCtn);
// //         contactMenuElementCtn.addEventListener("click", (e) => {
// //             const button = e.target as HTMLElement;

// //             if (button.dataset.type === "delete") {
// //                 contactMenu.activeElement.element?.remove();
// //                 resetActiveElement()
// //             };

// //         })
// //     }
// // }
// // // Remove Contact Menu to UI
// // const removeMenu = () => {
// //     const menu = <HTMLElement>document.querySelector(".menu");
// //     menu.remove();
// // }
// // // Toggle Contact Menu to UI
// // const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {
// //     if (!contactMenu.activeElement?.element) {
// //         contactMenu.position = { top }
// //         contactMenu.activeElement.element = contactUiElement;
// //         contactMenu.activeElement.id = contactUiElement.dataset.id!
// //         setContactMenu(contactUiElement);
// //         return;

// //     };
// //     if (contactMenu.activeElement?.element === contactUiElement) {
// //         resetActiveElement()
// //         removeMenu();
// //         return;
// //     };
// //     if (contactMenu.activeElement?.element && contactMenu.activeElement?.element !== contactUiElement) {
// //         removeMenu();
// //         contactMenu.position = { top }
// //         contactMenu.activeElement.element = contactUiElement;
// //         contactMenu.activeElement.id = contactUiElement.dataset.id!
// //         setContactMenu(contactUiElement);
// //         return;
// //     }
// // }

// // ulContact.addEventListener("click", (e) => {
// //     const trigger = <HTMLElement>e.target;
// //     const contact = <HTMLElement>trigger?.parentElement?.parentElement;
// //     const triggerDetails = trigger.getBoundingClientRect();
// //     // case the element that clicked it button
// //     if (trigger.tagName === "BUTTON" && trigger.classList.contains("contact-menu")) {
// //         toggleConctactMenu(contact, triggerDetails.height)
// //     }

// // });

// // document.addEventListener("DOMContentLoaded", () => {
// //     addContactToUi(CONTACTS)
// // });