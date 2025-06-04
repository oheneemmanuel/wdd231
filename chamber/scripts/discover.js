import { places } from "../data/discover.mjs";
//onsole.log(places)
window.addEventListener('DOMContentLoaded', (event) => {
    // getting the current date 
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById("LastModified").textContent = `Last Modified: ${lastModified}`;

    const Button = document.getElementById("menu");

    const menu = document.getElementById("animate-me");
    // adding event listener to the button 
    Button.addEventListener('click', () => {
        menu.classList.toggle("show");
        Button.classList.toggle("show");
    
    
    
    });
    // created a card to display the images inside the html
    const cards = document.querySelector("#fun-things");

    // function to display the item 
    const displayFunThings = (places) => {
        places.forEach((place) => {
            const card = document.createElement('div')
            // creating elements to hold the images, paragrapg, headings
            const name = document.createElement('h2');
            const location = document.createElement('p');
            const descrip = document.createElement('p');
        
            const pic = document.createElement('img');
            // giving the name and the imges to teh element created
            name.textContent = place.name;
            location.textContent = place.address;
            descrip.textContent = place.description;
            location.textContent = place.address;
            
            // setting the image attribute 
            pic.setAttribute('src', place.image);
            pic.setAttribute('alt', `picture of ${place.name}`);
            pic.setAttribute('loading', 'lazy')
            pic.setAttribute('width', '340')
            pic.setAttribute('height', '440')

            // adding them to the card in the html
            card.appendChild(name);
            card.appendChild(pic);
            card.appendChild(descrip);
            card.appendChild(location);

            cards.appendChild(card);

            
        });
        
    }

    displayFunThings(places);
})
