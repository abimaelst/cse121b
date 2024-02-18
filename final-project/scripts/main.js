document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const heroesPerPage = 20;
    let currentHeroes = [];

    const searchBar = document.getElementById('searchBar');
    const heroesContainer = document.getElementById('heroesContainer');
    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination';
    document.body.appendChild(paginationContainer); 

    const debounce = (func, delay) => {
        let debounceTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    };

    searchBar.addEventListener('keyup', debounce((e) => {
        const searchString = e.target.value.toLowerCase();
        fetchHeroes(searchString);
    }, 300));

    function fetchHeroes(searchString) {
        const url = `https://akabab.github.io/superhero-api/api/all.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                currentHeroes = searchString ? data.filter(hero => hero.name.toLowerCase().includes(searchString)) : data;
                displayHeroes(currentPage);
            })
            .catch(err => console.error(err));
    }

    const displayHeroes = (page) => {
        const start = (page - 1) * heroesPerPage;
        const end = page * heroesPerPage;
        const paginatedHeroes = currentHeroes.slice(start, end);
    
        heroesContainer.innerHTML = paginatedHeroes.map(hero => `
            <div class="card">
                <img src="${hero.images.sm}" alt="${hero.name}">
                <h3>${hero.name}</h3>
                <p>${hero.biography.fullName}</p>
                <div class="powerstats">
                    <h4>Power Stats:</h4>
                    <p>Intelligence: ${hero.powerstats.intelligence}</p>
                    <p>Strength: ${hero.powerstats.strength}</p>
                    <p>Speed: ${hero.powerstats.speed}</p>
                    <p>Durability: ${hero.powerstats.durability}</p>
                    <p>Power: ${hero.powerstats.power}</p>
                    <p>Combat: ${hero.powerstats.combat}</p>
                </div>
            </div>
        `).join('');
    
        displayPagination(currentHeroes.length, page);
    }

    function displayPagination(totalHeroes, currentPage) {
        const pageCount = Math.ceil(totalHeroes / heroesPerPage);
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayHeroes(currentPage);
            });
            if (currentPage === i) pageButton.classList.add('active');
            paginationContainer.appendChild(pageButton);
        }
    }

    fetchHeroes('');
});