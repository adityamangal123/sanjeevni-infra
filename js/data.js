const defaults = {
  projects: [
    { title: "Delhi Ring Road Upgrade", category: "Roads", location: "Delhi NCR", year: "2025" },
    { title: "Varanasi River Bridge", category: "Bridges", location: "Varanasi", year: "2024" },
    { title: "Pune Smart Mobility Corridor", category: "Urban", location: "Pune", year: "2026" },
    { title: "Jaipur Water Grid", category: "Water", location: "Jaipur", year: "2025" },
    { title: "Gujarat Industrial Park Access", category: "Commercial", location: "Ahmedabad", year: "2024" },
    { title: "Lucknow Green Boulevard", category: "Sustainable", location: "Lucknow", year: "2026" }
  ],
  posts: [
    { title: "Sanjeevni Infra wins new highway package", date: "2026-03-10", summary: "A 62 km package focused on resilient pavements and safety assets.", url: "news-highway-package.html" },
    { title: "How BIM improves delivery speed", date: "2026-02-20", summary: "Digital-first execution is reducing delays and improving quality checks.", url: "news-bim-delivery-speed.html" },
    { title: "Bridge segment launch completed ahead of schedule", date: "2026-01-14", summary: "Night-shift planning and staged logistics improved productivity and safety compliance.", url: "news-bridge-segment-launch.html" },
    { title: "Sustainable drainage pilot expanded across urban packages", date: "2025-12-02", summary: "Low-maintenance drainage features are now integrated in multiple city corridor projects.", url: "news-sustainable-drainage-pilot.html" }
  ],
  jobs: [
    { role: "Site Engineer", location: "Bhopal", type: "Full Time" },
    { role: "Planning Manager", location: "Noida", type: "Full Time" },
    { role: "QS Engineer", location: "Nagpur", type: "Contract" },
    { role: "HSE Officer", location: "Jaipur", type: "Full Time" },
    { role: "Project Coordinator", location: "Pune", type: "Full Time" }
  ]
};

const key = "sanjeevni-site-data-v1";

function readData() {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(defaults));
    return structuredClone(defaults);
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(defaults));
    return structuredClone(defaults);
  }
}

function writeData(nextData) {
  localStorage.setItem(key, JSON.stringify(nextData));
}

window.SiteData = {
  readData,
  writeData,
  defaults
};
