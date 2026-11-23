import { getAll } from "./src/services/serieService.js";
import { filmAfficher } from "./src/ui/cards.js";
import { filmAjouter } from "./src/ui/form.js";

let movies = []
const formulaire = document.getElementById("formulaire");


async function init() {
    movies = await getAll();
    console.log(movies);
    filmAfficher(movies)

    
}


formulaire.addEventListener("submit", async (e)=>{
    e.preventDefault();
    await filmAjouter(movies, formulaire);
  } );

init()
