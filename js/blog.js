const postsGrid = document.querySelector("[data-post-list]");

function newsUrlFor(post) {
  if (post.url) return post.url;
  const slug = post.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const known = {
    "sanjeevni-infra-wins-new-highway-package": "news-highway-package.html",
    "how-bim-improves-delivery-speed": "news-bim-delivery-speed.html",
    "bridge-segment-launch-completed-ahead-of-schedule": "news-bridge-segment-launch.html",
    "sustainable-drainage-pilot-expanded-across-urban-packages": "news-sustainable-drainage-pilot.html"
  };
  return known[slug] || "blog.html";
}

if (postsGrid && window.SiteData) {
  const data = window.SiteData.readData();
  const posts = (data.posts || []).sort((a, b) => (a.date < b.date ? 1 : -1));
  postsGrid.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("a");
    card.className = "card news-link-card";
    card.href = newsUrlFor(post);
    card.innerHTML = `
      <span class="tag">News</span>
      <h3>${post.title}</h3>
      <p><strong>${post.date}</strong></p>
      <p>${post.summary}</p>
      <span class="read-more">Read full story</span>
    `;
    postsGrid.appendChild(card);
  });
}
