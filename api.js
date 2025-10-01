function randomRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log('data:', data)
            displayRandomRecipe(data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

function displayRandomRecipe(data) {
    var recipeElement = document.querySelector('.recipetitle')
    recipeElement.textContent = data.meals[0].strMeal

    var imageElement = document.querySelector('.recipeimage')
    imageElement.src = data.meals[0].strMealThumb

    var instructionsElement = document.querySelector('.recipeinstructions')
    instructionsElement.textContent = data.meals[0].strInstructions
}

function searchRecipe(e) {
    e.preventDefault()
    const term = document.querySelector('.input').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log('data:', data)
            console.log(term)
            displaySearchResults(data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

function displaySearchResults(data) {
    var recipeElement = document.querySelector('.recipetitle')
    recipeElement.textContent = data.meals[0].strMeal

    var imageElement = document.querySelector('.recipeimage')
    imageElement.src = data.meals[0].strMealThumb

    var instructionsElement = document.querySelector('.recipeinstructions')
    instructionsElement.textContent = data.meals[0].strInstructions
}

const searchButton = document.querySelector('.searchbutton')
searchButton.addEventListener('click', searchRecipe)

const updateButton = document.querySelector('.update')
updateButton.addEventListener('click', randomRecipe)

randomRecipe()
