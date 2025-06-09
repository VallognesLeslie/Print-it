const slides = [/* tableau d'objet */
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		/*tagline=textehtml */
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
/*ce qui veut dire dans le html, trouve le 1erélément qui à la classe CSS arrow_left/arrow_right*/

/* AJOUT DES BULLETS POINTS */
const dotsContainer = document.querySelector('#banner .dots');
/*Dans le document HTML, trouve l’élément qui a la classe dots 
à l’intérieur de l’élément avec l’id banner et stocke le dans une constante appelé dotsContainer*/

/*DYNAMIQUE DES BULLETS*/
slides.forEach((_, index) => {/*chaque élément dans le  slides je vais faire quelque chose mais
je ne me sers pas de l’élément en lui meme _ mais je veux juste utiliser sa position dans le 
tableau index */

  const dot = document.createElement('div');/*crée un nouvel élément HTML <div> en mémoire 
  il n’est pas encore visible à l’écran*/


  dot.classList.add('dot');
  if (index === 0) dot.classList.add('dot_selected');
  dotsContainer.appendChild(dot);
});
/*dot.classList.add('dot') ajoute la classe CSS dot a mon élément dot
if (index === 0) si je suis sur le premier slide (index === 0), alors je colorie ce point avec la classe dot_selected
dotsContainer.appendChild(dot) ajoute le petit point (dot) a l'endroit prévu dans le HTML (dotsContainer)*/

/*Sélection des éléments après création des points*/
const bannerImage = document.querySelector('.banner-img');//sélectionne l’image à changer
const bannerText = document.querySelector('#banner p');//sélectionne le texte a mettre a jour
const dots = document.querySelectorAll('.dot');//tout les petits point

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
