window.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById("LastModified").textContent = `Last Modified: ${lastModified}`;

    const Button = document.getElementById("menu");

    const menu = document.getElementById("animate-me");

    Button.addEventListener('click', () => {
        menu.classList.toggle("show");
        Button.classList.toggle("show");
    
    
    
    });
    // Get the car container element where the car cards will be displayed
    const cards = document.getElementById('car-container');
    
   
    
   // A function to display the cars in the garage

    const displayCars = (cars) => {
        // loop through the cars and create a card for each car
        cars.forEach((car) => {
            const card = document.createElement('div');
            const name = document.createElement('h2');
            const figure = document.createElement('figure');
            const pic = document.createElement('img');
            
            
            // setting the attributes and text content for the car card
            name.textContent = car.name;
            // setting the attributes for the figure and image elements
            pic.setAttribute('src', car.image);
            pic.setAttribute('alt', `picture of ${car.name}`);
            pic.setAttribute('loading', 'lazy');
            pic.setAttribute('width', '300');
            pic.setAttribute('height', '200');
            // appending the image to the figure element
            figure.appendChild(pic);

            // creating buttons for more information and renting the car
            const but = document.createElement('button');
            but.textContent = "Learn More";
            const rent = document.createElement('button');
            rent.textContent = "Rent Now";

            //adding event listeners to the buttons
            but.addEventListener('click', () => {
                // when the "Learn More" button is clicked, a modal will pop up with more information about the car
                // creating a modal to display car information
                const modal = document.querySelector('#box');
                modal.innerHTML = `
                    <h3>Car Name : ${car.name}</h3>
                    <p><strong>Car Make</strong> : ${car.make}</p>
                    <p><strong>Car Color</strong> : ${car.color}</p>
                    <p><strong>Car Year</strong> : ${car.year}</p>
                    <p><strong>Car Features</strong> : ${car.features}</p>
                    <p><strong>Car type</strong> : ${car.type}</p>

                    <button class="closeModal">❌</button>


                `;
                modal.showModal();

                modal.querySelector('.closeModal').addEventListener("click", () => {
                    modal.close();
                });

               

                
        
            });
            rent.addEventListener('click', () => {
                window.location.href = "rent.html";
            });
          
            // appending the elements to the card
            card.appendChild(name);
            card.appendChild(figure);
            card.appendChild(but)
            card.appendChild(rent)
            //adding the card to the car container so it can be displayed on the page
            cards.appendChild(card);


            



        });

    }

    async function getCarPic() {
        try {
            // fetching the car data from the JSON file
            const response = await fetch('cars.json');
            if (response.ok) {
                const data = await response.json();
                displayCars(data.cars);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    getCarPic();
    


})