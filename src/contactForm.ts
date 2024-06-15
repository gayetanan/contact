import { resetActiveElement } from "./contactMenu";

const contactForm = document.querySelector("#c-form");
type HTML = HTMLElement;
type BoxToggler = "false" | "true";
type State = "edit" | null;


const boxToggler = (hidden: BoxToggler, trigger?: HTML, state?: State): void => {
    const boxID = trigger?.dataset.target! ?? "#create-box";
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

export default boxToggler;