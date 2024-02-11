/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleEl = document.createElement('article');
        
        const h3El = document.createElement('h3');
        h3El.innerText = temple.templeName;

        const imageEl = document.createElement('img');
        imageEl.setAttribute('src', temple.imageUrl);

        articleEl.appendChild(h3El);
        articleEl.appendChild(imageEl);

        templesElement.appendChild(articleEl);
    });
}

/* async getTemples Function using fetch()*/

async function getTemples() {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();

    data.sort((a, b) => a.templeName.localeCompare(b.templeName));

    templeList.push(...data);
    displayTemples(data);
}

/* reset Function */
function reset() {
    templesElement.innerHTML = ''
}

/* filterTemples Function */

function filterTemples(temples) {
    reset();
    
    const filter = document.querySelector('#filtered').value

    switch(filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')))
            break;
        case 'nonutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')))
            break;
        case 'older':
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)))
            break;
        case 'all':
            displayTemples(temples)
        default:
            displayTemples(temples)
            
    }
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList)})
