document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments
    //const overlay = document.getElementById('overlay'); // Assurez-vous que cet élément existe
    const overlayMap = document.getElementById('overlayMap'); 
    //const imageMozaique = document.querySelectorAll(".mozaique-item img");
    //const imageOverlay = document.querySelector(".imagePleinEcran");
    //const fermerImage = document.querySelector(".fermerImage"); // Assurez-vous que cet élément existe
    const fermerMap = document.querySelector(".fermerMap");
    const button = document.querySelector(".buttonMap");

    // Fonction pour afficher l'image en plein écran
    // function afficherImagePleinEcran(element) {
    //     overlay.style.display = "block";
    //     imageOverlay.src = element.src;
    // }

    // Fonction pour afficher la carte en plein écran
    function afficherImagePleinEcranMap() {
        overlayMap.style.display = "block";
    }

    // Fonction pour fermer l'image en plein écran
    // function fermerImagePleinEcran() {
    //     overlay.style.display = "none";
    // }

    // Fonction pour fermer la carte en plein écran
    function fermerImagePleinEcranMap() {
        overlayMap.style.display = "none";
    }

    // Ajouter les événements pour les images de la mosaïque
    // imageMozaique.forEach(image => {
    //     image.addEventListener("click", function() {
    //         afficherImagePleinEcran(image);
    //     });
    // });

    // Ajouter les événements pour fermer l'image en plein écran
    // overlay.addEventListener("click", fermerImagePleinEcran);
    // fermerImage.addEventListener("click", fermerImagePleinEcran);

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

    // Ajouter un événement de clic sur chaque lien map 
    // mapLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault();  // Empêcher le comportement par défaut
    //         const map = link.getAttribute('href').replace('geo:', '');
    //         console.log(`Préparer ouverture de la carte : ${map}`);
    //         window.location.href = `tel:${map}`;
    //     });
    // });
});
