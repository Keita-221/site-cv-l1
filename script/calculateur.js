function calculerPrix() {
    let service = document.getElementById("service").value;
    let modele = document.getElementById("modele").value.trim();
    let panne = document.getElementById("panne").value;
    if (modele === "") {
        document.getElementById("resultat").textContent = "Veuillez entrer un modèle de téléphone.";
        return;
    }
    let prix = 0;
    if (service === "reparation") {
        if (panne === "ecran"){
            prix = 50;
        }
        else if (panne === "batterie"){
            prix = 30;
        } 
        else if (panne === "hautParleur") {
            prix = 25;
        }
        else if (panne === "reseau"){
             prix = 40;
         } 
        }   

    else if (service ==="deblocage") {
        if (panne === "Compte Google"){
            prix = 20;
        }
        else if (panne  === "Compte Icloud"){
            prix = 50;
        } 
        else if (panne === "reseau"){
             prix = 75;
         } 
         else if (panne === "Diagnostic"){
            prix = 10;
        } 
    }

   /* else if (service === "deblocage") {
        prix = 35; // Prix unique pour le déblocage
    }*/
    document.getElementById("resultat").textContent =
        `Coût estimé pour ${service} (${modele}) : ${prix}€`;
}

/*Partie animation */
function demarrerReparation() {
    var tournevis = document.getElementById("tournevis");
    var message = document.getElementById("message");

    tournevis.style.left = "120px"; // Déplace le tournevis vers le téléphone
    setTimeout(afficherMessage, 2000); // Attend 2 secondes puis affiche le message
}
function afficherMessage() {
    var message = document.getElementById("message");
    var tournevis = document.getElementById("tournevis");

    message.style.display = "block"; // Affiche "Réparation en cours..."
    setTimeout(reinitialiser, 2000); // Attend 2 secondes puis réinitialise
}
function reinitialiser() {
    var message = document.getElementById("message");
    var tournevis = document.getElementById("tournevis");

    message.style.display = "none"; // Cache le message
    tournevis.style.left = "0px"; // Remet le tournevis à sa place
}

/*Partie Diaporama*/
let sIndex = 0;
let slideInterval;
let slides = document.getElementsByClassName("slides");
// Fonction pour afficher l'image actuelle
function displaySlide() {
    if (sIndex >= slides.length) {
        sIndex = 0;
    }
    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[sIndex].style.display = "block";
}
displaySlide()
// Fonction pour changer d'image avec les boutons "Next" et "Previous"
function showImage(n) {
    sIndex += n;
    displaySlide();
}
function slideNextImage() {
    showImage(1);}
// Fonction pour démarrer l'auto-slide toutes les 2 secondes
function startAutoSlide() {
 
     setInterval(slideNextImage, 2000);
}
// Exécuter l'affichage initial et démarrer l'auto-slide dès le chargement de la page
startAutoSlide();


let index = 0;
let main = document.getElementById("main");
let images = document.getElementsByClassName("thumb");
function prevImage() {
    if (index < 0){
         index = images.length - 1;
    } 
    index--;
    main.src = images[index].src;
}
function nextImage() {
    if (index >= images.length){
         index = 0;
    }  
    index++;  
    main.src = images[index].src;
}
function selectImage(img) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === img.src) {
            index = i;
            break;
        }  
    }
    main.src = img.src;
}
function validateForm() {
    // Récupération des valeurs du formulaire
    let clientName = document.getElementById("clientName").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let zipcode = document.getElementById("zipcode").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phoneModel = document.getElementById("phoneModel").value;
    let description = document.getElementById("description").value;
    // Déclaration des expressions régulières pour validation
    let reg1 = /^[A-Za-z]+$/; // Uniquement des lettres
    let reg2 = /^[0-9]+$/; // Uniquement des chiffres
    let reg3 = /^[0-9a-zA-Z]+$/; // Caractères alphanumériques
    let reg4 = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i; // Email valide
    let erreur = "";
    // Validation des champs avec conditions
    if (!reg1.test(clientName)) {
        erreur += "Le nom du client ne doit contenir que des lettres.\n";
    }
    if (!reg1.test(firstname)) {
        erreur += "Le prénom ne doit contenir que des lettres.\n";
    }
    if (!reg1.test(lastname)) {
        erreur += "Le nom ne doit contenir que des lettres.\n";
    }
    if (!reg2.test(zipcode)) {
        erreur += "Le code postal ne doit contenir que des chiffres.\n";
    }
    if (!reg3.test(address)) {
        erreur += "L'adresse ne doit contenir que des caractères alphanumériques.\n";
    }
    if (!reg4.test(email)) {
        erreur += "L'adresse e-mail est invalide.\n";
    }
    if (phoneModel.trim() === "") {
        erreur += "Le modèle du téléphone est requis.\n";
    }
    if (description.trim() === "") {
        erreur += "Veuillez décrire le problème rencontré.\n";
    }
    // Affichage des erreurs ou du récapitulatif
    if (erreur !== "") {
        alert(erreur);
    } else {
        document.getElementById("recap").innerHTML = `
        <h3>Récapitulatif :</h3>
        <p><strong>Prénom :</strong> ${firstname}</p>
        <p><strong>Nom :</strong> ${lastname}</p>
        <p><strong>Code Postal :</strong> ${zipcode}</p>
        <p><strong>Adresse :</strong> ${address}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Modèle du téléphone :</strong> ${phoneModel}</p>
        <p><strong>Description du problème :</strong> ${description}</p>`; // Ajout de la fermeture correcte du template string

        document.getElementById("recap").classList.remove("hidden"); // Séparé du template string
    }
}
// Fonction pour vider le formulaire et masquer le récapitulatif
function clearForm() {
    document.getElementById("repairForm").reset();
    document.getElementById("recap").classList.add("hidden");
}