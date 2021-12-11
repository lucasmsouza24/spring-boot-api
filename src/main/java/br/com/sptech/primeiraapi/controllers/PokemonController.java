package br.com.sptech.primeiraapi.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sptech.primeiraapi.entities.Pokemon;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private List<Pokemon> pokemons = new ArrayList<Pokemon>();
    
    @GetMapping("/listAll")
    public List<Pokemon> getPokemons() {        
        return pokemons;
    }

    @RequestMapping("/add")
    public void postPokemon(@RequestBody Pokemon pkm) {
        try {
            this.pokemons.add(pkm);
            System.out.println("Pokemon adicionado: " + pkm.getName());
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}
