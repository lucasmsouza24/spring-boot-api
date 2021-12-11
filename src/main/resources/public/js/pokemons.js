// box container
const box = document.querySelector("#center-box")

// pokemon class
class PokemonElement {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getElement = function() {
        const element = document.createElement("div");
        element.classList.add('pokemon')

        this.divHTML("name", this.name, element)
        this.divHTML("type", this.type, element)

        return element
    }

    divHTML = function(label, value, parent) {
        const element = document.createElement("div");
        element.innerHTML = `${label}: ${value}`;
        parent.appendChild(element);
    }

    addPokemon = () => {
        box.appendChild(this.getElement())
    }
}

// get all pokemons
async function getAllPokemons() {
    const {data: pokemons} = await axios.get('/pokemon/listAll')
    return pokemons
}

async function updatePokemons() {
    box.innerHTML = "";

    await getAllPokemons().then(pokemons => {
        pokemons.forEach(pkm => {
            const pokemon = new PokemonElement(pkm.nome, pkm.tipo)
            pokemon.addPokemon()
        })
    })
}

updatePokemons()