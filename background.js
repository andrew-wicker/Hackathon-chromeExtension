// async function fetchData() {
// 	const url = 'https://api-baseball.p.rapidapi.com/leagues?name=mlb';
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '1ffa3f3ac6mshde0dd90638d51eep120b46jsn0f588ab8d638',
// 			'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com',
// 		},
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json();
// 		console.log(response);
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// 	//return result;
// }

// background.js
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/background.js", { scope: "/" })
//     .then(function (registration) {
//       // Registration was successful
//       console.log("Service Worker registered with scope:", registration.scope);
//     })
//     .catch(function (error) {
//       // Registration failed
//       console.error("Service Worker registration failed:", error);
//     });
// }

async function fetchData(pokemon) {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";
  const url = baseURL + pokemon;
  console.log(url);
  // let result;
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		// 'X-RapidAPI-Key': '1ffa3f3ac6mshde0dd90638d51eep120b46jsn0f588ab8d638',
  // 		// 'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com',
  // 	},
  // };

  try {
    if (document.querySelector(".pokemon")) {
      const pokeRemove = document.querySelector(".pokemon");
      pokeRemove.remove();
    }
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    delete data.moves;
    const keys = Object.keys(data);
    console.log(keys);
    console.log(data.name);

    // const pokeData = fetchData(pokeName);

    // class Pokemon {
    // 	constructor(pokeName) {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.setAttribute("class", "pokemon");
    const extWrapper = document.querySelector(".wrapper");
    extWrapper.append(pokemonDiv);
    // const pokeData = fetchData('pikachu');

    const name = document.createElement("h1");
    name.setAttribute("id", "pokeName");
    pokemonDiv.append(name);

    const nameText = data.name[0].toUpperCase() + data.name.slice(1);
    console.log(nameText);
    document.getElementById("pokeName").innerHTML = `${nameText}`;

    const pokeImage = document.createElement("img");
    pokeImage.setAttribute("id", "pokeImage");
    pokemonDiv.append(pokeImage);
    pokeImage.setAttribute("src", `${data.sprites.front_default}`);
    pokeImage.setAttribute(
      "src",
      `${data.sprites.other.dream_world.front_default}`
    );
    // document.getElementById(pokeImage).innerHTML = `${data.sprites.front_default}`;

    const pokeId = document.createElement("div");
    pokemonDiv.append(pokeId);
    pokeId.setAttribute("class", "stats");
    pokeId.setAttribute("id", "pokeId");
    document.getElementById("pokeId").innerHTML = `ID : ${data.id}`;
    // console.log(data.id);

    const pokeType = document.createElement("div");
    const typeVariable = `${data.types[0].type.name}`;
    pokemonDiv.append(pokeType);
    pokeType.setAttribute("class", "stats");
    pokeType.setAttribute("id", "pokeType");
    document.getElementById(
      "pokeType"
    ).innerHTML = `Type : ${data.types[0].type.name}`;

    const pokeHeight = document.createElement("div");
    pokemonDiv.append(pokeHeight);
    pokeHeight.setAttribute("class", "stats");
    pokeHeight.setAttribute("id", "pokeHeight");
    document.getElementById("pokeHeight").innerHTML = `Height : ${data.height}`;

    const pokeWeight = document.createElement("div");
    pokemonDiv.append(pokeWeight);
    pokeWeight.setAttribute("class", "stats");
    pokeWeight.setAttribute("id", "pokeWeight");
    document.getElementById("pokeWeight").innerHTML = `Weight : ${data.weight}`;

    // return data;
  } catch (error) {
    console.error(error);
  }

  // fetch(url)
  // 	.then((data) => {
  // 		result = data.json();
  // 	})
  // 	.then((data) => console.log(data))

  // 	// try {
  // 	// 	const response = await fetch(url, options);
  // 	// 	result = await response.json();
  // 	// 	//console.log(response);
  // 	// 	console.log(result);
  // 	.catch((err) => console.error(err));
  // console.log(result);

  // return result;
}
// fetchData('squirtle');
const button = document.getElementById("myButton");
const textInput = document.getElementById("pokeSearchText");

// const pokeIdRemove = document.getElementById('pokeId');
// const pokeTypeRemove = document.getElementById('pokeType');
// const pokeImageRemove = document.getElementById('pokeImage');
// console.log(pokeRemove);
// let pokeSearchHistory = false;

button.addEventListener("click", () => {
  // remove previous Pokemon info
  // while (pokeRemove.firstChild) {
  // 	pokeRemove.removeChild(pokeRemove.firstChild);
  // }
  textInput.value = textInput.value.toLowerCase();
  fetchData(textInput.value);
});
//
// async function displayPokemonData(pokeName) {
// 	try {
// 		const pokeData = fetchData(pokeName);

// 		// class Pokemon {
// 		// 	constructor(pokeName) {
// 		const pokemonDiv = document.createElement('div');
// 		pokemonDiv.setAttribute('class', 'pokemon');
// 		const extWrapper = document.querySelector('.wrapper');
// 		extWrapper.append(pokemonDiv);
// 		// const pokeData = fetchData('pikachu');

// 		const name = document.createElement('h1');
// 		name.setAttribute('id', 'pokeName');
// 		pokemonDiv.append(name);
// 		console.log(pokeData.name);
// 		document.getElementsById('pokeName').innerHTML = pokeData.name;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
// console.log(displayPokemonData('pikachu'));
// 	}
// }

// const pokemon = new Pokemon(pikachu);
