import "./css/style.css";
const filterButton = document.querySelector(".filter-trigger") as HTMLButtonElement;
const categotyListButton = document.querySelectorAll("#category-list li") as NodeList;


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
        console.log(element.dataset.category)

    })
})



filterButton?.addEventListener("click", toggleFilterList);
