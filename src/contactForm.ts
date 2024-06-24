import { resetActiveElement } from "./contactMenu";
import INT_INTANCE from "./phone";
const firstname = <HTMLInputElement>document.querySelector("#firstname");
const lastname = document.querySelector("#lastname") as HTMLInputElement;
const phone = document.querySelector("#phone") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLInputElement;

const contactForm = document.querySelector("#c-form");
type BoxToggler = "false" | "true";
type State = "edit" | null;

type ContactFields = {
    firstname: HTMLInputElement
    lastname: HTMLInputElement
    phone: HTMLInputElement
    category: HTMLInputElement

}
const contactFields: ContactFields = {
    firstname, lastname, phone, category
}

// reset fields
function resetFields() {
    contactFields.firstname.value = '';
    contactFields.lastname.value = '';
    contactFields.category.value = "friend"
    INT_INTANCE.setNumber("");
}

const boxToggler = (hidden: BoxToggler, state?: State): void => {
    // const boxID = trigger?.dataset.target! ?? "#create-box";
    const boxID = "#create-box";
    const boxModel = document.querySelector(boxID);
    if (state) {
        contactForm?.setAttribute("data-state", state);
    };
    if (!state && hidden === "true") {
        contactForm?.removeAttribute("data-state");
        resetActiveElement()
    };
    boxModel?.setAttribute("aria-hidden", hidden);
};

export { contactFields, resetFields }
export default boxToggler;