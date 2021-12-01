import { getCategories } from "./data.js";
import { getArticles } from "./data.js"

export const Categories = () => {
  const categories = getCategories();
  const articles = getArticles()

  document.addEventListener("click", (event) => {
    if (event.target.id.startsWith("category")) {
      const [, categoryId] = event.target.id.split("--"); //["category", "4"]
      const categoryIdNum = parseInt(categoryId);

      // const articleTitles = [];
      // for (const article of articles) {
      //   if (article.categoryId === categoryIdNum) {
      //     articleTitles.push(article.title);
      //   }
      // }

      // make an array of article objects
      const matchingArticlesArray = articles.filter((article) => {
        return article.categoryId === categoryIdNum;
      });

      // use the values from the array of objects to make an array of strings
      const articleTitles = matchingArticlesArray.map( (articleObj) => articleObj.title )

      window.alert(
        `${articleTitles.join("\n 🎲🎲🎲🎲🎲🎲🎲🎲🎲 \n")}`
      );
    }
  });

  let allCategoriesHTML = "";
  for (const cat of categories) {
    allCategoriesHTML += `
      <div class="card" id="category--${cat.id}">${cat.name}</div>
    `;
  }

  return allCategoriesHTML;
};
