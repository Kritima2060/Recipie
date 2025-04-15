import './style.css'
import { getAlldata } from './recipes.js'



//import { setupCounter } from './counter.js'
async function displayItems(){
  let recipes= await getAlldata();
  //console.log(recipes[20]);
  recipes.forEach(recipe => {
    
    
    document.querySelector('#app').innerHTML += `
    <div class="h-50 w-50 flex flex-col border-2 border-black rounded-2xl">
    <div class="w-full h-[70%] border-b-1 border-black overflow-hidden">
    <img src="${recipe.image}" alt="recipe preview" class="h-full w-full rounded-t-2xl">
    </div>
    <div class="flex flex-row p-4 gap-2 justify-between">
    <div>
    <h2 class="line-clamp-1 text-black"> ${recipe.name}</h2>
    </div>
    <img src="fav.svg"  data-id="${recipe.id}" class="h-5  cursor-pointer Fav-Icon  justify-self-end">
    </div> 
    </div>
    </div>
    
    
    `
  });
  
  document.querySelectorAll('.Fav-Icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const id = icon.getAttribute('data-id');
      let idsStored = JSON.parse(localStorage.getItem("favorites")) || [];
    
      if (idsStored.includes(id)) {
        idsStored = idsStored.filter(x =>x  !== id);
        console.log("hi")
        icon.src = 'fav.svg';

      } else {
        idsStored.push(id);
        icon.src = 'colorheart.svg';
      }
      localStorage.setItem("favorites", JSON.stringify(idsStored));
      
    });
  })
  
  }
  document.getElementById("home").addEventListener("click",()=>{
    window.location.href = "/";
  });
  document.getElementById("viewFav").addEventListener("click", () => {
    window.location.href = "/fav.html";
  });
  
  displayItems();
  
  


























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