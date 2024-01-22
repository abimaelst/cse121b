/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Abimael Tavares";
const  currentYear = '2024';
const profilePicture = 'images/me.JPG';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`




window.onload = () => {

    function renderFood(foodArray) {
        foodElement.innerHTML = foodArray.reduce((acc, curr) => {
            acc += `<br>${curr}`
            return acc
        }, '')
    }

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture)
    imageElement.setAttribute('alt', `Profile image of ${fullName}`)

    /* Step 5 - Array */

    const favoriteFood = []

    favoriteFood.push('carne do sol, rice, beans')
    renderFood(favoriteFood)

    let newFavoriteFood = 'pasta, banana, orange juice'

    favoriteFood.push(newFavoriteFood)
    renderFood(favoriteFood)

    favoriteFood.pop();
    renderFood(favoriteFood)

    newFavoriteFood = 'hotdog, soda, fries, catchup'

    favoriteFood.push('hotdog, soda, fries, catchup')
    renderFood(favoriteFood)

    favoriteFood.shift()
    renderFood(favoriteFood)


    newFavoriteFood = 'pie, sushi, maio, lean beef'

    favoriteFood.push(newFavoriteFood)
    renderFood(favoriteFood)


   
}









