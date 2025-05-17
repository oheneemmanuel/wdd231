const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector('#cards');
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // creating a section element to hold the prophets
        let card = document.createElement('section');
        // creating elements to hold the prophets
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        //building the full name, birth date and place of birth
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of birth : ${prophet.birthdate} `;
        birthPlace.textContent = `Place of birth : ${prophet.birthplace}`;
        // setting the attributes of the image 
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // adding the card with the created elements
        
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        
        // adding the whole card to the cards (the whhole)
        cards.appendChild(card);
    }); 
}
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    
    //console.table(data.prophets);
    displayProphets(data.prophets);
    
}
getProphetData();