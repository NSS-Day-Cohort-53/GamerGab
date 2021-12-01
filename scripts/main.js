import { GamerGab } from "./GamerGab.js" 

// Requirements:
// Display authors, articles, categories in 3 columns
// When an article is clicked, display pop-up with author name
// When a category is clicked, display pop-up with list of related articles

const container = document.querySelector("#container")

container.innerHTML = `<h1>Welcome to GamerGab</h1> ${GamerGab()}`