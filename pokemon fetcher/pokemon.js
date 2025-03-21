async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      const imgElement = document.getElementById("pokemon-sprite");
      imgElement.src = "../content/sadBob.png";

      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemon-sprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// Submit Task via Enter
const inputBox = document.getElementById("pokemon-name");
inputBox.addEventListener(
  "keypress",
  function (e) {
    if (event.key === "Enter") {
      fetchData();
    }
  },
  false
);
