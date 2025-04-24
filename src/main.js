import './style.css'
import { getAlldata } from './recipes.js'
import { setupSearch } from './search.js';

export async function displayItems(){
  const recipes= await getAlldata();
  recipes.forEach(recipe => {
    //for preloading colored heart after refreshing
    let idsStored = JSON.parse(localStorage.getItem("favorites")) || [];
    let ImgSrc= "";
    if(idsStored.includes(recipe.id.toString())){
      console.log("hi")
      ImgSrc="colorheart.svg"
    }
    else{
      ImgSrc="fav.svg"
    }
    document.querySelector('#app').innerHTML += `
    <div class=" h-50 w-50 flex flex-col border-2 border-black rounded-2xl" id="recipeCard">
      <div class="w-full h-[70%] border-b-1 border-black overflow-hidden">
        <img src="${recipe.image}" alt="recipe preview" class="h-40 w-60 rounded-t-2xl" alt="${recipe.name}">
      </div>
      <div class="flex flex-row p-4 gap-2 justify-between">
        <div>
          <h2 class="line-clamp-1 text-black cursor-pointer  recipeFollows" data-id="${recipe.id}"> ${recipe.name}</h2>
        </div>
          <img src=${ImgSrc} class="h-5  cursor-pointer Fav-Icon   justify-self-end" data-id="${recipe.id}" alt="favourite-icon">
      </div> 
    </div>
    
    
    
    `



    //full Recipe
   document.querySelectorAll(".recipeFollows").forEach(recipeFollow => {
    recipeFollow.addEventListener("click",() =>{
      const id = recipeFollow.getAttribute('data-id');
      console.log(id);
      window.location.href=(`fullRecipe.html?id=${id}`)

     
   });
   });
  });
  
  document.querySelectorAll('.Fav-Icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const id = icon.getAttribute('data-id');
      console.log(id)
      let idsStored = JSON.parse(localStorage.getItem("favorites")) || [];
    
      if (idsStored.includes(id)) {
        idsStored = idsStored.filter(x =>x  !== id);
        icon.src = 'fav.svg';

      } else {
        idsStored.push(id);
        console.log(idsStored)
        icon.src = 'colorheart.svg';
      }
      localStorage.setItem("favorites", JSON.stringify(idsStored));
    
    });
  })
  
}

document.getElementById("viewFav").addEventListener("click", () => {
  window.location.href = "/fav.html";
});


displayItems().then(() => {
  setupSearch(); // now the cards exist!
});


























// let FavElements=document.querySelectorAll(".Fav-Icon");
// FavElements.forEach(fav=>{
//   const id= fav.getAttribute('data-id');
//   fav.addEventListener("click",()=>{ 
//     if (fav.src.includes("/fav.svg")){
//       fav.src="/colorheart.svg"
//     }
//     else{
//       fav.src="/fav.svg"
//     }
    
//     console.log("clicked");
    
    
 // });