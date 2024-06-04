import "./css/style.css";
// const filterButton = document.querySelector(".filter-trigger") as HTMLButtonElement;
// const categotyListButton = document.querySelectorAll("#category-list li") as NodeList;
const ulContact = <HTMLUListElement>document.querySelector(".contacts");
import datas from "./data/datas.json";

type Contact = {
    id: string,
    firstname: string,
    lastname: string,
    cover: string
    email: string,
    category: string,
    phones: {
        personnal: string,
        company?: string
    };
}

type ContactMenu = {
    position: {
        top: number,
        right?: number
    },
    activeElement: {
        readonly id: string | null,
        element: HTMLElement | null
    }
}


const CONTACTS: Contact[] = datas

const contactMenu: ContactMenu = {
    position: { top: 0, right: 0 },
    activeElement: {
        id: null,
        element: null
    }
}

const addContactToUi = (contacts: Contact[]): void => {
    const contactList: Element = document.querySelector(".contacts")!;

    const xxx = contacts.map((conatct) => {
        return `
        <li class="flex justify-between items-center relative" data-id="${conatct.id}">
        <div class="flex items-center gap-4">
          <div class="w-10 rounded-full overflow-hidden">
            <img src="${conatct.cover}">
          </div>
          <div class="grid gap-[2px]">
            <span class="text-base font-bold">${conatct.firstname} ${conatct.lastname}</span>
            <span aria-${conatct.category}
              class="w-fit text-[10px] py-[2px] px-2 aria-[${conatct.category}]:bg-yellow-300 rounded-md">Family</span>
          </div>
        </div>
        <div>
          <button type="button" class="contact-menu bg-gray-200 inline-flex p-1 rounded-full">
            <i class='bx bx-dots-vertical-rounded'></i>
          </button>
        </div>

      </li>
        `
    })

    contactList.innerHTML = xxx.join(" ")

}
const setContactMenu = (clickedContact: HTMLElement | null | undefined) => {
    const contactMenuClassList = "menu absolute z-50 bg-white text-sm p-1 grid justify-start gap-2 border-[1px] border-gray-900/10 rounded-md"
    const contactMenuElementCtn = document.createElement("div");
    contactMenuElementCtn.setAttribute("class", contactMenuClassList);
    contactMenuElementCtn.innerHTML = `<button class="p-[2px]">Edit</button><button class="p-[2px] text-red-500 hover:text-red-700 rounded-sm">delete</button>`;
    contactMenuElementCtn.style.top = `${contactMenu.position.top + 12}px`;
    contactMenuElementCtn.style.right = `${contactMenu.position.right ?? 0}px`;


    if (clickedContact) {
        clickedContact.appendChild(contactMenuElementCtn)
    }
}

const removeMenu = () => {
    const menu = <HTMLElement>document.querySelector(".menu");
    menu.remove();
}

// const toggleFilterList = function (e: Event): void {
//     const button = e.target as HTMLElement;
//     const id: string | undefined = button.dataset.target;

//     const categotyList: HTMLElement | null = document.querySelector(`#${id}`);
//     if (categotyList?.getAttribute("aria-expanded") === "true") {
//         categotyList.setAttribute("aria-expanded", "false");
//     }
//     else {
//         categotyList?.setAttribute("aria-expanded", "true");
//     }
// }

// categotyListButton.forEach((button: Node) => {
//     button.addEventListener("click", (e: Event) => {
//         const element = <HTMLLIElement>e.target;
//         element.parentElement?.setAttribute("aria-expanded", "false")
//         console.log(element.dataset.category)

//     })
// })



// filterButton?.addEventListener("click", toggleFilterList);


const toggleConctactMenu = (contactUiElement: HTMLElement, top: number): void => {
    if (!contactMenu.activeElement?.element) {
        contactMenu.position = { top }
        contactMenu.activeElement.element = contactUiElement;
        setContactMenu(contactUiElement);
        return;

    };
    if (contactMenu.activeElement?.element === contactUiElement) {
        contactMenu.activeElement.element = null;
        removeMenu();
        return;
    };
    if (contactMenu.activeElement?.element && contactMenu.activeElement?.element !== contactUiElement) {
        removeMenu();
        contactMenu.position = { top }
        contactMenu.activeElement.element = contactUiElement;
        setContactMenu(contactUiElement);
        return;
    }
}

ulContact.addEventListener("click", (e) => {
    const trigger = <HTMLElement>e.target;
    const contact = <HTMLElement>trigger?.parentElement?.parentElement;
    const triggerDetails = trigger.getBoundingClientRect();
    // case the element that clicked it button
    if (trigger.tagName === "BUTTON" && trigger.classList.contains("contact-menu")) {
        toggleConctactMenu(contact, triggerDetails.height)
    }

});

document.addEventListener("DOMContentLoaded", () => {
    addContactToUi(CONTACTS)
});