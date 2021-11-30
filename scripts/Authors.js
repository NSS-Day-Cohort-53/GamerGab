import { getAuthors } from "./data.js" 
import { getArticles } from "./data.js" 

export const Authors = () => {
  const authors = getAuthors()
  
  let htmlRepOfAuthors = ""

  for ( const currentAuthor of authors) {
    htmlRepOfAuthors += `
      <div class="author card">
        <h4 class="author__name" id="author--${currentAuthor.id}">${currentAuthor.name}</h4>
        <p class="author__bio">${currentAuthor.bio}</p>
      </div>
    `
  }

  return htmlRepOfAuthors  
}

// takes 2 args: 1) the event type 2) what to do when that event happens ( callback function)
document.addEventListener("click", (event) => {
  // Need the articles data
  const articles = getArticles()

  // Check the id of the element for "author--"
  // Need the id of the author
  if (event.target.id.startsWith("author--")) {
    // const authorId = event.target.id.split("--")[1]
    // or....
    // array destructuring
    const [ ,authorId] = event.target.id.split("--")
    
    // Match the author id on the articles to the author's id
    // Use a loop to iterate over articles to find any and all matching articles
    let articleCount = 0
    for ( const article of articles) {
      // Keep a running count of how many author/article matches we find
      if ( parseInt(authorId) === article.authorId ) {
        articleCount++
      }
    }
    // represent that count as html ( a string ) to the user.
    window.alert(`Articles written: ${articleCount}`)

  }
})

