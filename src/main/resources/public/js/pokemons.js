// box container
const box = document.querySelector("#center-box")

// pokemon class
class PokemonElement {

    // construtor
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

     // get pokemon div element
     getElement() {
        const element = document.createElement("div");
        element.classList.add('pokemon')

        this.#divHTML("name", this.name, element)
        this.#divHTML("type", this.type, element)

        return element
    }

    // create div element
    #divHTML(label, value, parent) {
        const element = document.createElement("div");
        element.innerHTML = `${label}: ${value}`;
        parent.appendChild(element);
    }
}

// get all pokemons
async function getAllPokemons() {
    const {data: pokemons} = await axios.get('/pokemon/listAll')
    return pokemons
}

function updatePokemonList() {
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

// new pokemon click
document.querySelector("#btn-new-pokemon").addEventListener("click", evt => {
    const name = document.querySelector("#inputName");
    const type = document.querySelector("#inputType");
    
    if (name === "") {
        window.alert("invalid name")
    } else {
        // send new pokemon
        sendNewPokemon(name.value, type.value || "normal");
        updatePokemonList()
        clearInputs([name, type]);
    }
})

async function sendNewPokemon(name, type) {
    await axios.post("/pokemon/add", {
        name,
        type
    })
}

function clearInputs(inputs) {
    inputs.forEach(input => {
        input.value = "";
    })
}

updatePokemonList()