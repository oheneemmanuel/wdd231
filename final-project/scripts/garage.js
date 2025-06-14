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
    const cards = document.getElementById('car-container');
    
   
    
   

    const displayCars = (cars) => {

        cars.forEach((car) => {
            const card = document.createElement('div');
            const name = document.createElement('h2');
            const figure = document.createElement('figure');
            const pic = document.createElement('img');
            
            

            name.textContent = car.name;
            pic.setAttribute('src', car.image);
            pic.setAttribute('alt', `picture of ${car.name}`);
            pic.setAttribute('loading', 'lazy');
            pic.setAttribute('width', '300');
            pic.setAttribute('height', '200');
            figure.appendChild(pic);

            
            const but = document.createElement('button');
            but.textContent = "Learn More";
            const rent = document.createElement('button');
            rent.textContent = "Rent Now";
            
            but.addEventListener('click', () => {
                const modal = document.querySelector('#box');
                modal.innerHTML = `
                    <h3>Car Name : ${car.name}</h3>
                    <p><strong>Car Make</strong> : ${car.make}</p>
                    <p><strong>Car Color</strong> : ${car.color}</p>
                    <p><strong>Car Year</strong> : ${car.year}</p>
                    <p><strong>Car Features</strong> : ${car.features}</p>
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
          
            
            card.appendChild(name);
            card.appendChild(figure);
            card.appendChild(but)
            card.appendChild(rent)

            cards.appendChild(card);


            



        });

    }

    async function getCarPic() {
        try {
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