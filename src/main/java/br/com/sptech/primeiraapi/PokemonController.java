package br.com.sptech.primeiraapi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private List<Pokemon> pokemons = new ArrayList<Pokemon>();
    
    @GetMapping("/listAll")
    public List<Pokemon> getPokemon() {

        // pokemons.add(new Pokemon("charmander", "fire"));
        // pokemons.add(new Pokemon("pikachu", "eletric"));
        // pokemons.add(new Pokemon("bulbassaur", "grass"));
        
        return pokemons;
    }

    @RequestMapping("/add")
    public void postPokemon(@RequestBody Pokemon pkm) {
        try {
            this.pokemons.add(pkm);
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}
