var i = 0; 			// init var i
var img = [];	// Images dans un array
var background = []; // Background array
var time = 1000;	// Temps de transition de 1 secondes
	 
// Images qui sont dans le slider de gauche
img[0] = "img/bad_mj.jpg";
img[1] = "img/king_of_pop.jpg";

// function ChangeImg pour que l'image se change automatiquement 
function changeImg(){
	document.slide.src = img[i];

	if(i < img.length - 1){
	  i++; 
	} else {
		i = 0;
	}

	// Le temps de changement
	setTimeout("changeImg()", time);
}

// La fonction s'exécute et change d'image tous les 2 secondes
changeImg();

// Pour les couleurs
var colors = ['lightskyblue', 'lightyellow', 'red']; 
var j = 0; // init var j

/* change de bg toutes les secondes (1s temps = 1000)  */
setInterval(function(){
    document.querySelector('section').style.background = colors[j];
    j++;
    if (j == colors.length) j = 0;
}, time);


