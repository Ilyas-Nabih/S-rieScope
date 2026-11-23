import { filmAfficher } from "./cards.js";
import { create } from "../services/serieService.js";

export async function filmAjouter(movies) {
  const nom = document.getElementById("nom-serie").value.trim();
  const genre = document.getElementById("Genre").value;
  const description = document.getElementById("description").value.trim();

  const newMovie = {
    name: nom,
    language: "OIIAIAOIIIAI",
    genres: genre.split(","),
    summary: description,
  };
    create(newMovie);
    movies.push(newMovie);
    filmAfficher(movies);
    formulaire.reset();
}