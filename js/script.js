let movies = []
async function fetchFilm() {
  try {
    const response = await fetch("https://api.tvmaze.com/shows?page=0");
    if (!response.ok) {
      
      throw new Error(`erreur could not fetch data ${response.status}`);
    
    }
    
    movies = await response.json();    

  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}
fetchFilm()
