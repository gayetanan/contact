import "./css/style.css";
const filterButton = document.querySelector(".filter-trigger") as HTMLButtonElement;
const categotyListButton = document.querySelectorAll("#category-list li") as NodeList;
const ulContact = <HTMLUListElement>document.querySelector(".contacts")


const toggleFilterList = function (e: Event): void {
    const button = e.target as HTMLElement;
    const id: string | undefined = button.dataset.target;

    const categotyList: HTMLElement | null = document.querySelector(`#${id}`);
    if (categotyList?.getAttribute("aria-expanded") === "true") {
        categotyList.setAttribute("aria-expanded", "false");
    }
    else {
        categotyList?.setAttribute("aria-expanded", "true");
    }
}

categotyListButton.forEach((button: Node) => {
    button.addEventListener("click", (e: Event) => {
        const element = <HTMLLIElement>e.target;
        element.parentElement?.setAttribute("aria-expanded", "false")
        console.log(element.dataset.category)

    })
})

ulContact.addEventListener("click", (e) => {
    const trigger = <HTMLElement>e.target;
    const test: HTMLElement | null = document.querySelector("#test");
    // case the element that clicked it button
    if (trigger.tagName === "BUTTON") {
        const triggerDetails = trigger.getBoundingClientRect();
        if (test) {
            test.style.top = `${triggerDetails.height + 10}px`
            test.style.right = `0px`
        }
    }
});

filterButton?.addEventListener("click", toggleFilterList);
