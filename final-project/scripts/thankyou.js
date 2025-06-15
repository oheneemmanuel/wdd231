import { sidebar, showVisitMessage } from "./localstorage.mjs";

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
    
    const getInfo = window.location.search;
    console.log(getInfo);
    const myInfo = new URLSearchParams(window.location.search);
    console.log(myInfo);

    console.log(myInfo.get('first-name'));
    console.log(myInfo.get('last-name'));
    console.log(myInfo.get('email'));
    console.log(myInfo.get('tel'));
    console.log(myInfo.get('age'));
    console.log(myInfo.get('pickup-date'));
    console.log(myInfo.get('pickup-time'));
    console.log(myInfo.get('car-type'));
    console.log(myInfo.get('timestamp'));
    
    document.querySelector('#results').innerHTML = `
        <p><strong>Form submitted by :</strong> ${myInfo.get('first-name')} ${myInfo.get('last-name')}</p>
        <p><strong> Your e-mail :</strong> ${myInfo.get('email')} </p>
        <p><strong>Your Phone no_ is :</strong> ${myInfo.get('tel')} </p>
        <p><strong>Age :</strong> ${myInfo.get('age')}</p>
        <p><strong>Your pick date :</strong> ${myInfo.get('pickup-date')}  at ${myInfo.get('pickup-time')}</p>
        <p><strong>Your Car type :</strong> ${myInfo.get('car-type')}</p>
        <p><strong>Time opened form :</strong> ${myInfo.get('timestamp')} </p>
        

    `;

    
});


    
