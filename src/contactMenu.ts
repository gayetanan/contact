import { deleteContact, editContact } from "./contact";

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

        if (button.dataset.type === "delete") {
            const id = contactMenu.activeElement.id!;
            const element = contactMenu.activeElement.element!;
            deleteContact(element, id)
            resetActiveElement()
            return;
        }
        else {
            editContact()
        }

    })
};

// Toggle Contact Menu to UI
const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {

    if (!contactMenu.activeElement?.element) {
        contactMenu.position = { top }
        contactMenu.activeElement.element = contactUiElement;
        contactMenu.activeElement.id = contactUiElement.dataset.id!
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
        contactMenu.position = { top }
        contactMenu.activeElement.element = contactUiElement;
        contactMenu.activeElement.id = contactUiElement.dataset.id!
        setContactMenuToUi(contactUiElement);
        return;
    }
};

export { contactMenu, toggleConctactMenu }