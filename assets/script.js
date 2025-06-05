const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



/* AJOUT DES FLECHES */
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
//chercher les deux flèches dans le HTM pour pouvoir réagir quand on clique dessus

/* AJOUT DES BULLETS POINTS */
const dotsContainer = document.querySelector('#banner .dots');
//sélectionne l’endroit dans le HTML ou on va insérer les petits cercles les "dots"

/*DYNAMIQUE DES BULLETS*/
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('dot_selected');
  dotsContainer.appendChild(dot);
});
//slides.forEach(...) on parcourt chaque slide
//dot.classList.add('dot') on lui donne la classe dot pour le style
//if (index === 0) si c’est le 1er dot, on le marque comme sélectionner
//dotsContainer.appendChild(dot) on ajoute ce dot dans le HTML

/*Sélection des éléments après création des dots*/
const bannerImage = document.querySelector('.banner-img');//sélectionne l’image à changer
const bannerText = document.querySelector('#banner p');//sélectionne le texte a mettre a jour
const dots = document.querySelectorAll('.dot');//tout les petits cercles

let currentIndex = 0;//commence a la 1er image, index 0

/*Fonction pour mettre à jour carrousel*/
function updateCarousel() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;//bannerImage.src = ... affiche l’image correspondant a currentIndex
  bannerText.innerHTML = slides[currentIndex].tagLine;//bannerText.innerHTML = ... affiche le texte du slide

  dots.forEach(dot => dot.classList.remove('dot_selected'));//dots.forEach(...) enlève la sélection de tous les dots
  dots[currentIndex].classList.add('dot_selected');//dots[currentIndex].classList.add(...) sélectionne le dot correspondant au slide actuelle
}

/*CLIC FLECHE DROITE*/
rightArrow.addEventListener('click', () => {//va à l’image suivante
  currentIndex = (currentIndex + 1) % slides.length;  // boucle automatique vers 0 après la dernière
  updateCarousel();
  //(...) % slides.length si on dépasse la dernière on revient a la 1ere
});

/*CLIC FLECHE GAUCHE*/
leftArrow.addEventListener('click', () => {// va à l’image précédente
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // boucle automatique vers dernière après 0
  updateCarousel();
  //+ slides.length pour éviter les nombres négatifs ex. -1 devient 3 si on a 4 slides
});

/*Initialisation au chargement*/
updateCarousel();//quand la page se charge elle affiche la 1ere image avec son texte et son point sélectionné
