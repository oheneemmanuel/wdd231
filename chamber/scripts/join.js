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
    
    const business = [
        {
            name: 'Non-profit Membership',
            price: 50,
            benefits: [
                "Stay in the loop with our exclusive monthly e-newsletter",
                "Access to community-wide events and networking meetups",
                "Be the first to hear about new opportunities and updates"
            ]


        },
        {
            name: 'Bronze Membership Level',
            price: 150,
            benefits: [
                "All Non-Profit benefits included",
                "20% off all event tickets—save while you grow",
                "Priority early-bird registration for premium events",
                "Access to members-only webinars and live Q&A sessions"
            ]
        },
        {
            name: 'Silver Membership Level',
            price: 200,
            benefits: [
                "Everything from Bronze, plus so much more!",
                "Spotlight your business or profile on our homepage",
                "Quarterly featured interviews or promotions via our channels",
                "Complimentary VIP access to quarterly masterclasses",
                "Dedicated support and promotion from our community team"
            ]
        },
        {
            name: 'Gold Membership Level',
            price: 300,
            benefits: [
                "All Silver-level perks—and then some",
                "Unlimited access to all training and certifications",
                "Featured partner placement in all major campaigns",
                "Invitations to exclusive executive networking events",
                "Direct consultation access with our expert advisory board",
                "Your brand or profile promoted in every monthly newsletter"
            ]
        }
       

    ];
    //select all the open modal to open the modal when the learn more is clicked
    document.querySelector('form').addEventListener('submit', (event) => {
        document.getElementById("timestamp").value = new Date().toISOString();
    });
    document.querySelectorAll(".openModal").forEach((button, index) => {
        button.addEventListener("click", () => {
            const modal = document.querySelectorAll(".box")[index];
            // this is for when the modal is display the inner content of it 
            modal.innerHTML =  `
                <h3>${business[index].name}</h3>
                <p>Become a member of this level and experience the best and enjoy all the benefits</p>
                <p><strong>Price</strong> : $${business[index].price}</p>
                <p><strong>Benefits :</strong> ${business[index].benefits}</p>
                <button class="closeModal">❌</button>
            `;
            modal.showModal();
            // this is to close the modal when its opened 
            modal.querySelector(".closeModal").addEventListener("click", () => {
                modal.close();
            });
        });
        
    });

    
    


});