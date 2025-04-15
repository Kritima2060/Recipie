import { getAlldata } from './recipes.js';

async function displayFavorites() {
  const allData = await getAlldata();
  const favIds = JSON.parse(localStorage.getItem("favorites")) || [];

  const favRecipes = allData.filter(recipe => favIds.includes(recipe.id));

  const app = document.getElementById("app");
  favRecipes.forEach(recipe => {
    app.innerHTML += `
      <div class="border-2 rounded-xl w-60 p-4">
        <img src="${recipe.image}" class="w-full h-40 object-cover rounded" />
        <h2 class="text-black mt-2">${recipe.name}</h2>
      </div>
    `;
  });
}

displayFavorites();
