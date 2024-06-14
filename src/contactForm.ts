const contactForm = document.querySelector("#c-form");
type HTML = HTMLElement;
type BoxToggler = "false" | "true";
type State = "edit" | null;


const boxToggler = (showBox: BoxToggler, trigger?: HTML, state?: State,): void => {
    const boxID = trigger?.dataset.target! ?? "#create-box";
    const boxModel = document.querySelector(boxID);
    if (state) {
        contactForm?.setAttribute("data-state", state);
    };
    if (!state && showBox === "false") {
        contactForm?.removeAttribute("data-state");
    };
    boxModel?.setAttribute("aria-hidden", showBox);
};

export default boxToggler;