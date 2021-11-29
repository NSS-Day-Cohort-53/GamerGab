import { getAuthors } from "./data.js" 

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
  // Check the id of the element for "author--"
  if (event.target.id.startsWith("author--")) {
    // const authorId = event.target.id.split("--")[1]
    // or....
    // array destructuring
    const [ ,authorId] = event.target.id.split("--")
    window.alert(`You clicked on an author! ${authorId}`)
    // We have the author Id Now. How do we get the articles they wrote?

  }
})