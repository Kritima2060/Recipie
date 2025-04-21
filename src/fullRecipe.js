import { getAlldata } from "./recipes";
import "./style.css";
//import innerHTML from "./main.js";

async function displayfullRecipes(){
    let allData= await getAlldata();
    const params = new URLSearchParams(window.location.search)
    const selectedId = params.get("id")
    
  const selectedRecipes = allData.find(recipe => recipe.id.toString() === selectedId);

  if (selectedRecipes) {

     
    // const selectedRecipes = allData.find(recipe => selectedIds.includes((recipe.id)));
        
         document.querySelector("#app").innerHTML = `
         <div class="flex fullRecipes">
             <div class="h-70 w-70 flex flex-col items-center">
                 <div class="border-2 border-black rounded-2xl h-40 w-40 ">
                 <img src="${selectedRecipes.image}" alt="recipe preview" class="h-full w-full rounded-2xl"/>
                 </div>
                 <div><h1 class="text-black self-end ">${selectedRecipes.name}</h1></div>
             </div>
             <div class="h-full flex-col">
                <div> <h1 class="text-black"> Ingredients </h1> </div>
                <div>
                    <h3 class="text-black">${selectedRecipes.ingredients}</h3>
                </div>
                <div> <h1 class="text-black"> Instructions </h1> </div>
                <div>
                    <h3 class="text-black">${selectedRecipes.instructions}</h3>
                </div>
             </div>
         </div
         `
        //  console.log(typeof recipe.ingredients)
    };
document.getElementById("viewFav").addEventListener("click", () => {
    window.location.href = "/fav.html";
  });
  document.getElementById("home").addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}
  displayfullRecipes();