import { getArticles } from "./data.js"
import { getAuthors } from "./data.js"
const articles = getArticles()

export const Articles = () => {
  let htmlRepresentationofArticles = ""

  for (const article of articles) {
    htmlRepresentationofArticles += `
        <div class="article card">
          <h4 class="article__headline" id="article--${article.id}">${article.title}</h4>
        </div>
    `
  }

  return htmlRepresentationofArticles
}

document.addEventListener("click", (event) => {
  const authors = getAuthors()
  // 1. determine if click event came from an article 
  if (event.target.id.startsWith("article")) {
    // 2. find out which article got clicked
    const [, articleId] = event.target.id.split("--") //[ "article", "2" ]

    // let clickedArticle = null
    // for ( const article of articles ) {
    //   if (parseInt(articleId) === article.id) {
    //     clickedArticle = article
    //   }
    // }

    // The above can be done like this instead
    // Find gets the one thing you're looking for
    const clickedArticle = articles.find( (article) => parseInt(articleId) === article.id )

    // 3. match that article to an author by...
    // 4. looking at the authorId <-- not helpful to our user yet
    // 5. Find the author's name that goes with the authorId
    const foundAuthor = authors.find( (author) => author.id === clickedArticle.authorId )

    window.alert(`Written by ${foundAuthor.name}`)
  }

})