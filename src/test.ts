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


// // const contactMenu: ContactMenu = {
// //     position: { top: 0, right: 0 },
// //     activeElement: {
// //         id: null,
// //         element: null
// //     }
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