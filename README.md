[README.md](https://github.com/user-attachments/files/34924571/README.md)
# 🎬 SérieScope

**SérieScope** est une application web monopage (SPA) conçue pour une médiathèque afin de parcourir, rechercher, filtrer et enrichir un catalogue de séries TV.

Le catalogue est alimenté dynamiquement à l'aide de l'API publique **TVmaze**, permettant aux utilisateurs d'explorer les séries disponibles, de filtrer par nom ou par genre, et d'ajouter de nouvelles entrées directement dans le catalogue de la session en cours.

## ✨ Fonctionnalités

* **Affichage dynamique du catalogue (`fetchFilm` & `filmAfficher`)** : Récupère les données des séries de manière asynchrone depuis l'API TVmaze (`https://api.tvmaze.com/shows?page=0`) avec `fetch()` et `async/await`. Affiche des cartes responsives présentant l'affiche (`image.original`), le titre (`name`), les badges de genres (`genres`) et le résumé (`summary`).

* **Recherche en temps réel (`filmRecherche`)** : Filtrage instantané et insensible à la casse par titre de série au fur et à mesure de la saisie dans le champ de recherche (`#search`).

* **Filtrage dynamique par genre (`filterFilm`)** : Remplit automatiquement la liste déroulante des genres (`#genre`) avec les genres uniques extraits des séries récupérées et filtre les cartes affichées à l'aide de `.filter()` et `.includes()`.

* **Ajout d'une série (`filmAjouter`)** : Permet aux utilisateurs d'ajouter une nouvelle série via le formulaire (`#formulaire`) avec un titre obligatoire (`#nom-serie`), un genre obligatoire (`#Genre`) et une description facultative (`#description`). La série est ajoutée directement au tableau JavaScript en mémoire (`movies`) avec une image de remplacement et met à jour le DOM sans recharger la page.

* **Interface sombre et responsive** : Conçue avec **Tailwind CSS** (`bg-zinc-950` / `bg-neutral-900`), s'adaptant aux écrans mobile, tablette et ordinateur (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## 🛠️ Technologies utilisées

* **HTML5** : Structure sémantique (`<header>`, `<main>`, `<section>`, `<article>`, `<form>`).

* **Tailwind CSS** : Framework CSS utilitaire chargé via CDN.

* **JavaScript Vanilla (ES6+)** : Manipulation du DOM (`createElement`, `appendChild`), gestion des événements (`submit`, `input`, `change`), méthodes de tableaux (`forEach`, `filter`, `includes`, `push`) et requêtes API avec `async/await`.

* **API** : [API REST TVmaze](https://www.tvmaze.com/api)

## 📂 Structure du projet

```text
seriescope/
├── index.html          # Structure principale de l'application monopage et mise en page Tailwind
├── js/
│   └── script.js       # Récupération API, rendu du DOM, recherche, filtrage et logique du formulaire
├── asssets/            # Ressources statiques
│   └── icons/
│       └── —Pngtree—clapperboard glyph icon vector_5209072.png
└── README.md           # Documentation du projet
```

## 🚀 Installation et lancement

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/Ilyas-Nabih/S-rieScope
   cd seriescope
   ```

2. **Lancer l'application :**
   Le projet utilisant JavaScript Vanilla et le CDN Tailwind CSS, aucune étape de compilation ni dépendance n'est requise.

   * Ouvrez `index.html` directement dans votre navigateur, **ou**

   * Utilisez l'extension **Live Server** dans VS Code pour lancer le projet en local.

## 👨‍💻 Auteur

* **Ilyas Nabih**
