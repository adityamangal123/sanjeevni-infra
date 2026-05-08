const projectList = document.querySelector("[data-project-list]");
const filtersWrap = document.querySelector("[data-filters]");

if (projectList && filtersWrap && window.SiteData) {
  const data = window.SiteData.readData();
  const projects = data.projects || [];
  const categories = ["All", ...new Set(projects.map((item) => item.category))];

  categories.forEach((category, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn${index === 0 ? " active" : ""}`;
    btn.textContent = category;
    btn.dataset.category = category;
    filtersWrap.appendChild(btn);
  });

  function render(category = "All") {
    projectList.innerHTML = "";
    const filtered = category === "All" ? projects : projects.filter((item) => item.category === category);
    filtered.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <span class="tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.location} • ${item.year}</p>
      `;
      projectList.appendChild(card);
    });
  }

  filtersWrap.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const buttons = filtersWrap.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    render(target.dataset.category || "All");
  });

  render();
}
