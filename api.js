function randomRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log('data:', data)
            createRandomCard(data)
            const header = document.querySelector('.header')
            header.style.backgroundImage = `url(${data.meals[0].strMealThumb})`
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

function searchRecipe(e) {
    e.preventDefault()
    
    const term = document.querySelector('.input').value
    if (term) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    fetch(url)
        .then((res) => res.json())
        .then((searchData) => {
            console.log('data:', searchData)
            console.log(term)
            createRecipeCard(searchData)
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        }), removeRecipe(), clearInput()
    }
}

function createRandomCard(data) {
    var recipeElement = document.querySelector('.recipetitle')
    recipeElement.textContent = data.meals[0].strMeal

    var imageElement = document.querySelector('.recipeimage')
    imageElement.src = data.meals[0].strMealThumb

    var instructionsElement = document.querySelector('.recipeinstructions')
    instructionsElement.textContent = data.meals[0].strInstructions
}

function createRecipeCard(searchData) {
    searchData.meals.forEach((meal) => {
        var box = document.querySelector('.recipecontainer')
        var card = document.createElement('recipecontainer')
        card.classList.add('searchrecipe')
        box.appendChild(card)
        var newTitle = document.createElement('h2')
        newTitle.textContent = meal.strMeal
        card.appendChild(newTitle)
        var newimage = document.createElement('img')
        newimage.src = meal.strMealThumb
        card.appendChild(newimage)
        var newInstructions = document.createElement('p')
        newInstructions.textContent = meal.strInstructions
        card.appendChild(newInstructions)
    })
}

function removeRecipe() {
    const toRemove = document.querySelector('.recipecontainer')
    while (toRemove.hasChildNodes()) {
        toRemove.removeChild(toRemove.firstChild)
    }
}

function clearInput() {
    document.querySelector('.input').value = ''
}

const searchButton = document.querySelector('.searchbutton')
searchButton.addEventListener('click', searchRecipe)

const updateButton = document.querySelector('.update')
updateButton.addEventListener('click', randomRecipe)

randomRecipe()
