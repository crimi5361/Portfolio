/*==========Basculer l’icône de la barre de navigation=============== */
let meniIcon = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');


meniIcon.onclick = ()=> {
    meniIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==========Faire défiler la section Lien actif=============== */

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >=offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[ href*=' +  id  +']').classList.add('active');

            });
        };
    });

    /*==========barre de navigation collante=============== */

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);
     
/*==========Supprimer l’icône de basculement et la barre de navigation lorsque vous cliquez sur le lien de la barre de navigation=============== */

meniIcon.classList.remove('bx-x');
navbar.classList.remove('active');
    
};

/*==========Faire défiler l’affichage=============== */

ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200


});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'web Developer', 'Database Administrator'],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const fullname = document.getElementById('full')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const mess = document.getElementById('message')


const form = document.querySelector('form');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br>  phone: ${mobile.value}<br> Email: ${email.value}<br>  Message: ${mess.value}<br>`;

    Email.send({
        SecureToken: "39e773fe-c5b5-496d-abd5-a8673baf781d",
        To: 'bogaange167@gmail.com',
        From: "bogaange167@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    })
    .then(
        message => {
            // Envoi réussi, affichez une boîte de dialogue avec Swal.fire
            Swal.fire({
                title: "E-mail envoyé avec succès!",
                text: "Votre message a été envoyé.",
                icon: "success"
            });
        }
    )
    .catch(
        error => {
            // En cas d'erreur, affichez une boîte de dialogue avec Swal.fire
            Swal.fire({
                title: "Erreur lors de l'envoi de l'e-mail",
                text: "Veuillez réessayer plus tard.",
                icon: "error"
            });
            console.error("Erreur lors de l'envoi de l'e-mail:", error);
        }
    );
}


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    sendEmail();
});


function validateForm() {
    var fullName = document.getElementById("full").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Reset previous error styles
    resetErrorStyles();

    // Validate each input
    if (fullName === "") {
        displayError("errorFullName");
    }

    if (email === "") {
        displayError("errorEmail");
    }

    if (mobile === "") {
        displayError("errorMobile");
    }

    if (subject === "") {
        displayError("errorSubject");
    }

    if (message === "") {
        displayError("errorMessage");
    }

    // Submit the form if all inputs are filled
    if (fullName !== "" && email !== "" && mobile !== "" && subject !== "" && message !== "") {
        sendEmail();
    }
}

function displayError(errorId) {
    document.getElementById(errorId).style.display = "block";
    var inputElement = document.getElementById(errorId.replace("error", "").toLowerCase());
    inputElement.classList.add("error");
}

function resetErrorStyles() {
    var errorElements = document.querySelectorAll(".error-text");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].style.display = "none";
    }

    var inputElements = document.querySelectorAll(".item");
    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].classList.remove("error");
    }
}
