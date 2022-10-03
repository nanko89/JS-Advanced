function getArticleGenerator(articles) {
  let workArticles = Array.from(articles);
  let content = document.querySelector("#content");

  return () => {
    if (workArticles.length <= 0) {
      return;
    }
    let currentArt = workArticles.shift();
    content.innerHTML += `<article>${currentArt}</article>`;
  };
}
