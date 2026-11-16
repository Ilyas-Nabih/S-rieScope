let movies = []
function filmAfficher(movies) {
  container.innerHTML = ""
    movies.forEach((movie) => {
      if (movie.id > 21){
        return;
      }
    const article = document.createElement("article");
    article.classList.add("bg-neutral-900", "rounded-[14px]", "overflow-hidden", "border", "border-[#393939]", "hover:cursor-pointer", "hover:border-white")

    const image = document.createElement("img");
    image.src = movie.image.original
    image.alt = movie.name + "image"
    image.classList.add("w-full", "h-48", "object-cover")

    const div1 = document.createElement("div");
    div1.classList.add("ml-4")

    const h2 = document.createElement("h2")
    h2.classList.add("text-white", "font-bold", "mt-1")
    h2.textContent = movie.name

    const div2 = document.createElement("div")
    div2.classList.add("flex", "gap-2", "mt-1")

    movie.genres.forEach((genre) => {
      const span = document.createElement("span")
      const option = document.createElement("option")
      option.textContent = genre
      option.value = `${genre}`
      
      let bool = true
      document.querySelectorAll("option").forEach((element) => {
        if (genre===element.value) {bool=false}
      })
      if (bool){
        selectInput.appendChild(option)
      }
      
      span.classList.add("text-white", "bg-zinc-800", "rounded-[9px]", "pl-1.5", "pr-1.5")
      span.textContent = genre
      div2.appendChild(span)


    })

    const p = document.createElement("p")
    p.classList.add("text-zinc-400", "mt-1", "mb-1")
    p.innerHTML = movie.summary

    container.appendChild(article)
    article.appendChild(image)
    article.appendChild(div1)
    div1.appendChild(h2)
    div1.appendChild(div2)
    div1.appendChild(p)


  })
  
}

async function fetchFilm() {
  try {
    const response = await fetch("https://api.tvmaze.com/shows?page=0");
    if (!response.ok) {
      
      throw new Error(`erreur could not fetch data ${response.status}`);
    
    }
    
    movies = await response.json();
    filmAfficher(movies); 

  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

fetchFilm()