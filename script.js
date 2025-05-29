const recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "https://source.unsplash.com/400x300/?spaghetti",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic"],
    instructions: "Cook spaghetti. Brown beef with onions and garlic. Add tomato sauce. Simmer. Combine with pasta."
  },
  {
    title: "Chicken Curry",
    image: "https://source.unsplash.com/400x300/?chicken-curry",
    ingredients: ["Chicken", "Coconut milk", "Curry powder", "Onions", "Ginger", "Garlic"],
    instructions: "Sauté onions, garlic, and ginger. Add chicken and curry powder. Pour coconut milk. Cook until done."
  },
  {
    title: "Pancakes",
    image: "https://source.unsplash.com/400x300/?pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Baking powder", "Sugar"],
    instructions: "Mix ingredients. Pour onto heated pan. Flip when bubbles form. Serve hot."
  }
];

const recipeList = document.getElementById("recipe-list");
const recipeDetails = document.getElementById("recipe-details");
const backButton = document.getElementById("back-button");

function displayRecipeList() {
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
    `;
    card.addEventListener("click", () => showRecipeDetails(index));
    recipeList.appendChild(card);
  });
}

function showRecipeDetails(index) {
  const recipe = recipes[index];
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("ingredients").innerHTML = recipe.ingredients
    .map(item => `<li>${item}</li>`)
    .join("");
  document.getElementById("instructions").textContent = recipe.instructions;
  recipeList.classList.add("hidden");
  recipeDetails.classList.remove("hidden");
}

backButton.addEventListener("click", () => {
  recipeDetails.classList.add("hidden");
  recipeList.classList.remove("hidden");
});

displayRecipeList();
