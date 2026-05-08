const postsGrid = document.querySelector("[data-post-list]");
if (postsGrid && window.SiteData) {
  const data = window.SiteData.readData();
  const posts = (data.posts || []).sort((a, b) => (a.date < b.date ? 1 : -1));
  postsGrid.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="tag">News</span>
      <h3>${post.title}</h3>
      <p><strong>${post.date}</strong></p>
      <p>${post.summary}</p>
    `;
    postsGrid.appendChild(card);
  });
}
