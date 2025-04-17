import './style.css';
import { getAlldata } from './recipes.js';
async function displayFavorites() {
  const allData = await getAlldata();
  const favIds = JSON.parse(localStorage.getItem("favorites")) || [];
  const Ids =JSON.stringify(favIds);
  
  const favRecipes = allData.filter(recipe => Ids.includes(String(recipe.id)));
  console.log(favRecipes,typeof favRecipes);
 
  favRecipes.forEach(recipe => {
  document.querySelector("#app").innerHTML += `
  <div class="h-50 w-50 flex flex-col border-2 border-black rounded-2xl recipe-card">
  <div class="w-full h-[70%] border-b-1 border-black overflow-hidden">
    <img src="${recipe.image}" alt="recipe preview" class="h-full w-full rounded-t-2xl">
  </div>
  <div class="flex flex-row p-4 gap-2 justify-between">
    <div>
      <h2 class="line-clamp-1 text-black"> ${recipe.name}</h2>
    </div>
    <img src="colorheart.svg"  data-id="${recipe.id}" class="h-5  cursor-pointer Fav-Icon  justify-self-end">
  </div>
  `;

  });
  document.querySelectorAll('.Fav-Icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const id = icon.getAttribute('data-id');
      let favIds = JSON.parse(localStorage.getItem("favorites")) || [];
    
      if (favIds.includes(id)) {
      favIds = favIds.filter(x =>x  !== id);
        icon.src = 'fav.svg';
        localStorage.setItem("favorites", JSON.stringify(favIds));
        console.log(localStorage)

        //Remove division
        const card = icon.closest('.recipe-card');
        card.remove();
      } 
      else {
        favIds.push(id);
        icon.src = 'colorheart.svg';
      }
      localStorage.setItem("favorites", JSON.stringify(favIds));
      console.log(localStorage);
      // console.log(localStorage)
      
    });
  })

}
document.getElementById("home").addEventListener("click",()=>{
  window.location.href = "/main.js";
});

displayFavorites();











