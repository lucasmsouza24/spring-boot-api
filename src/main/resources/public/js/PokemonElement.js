// pokemon class
export class PokemonElement {

    // construtor
    constructor(name, type) {
        this.name = name;
        this.type = type || "normal";
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