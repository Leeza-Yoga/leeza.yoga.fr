document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments
    const overlayMap = document.getElementById('overlayMap'); 
    const fermerMap = document.querySelector(".fermerMap");
    const button = document.querySelector(".buttonMap");


    // Fonction pour afficher la carte en plein écran
    function afficherImagePleinEcranMap() {
        overlayMap.style.display = "block";
    }

    // Fonction pour fermer la carte en plein écran
    function fermerImagePleinEcranMap() {
        overlayMap.style.display = "none";
    }

    // Ajouter l'événement pour afficher la carte en plein écran
    button.addEventListener("click", afficherImagePleinEcranMap);

    // Ajouter les événements pour fermer la carte en plein écran
    overlayMap.addEventListener("click", fermerImagePleinEcranMap);
    fermerMap.addEventListener("click", fermerImagePleinEcranMap);

 // LINK EMAIL ET PHONE


    // Sélectionner les liens email et téléphone
    const emailLinks = document.querySelectorAll('.email-link');
    const phoneLinks = document.querySelectorAll('.phone-link');
    const mapLinks = document.querySelectorAll('.map-link');

    // Ajouter un événement de clic sur chaque lien email
    emailLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Empêcher le comportement par défaut
            const email = link.getAttribute('href').replace('mailto:', '');
            console.log(`Préparer l'envoi d'un email à : ${email}`);
            window.location.href = `mailto:${email}`;
        });
    });

    // Ajouter un événement de clic sur chaque lien téléphone
    phoneLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Empêcher le comportement par défaut
            const phone = link.getAttribute('href').replace('tel:', '');
            console.log(`Préparer un appel à : ${phone}`);
            window.location.href = `tel:${phone}`;
        });
    });

});
