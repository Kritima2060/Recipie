// import { getAlldata } from './recipes.js'
export  function setupSearch(){

        const recipeSearches = document.getElementById("searchInput")
        // console.log(recipe.name)
        recipeSearches.addEventListener("input", (event)=>{
            const keyValue = event.target.value.toLowerCase();
            console.log(keyValue)
            const cards = document.querySelectorAll("#recipeCard");
            cards.forEach(card => {
              const name = card.querySelector("h2").textContent.toLowerCase();
              card.style.display = name.includes(keyValue) ? "block" : "none";
            });
        

        })
}





