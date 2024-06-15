import { CONTACTS, deleteContact } from "./contact";
import boxToggler from "./contactForm";

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

const resetActiveElement = (id?: boolean) => {
    if (!id) {
        contactMenu.activeElement.id = null;
    }
    contactMenu.activeElement.element = null;
}
// Remove Contact Menu to UI
function removeMenu() {
    const menu = <HTMLElement>document.querySelector(".menu");
    menu.remove();
}

const createContactMenuComponent = () => {
    const contactMenuClassList = "menu absolute z-50 bg-white text-sm p-1 grid justify-start gap-2 border-[1px] border-gray-900/10 rounded-md"
    const contactMenuElementCtn = document.createElement("div");

    contactMenuElementCtn.setAttribute("class", contactMenuClassList);
    contactMenuElementCtn.innerHTML = `<button data-type="edit" class="p-[2px] bg-purple-700 hover:bg-purple-400 rounded-sm">Edit</button><button data-type="delete" class="text-red-500 hover:text-red-700">delete</button>`;

    contactMenuElementCtn.style.top = `${contactMenu.position.top + 12}px`;
    contactMenuElementCtn.style.right = `${contactMenu.position.right ?? 0}px`;
    return contactMenuElementCtn;

}
// Create contact Menu;
const setContactMenuToUi = (clickedContact: HTMLElement) => {
    const contactMenuElement = createContactMenuComponent();
    clickedContact.appendChild(contactMenuElement);

    contactMenuElement.addEventListener("click", (e) => {
        const button = e.target as HTMLElement;
        const id = contactMenu.activeElement.id!;
        const element = contactMenu.activeElement.element!;

        if (button.dataset.type === "delete") {
            deleteContact(element, id);
            resetActiveElement();
            return;
        }
        else {
            const id = contactMenu.activeElement.id;
            const firstname = <HTMLInputElement>document.querySelector("#firstname");
            const lastname = document.querySelector("#lastname") as HTMLInputElement;
            const phone = document.querySelector("#phone") as HTMLInputElement;
            const category = document.querySelector("#category") as HTMLInputElement;


            removeMenu();
            boxToggler("false", undefined, "edit");
            const contact = CONTACTS.find((contact) => contact.id === id);
            if (contact) {
                firstname.value = contact.firstname
                lastname.value = contact.lastname
                phone.value = contact.phone
                category.value = contact.category
            }

        }

    })
};

// Toggle Contact Menu to UI
const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {

    const contactMenuData = (positionTop: number, element: HTMLElement, id: string): void => {
        contactMenu.position.top = positionTop
        contactMenu.activeElement.element = element;
        contactMenu.activeElement.id = id
    };

    if (!contactMenu.activeElement?.element) {
        contactMenuData(top, contactUiElement, contactUiElement.dataset.id!)
        setContactMenuToUi(contactUiElement);
        return;

    };
    if (contactMenu.activeElement?.element === contactUiElement) {
        resetActiveElement()
        removeMenu();
        return;
    };
    if (contactMenu.activeElement?.element && contactMenu.activeElement?.element !== contactUiElement) {
        removeMenu();
        contactMenuData(top, contactUiElement, contactUiElement.dataset.id!)
        setContactMenuToUi(contactUiElement);
        return;
    }
};

export { contactMenu, toggleConctactMenu, resetActiveElement }