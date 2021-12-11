import { PokemonElement } from "./PokemonElement.js";

// elements
const box = document.querySelector("#center-box");
const btn = document.querySelector("#btn-new-pokemon");
const inputName = document.querySelector("#inputName");
const inpuType = document.querySelector("#inputType");

// new pokemon click
btn.addEventListener("click", evt => {
    if (inputName.value === "") {
        window.alert("invalid name")
    } else {
        // send new pokemon
        sendNewPokemon(inputName.value, inpuType.value);
        clearInputs([inputName, inpuType]);
        updatePokemonList()
    }
})

// send new pokemon to server
const sendNewPokemon = async (name, type) => {
    await axios.post("/pokemon/add", {
        name,
        type
    })
}

// update pokemon list
const updatePokemonList = () => {
    // clear box
    box.innerHTML = "";

    // rendering all elements on box
    getAllPokemons().then(pokemons => {
        pokemons.forEach(pkm => {
            const pokemon = new PokemonElement(pkm.name, pkm.type)
            box.appendChild(pokemon.getElement())
        })
    })
}

// get all pokemons
const getAllPokemons = async () => {
    const {data: pokemons} = await axios.get('/pokemon/listAll')
    return pokemons
}

// clear text inputs
const clearInputs = (inputs) => {
    inputs.forEach(input => {
        input.value = "";
    })
}

updatePokemonList()