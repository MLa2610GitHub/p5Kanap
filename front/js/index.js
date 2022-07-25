/*INSERER LES PRODUITS DANS LA PAGE D'ACCUEIL

/* Requêter l'API avec une fonction async await pour récupérer les infos de tous les canapés */

console.log("connecté");

async function getResponse() {
  const responseJSON = await fetch("http://localhost:3000/api/products");
  //promesse et attente de réponse

  const response = await responseJSON.json();
  console.log(response, "objet Javascript");
  return response;
}

async function loading() {
  let resultats = await getResponse();
  console.log(resultats); //rapporte une liste de 8 objets

  // Création d'une boucle pour parcourir le tableau
  resultats.forEach((item) => {
    console.log(item);
    // item contient chaque objet détaillé, soit 8 items

    /* Création d'un elt HTML avec les valeurs des objets items */
    let itemsArticle = `     
      <a href="product.html?id=${item._id}">
       <article> 
      <img src="${item.imageUrl}" alt="${item.altTxt}"  />
      
        <h3  class="productName"> ${item.name}</h3>
        <p class="productDescription"> ${item.description}</p>       
        </article>  
        </a>
         `;

    // Affichage des produits dans la page
    document.getElementById("items").innerHTML += itemsArticle;
  }); // Fermeture de la boucle
}

loading().then();
