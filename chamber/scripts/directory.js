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
    const grid = document.getElementById('grid');
    const list = document.getElementById('list');
    const display = document.querySelector("#card")
    grid.addEventListener('click', () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    list.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });



    const cards = document.querySelector('#card');
    const displayCompany = (companies) => {
        companies.forEach((company) => {
            // creating elements 
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let logo = document.createElement('img');
            // setting the attribute of the image
            logo.setAttribute('src', company.image);
            logo.setAttribute('alt', `logo of ${company.name}`);
            logo.setAttribute('loading',  'lazy');
            logo.setAttribute('width', '340');
            logo.setAttribute('height', '440');
            website.setAttribute('href', company.website);
            // building the name, address, phone and website so it can appear in when the page is rendered
            name.textContent = company.name;
            address.textContent = company.address;
            phone.textContent = company.phone;
            website.textContent = company.website;
            //Adding the elements to the card created 
            card.appendChild(name);
            card.appendChild(logo);
            card.appendChild(address)
            card.appendChild(phone)
            card.appendChild(website)

            // adding the card to the cards which got the element by id #cards
            cards.appendChild(card);
        });

    }

    async function getCompanyInfo() {
        const response = await fetch("./data/members.json");
        const data = await response.json();
        displayCompany(data.companies);
        
    }

    getCompanyInfo();

});



