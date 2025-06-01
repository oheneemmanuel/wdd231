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
    console.log(myInfo.get('organization-name'));
    console.log(myInfo.get('membership-level'));
    console.log(myInfo.get('organization-description'));
    console.log(myInfo.get('timestamp'));
    
    document.querySelector('#results').innerHTML = `
        <p><strong>Form submitted by :</strong> ${myInfo.get('first-name')} ${myInfo.get('last-name')}</p>
        <p><strong> Your e-mail :</strong> ${myInfo.get('email')} </p>
        <p><strong>Your Phone no_ is :</strong> ${myInfo.get('tel')} </p>
        <p><strong>Company-Name :</strong> ${myInfo.get('organization-name')}</p>
        <p><strong>Membership level Request :</strong> ${myInfo.get('membership-level')} </p>
        <p><strong>Description of Company :</strong> ${myInfo.get('organization_description')}</p>
        <p><strong>Time opened form :</strong> ${myInfo.get('timestamp')} </p>
        

    `;

    
});


    
