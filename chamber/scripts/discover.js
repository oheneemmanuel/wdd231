import { places } from "../data/discover.mjs";
import { showVisitMessage } from "./localstorage.mjs";  
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
            const location = document.createElement('address');
            const descrip = document.createElement('p');
            //location.style.fontSize = '12px';
            //location.style.fontStyle ="italic";
            const figure = document.createElement('figure');
            const pic = document.createElement('img');
            // giving the name and the imges to teh element created
            name.textContent = place.name;
        
            location.textContent = place.address;

            descrip.textContent = place.description;
            
            
            // setting the image attribute 
            pic.setAttribute('src', place.image);
            pic.setAttribute('alt', `picture of ${place.name}`);
            pic.setAttribute('loading', 'lazy')
            pic.setAttribute('width', '300')
            pic.setAttribute('height', '200')
            figure.appendChild(pic)
            // created a button for the dialog 
            const but = document.createElement('button');
            but.textContent = "Learn More";
            // adding an event listener for button to open the modal
            but.addEventListener('click', () => {
                const modal = document.querySelector('.box');
                // content that will appear when the modal is opened
                modal.innerHTML = `
                    <h3>${place.name}</h3>
                    <h4>Historical Background</h4>
                    <p>${place.history}</p>
                    <address>${place.address}</address>
                    
                    <button class="closeModal">❌</button>

                `;
                
                modal.showModal();
                // adding event listener to the close button to close the modal when its opened
                modal.querySelector('.closeModal').addEventListener("click", () => {
                    modal.close();
                });

            });

            // adding them to the card in the html
            card.appendChild(name);
            card.appendChild(figure);
            card.appendChild(descrip);
            card.appendChild(location);
            card.appendChild(but)
            // adding the element to the card created in the html
            cards.appendChild(card);

            
        });
        
    }

    displayFunThings(places);
})
