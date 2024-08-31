// update annonce temporaire
const fermer = document.querySelector(".close");
const jumbotron = document.querySelector(".jumbotron");

// update ajouter événement pour fermer annonce
function fermerJumbotron() {
        jumbotron.style.display = "none";
}        
function ouvrirJumbotron() {
        jumbotron.style.display = "block";
} 
ouvrirJumbotron()
fermer.addEventListener("click", fermerJumbotron);
jumbotron.addEventListener("click", fermerJumbotron);