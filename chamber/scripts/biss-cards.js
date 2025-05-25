



const cards = document.querySelector('#card');
const displayCompany = (companies) => {
    companies.forEach((company) => {
        // creating elements 
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let level = document.createElement('p');
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
        address.innerHTML = `<strong>Location :</strong> ${company.address}`;
        phone.innerHTML = `<strong>Phone :</strong> ${company.phone}`;
        website.innerHTML =`<strong>Website :  </strong>${company.website}`;
        level.innerHTML= `<strong>Membership-level :  </strong> ${company.membership_level}`;
        //Adding the elements to the card created 
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(level)
        card.appendChild(website)
        // adding the card to the cards which got the element by id #cards
        cards.appendChild(card);
    });
}
async function getCompanyInfo() {
    const response = await fetch("./data/biss-mem.json");
    const data = await response.json();
    displayCompany(data.companies);
    
}
getCompanyInfo();





