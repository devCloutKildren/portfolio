
const toggleBtn = document.getElementById("toggleView");
const container = document.getElementById("projectsContainer");

let isGrid = true;

toggleBtn.addEventListener("click", () => {
    if (isGrid) {
        container.classList.remove("projects-grid");
        container.classList.add("projects-list");
        toggleBtn.textContent = "List View";
    } else {
        container.classList.remove("projects-list");
        container.classList.add("projects-grid");
        toggleBtn.textContent = "Grid View";
    }
    isGrid = !isGrid;
});
