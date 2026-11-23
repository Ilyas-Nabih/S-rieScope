export function filmAfficher(movies) {
  const selectInput = document.getElementById("genre");
  const container = document.getElementById("movies");
  const selectInput2 = document.getElementById("language")
  container.innerHTML = ""
  movies.forEach((movie) => {
    const article = document.createElement("article");
    article.classList.add("bg-neutral-900", "rounded-[14px]", "overflow-hidden", "border", "border-[#393939]", "hover:cursor-pointer", "hover:border-white")

    const image = document.createElement("img");
    image.src = movie.image?.original || "https://placehold.co/400x400";
    image.alt = movie.name + "image"
    image.classList.add("w-full", "h-48", "object-cover")

    const div1 = document.createElement("div");
    div1.classList.add("ml-4")

    const h2 = document.createElement("h2")
    h2.classList.add("text-white", "font-bold", "mt-1")
    h2.textContent = movie.name

    const div2 = document.createElement("div")
    div2.classList.add("flex", "gap-2", "mt-1")

    const option2 = document.createElement("option");
    option2.textContent = movie.language;
    option2.value = `${movie.language}`;

    let bool = true;
    selectInput2.querySelectorAll("option").forEach((element) => {
      if (movie.language === element.value) {
        bool = false;
      }
    });
    if (bool) {
      selectInput2.appendChild(option2);
    }

    movie.genres.forEach((genre) => {
      const span = document.createElement("span")
      const option = document.createElement("option")
      option.textContent = genre
      option.value = `${genre}`

      let bool = true
      document.querySelectorAll("option").forEach((element) => {
        if (genre === element.value) { bool = false }
      })
      if (bool) {
        selectInput.appendChild(option)
      }

      span.classList.add("text-white", "bg-zinc-800", "rounded-[9px]", "pl-1.5", "pr-1.5")
      span.textContent = genre
      div2.appendChild(span)


    })


    const p = document.createElement("p")
    p.classList.add("text-zinc-400", "mt-1", "mb-1", "line-clamp-2")
    p.innerHTML = movie.summary

    container.appendChild(article)
    article.appendChild(image)
    article.appendChild(div1)
    div1.appendChild(h2)
    div1.appendChild(div2)
    div1.appendChild(p)

    const divButtons = document.createElement("div");
    article.appendChild(divButtons);
    divButtons.classList.add("flex", "justify-around", "my-[12px]")
    

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add(
      "bg-red-500",
      "hover:bg-red-700",
      "rounded-xl",
      "text-white",
      "font-bold",
      "px-3",
      "py-2",
      "cursor-pointer",
    );

    const modifieBtn = document.createElement("button")
    modifieBtn.textContent = "Modifie"
    modifieBtn.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "rounded-xl",
      "text-white",
      "font-bold",
      "px-3",
      "py-2",
      "cursor-pointer",
    );

    divButtons.appendChild(deleteBtn);
    divButtons.appendChild(modifieBtn);
  })

}