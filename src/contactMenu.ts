import { CONTACTS, deleteContact } from "./contact";
import boxToggler from "./contactForm";
import { contactFields } from "./contactForm";
import INT_INTANCE from "./phone";

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

// reset active element
const resetActiveElement = (id?: boolean) => {
    if (!id) {
        contactMenu.activeElement.id = null;
    }
    contactMenu.activeElement.element = null;
}
// Remove Contact Menu to UI
function removeMenu(): void {
    const menu = <HTMLElement>document.querySelector(".menu");
    menu.remove();
}

const contactMenuComponent = (): HTMLDivElement => {
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
    const contactMenuElement = contactMenuComponent();
    clickedContact.appendChild(contactMenuElement);

    // delete or update functionality
    contactMenuElement.addEventListener("click", (e): void => {
        const button = e.target as HTMLElement;
        const id = contactMenu.activeElement.id!;
        const element = contactMenu.activeElement.element!;
        const type = button.dataset.type;

        // case for delete
        if (type === "delete") {
            deleteContact(element, id);
            resetActiveElement();
            return;
        }
        else {
            const id = contactMenu.activeElement.id;
            removeMenu();
            boxToggler("false", "edit");
            const contact = CONTACTS.find((contact) => contact.id === id);
            if (contact) {
                contactFields.firstname.value = contact.firstname
                contactFields.lastname.value = contact.lastname
                INT_INTANCE.setNumber(contact.phone)
                contactFields.category.value = contact.category
            }

        }

    })
};

// Toggle Contact Menu to UI
const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {
    // set cobtact menu datas.
    const contactMenuData = (positionTop: number, element: HTMLElement, id: string): void => {
        contactMenu.position.top = positionTop
        contactMenu.activeElement.element = element;
        contactMenu.activeElement.id = id
    };

    // when there was no active element before
    if (!contactMenu.activeElement?.element) {
        // add contact menu data
        contactMenuData(top, contactUiElement, contactUiElement.dataset.id!);
        // add it to the UI
        setContactMenuToUi(contactUiElement);
        return;

    };

    // when there was an active element for the current trigger
    if (contactMenu.activeElement?.element === contactUiElement) {
        resetActiveElement()
        removeMenu();
        return;
    };
    // when there was an active element but the current trugger belong to another contact item
    if (contactMenu.activeElement?.element && contactMenu.activeElement?.element !== contactUiElement) {
        removeMenu();
        contactMenuData(top, contactUiElement, contactUiElement.dataset.id!)
        setContactMenuToUi(contactUiElement);
        return;
    }
};

export { contactMenu, toggleConctactMenu, resetActiveElement }