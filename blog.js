fetch("posts.json")
  .then((res) => res.json())
  .then((posts) => {
    const blog = document.getElementById("blog");
    posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach((post) => {
        const article = document.createElement("article");
        article.className = "post";

        const body = post.body
          .split("\n")
          .filter((line) => line.trim())
          .map((line) => `<p>${line}</p>`)
          .join("");

        const [y, m, d] = post.date.split("-");
        const dateStr = `${d}/${m}/${y.slice(2)}`;

        article.innerHTML = `
          <div class="post-date">${dateStr}</div>
          <div class="post-title">${post.title}</div>
          <div class="post-body">${body}</div>
        `;
        blog.appendChild(article);
      });
  });
