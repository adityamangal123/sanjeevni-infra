const jobsGrid = document.querySelector("[data-job-list]");
if (jobsGrid && window.SiteData) {
  const data = window.SiteData.readData();
  const jobs = data.jobs || [];
  jobsGrid.innerHTML = "";
  jobs.forEach((job) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="tag">${job.type}</span>
      <h3>${job.role}</h3>
      <p>${job.location}</p>
      <a class="btn btn-brand" href="mailto:careers@sanjeevniinfra.com?subject=Application for ${encodeURIComponent(job.role)}">Apply by Email</a>
    `;
    jobsGrid.appendChild(card);
  });
}

const careerForm = document.querySelector("[data-career-form]");
const careerFile = document.querySelector("[data-career-file]");
const careerFileName = document.querySelector("[data-career-file-name]");
const careerStatus = document.querySelector("[data-career-status]");

if (careerFile && careerFileName) {
  careerFile.addEventListener("change", () => {
    const [file] = careerFile.files || [];
    careerFileName.textContent = file ? file.name : "No file chosen";
  });
}

if (careerForm && careerStatus) {
  careerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    careerStatus.textContent = "Thank you. Your application details are ready for review.";
  });
}
