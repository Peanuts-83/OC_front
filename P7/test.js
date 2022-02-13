// DOM ELEMENTS
const loopSolution = document.querySelector('#loop');
const arraySolution = document.querySelector('#array');

// GLOBALS
let recipes = [];

// GET JSON DATA
function getRecipes() {
    const recipes = fetch('./sources/recipes.json')
                    .then(data => data.json())
                    .catch(err => console.log('Error parsing recipes:', err));
    return recipes;
}


// INIT
async function init() {
    recipes = await getRecipes();
    loopSolution.onchange = search;
    arraySolution.onchange = search;
}

init();


// INIT SEARCH
function search(type) {
    const query = this.value.toLowerCase();
    console.log(query);
    if (query.length >= 3) {
        this.id == 'loop' ? loopAlgo(query) : arrayAlgo(query);
    }

}

// FOR LOOP SOLUTION
function loopAlgo(query) {
    console.time('OPTION 1 - LOOP');
    const showResults = document.querySelector('.for_loop .results');
    showResults.innerText = ''; 
    let results = [];
    for (let recipe of recipes) {
        let _added = false;
        if (recipe.name.toLowerCase().includes(query)) {
            results.push(recipe);
            // console.log('NAME', recipe.name);
            _added = true;
        }  else if (recipe.description.toLowerCase().includes(query) && !_added) {
            results.push(recipe);
            // console.log('DESCR', recipe.description);
            _added = true;
        } else if (!_added) {
            for (let ingr of recipe.ingredients) {
                if (ingr.ingredient.toLowerCase().includes(query) && !_added) {
                    results.push(recipe);
                    // console.log('INGR', ingr.ingredient);
                    _added = true;
                }
            }
        }            
    }
    for (let recipe of results) {
        showResults.innerText += recipe.name + '\n';
    }
    console.log('nbre de réponses:', results.length);
    console.timeEnd('OPTION 1 - LOOP');
}

// ARRAY SOLUTION
function arrayAlgo(query) {
    console.time('OPTION 2 - ARRAY');
    const showResults = document.querySelector('.array .results');
    showResults.innerText = '';
    let results = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.filter(ingr => ingr.ingredient.toLowerCase().includes(query)).length >= 1;
    })
    results.forEach(recipe => showResults.innerText += recipe.name + '\n');
    console.log('nbre de réponses:', results.length);
    console.timeEnd('OPTION 2 - ARRAY');
}

