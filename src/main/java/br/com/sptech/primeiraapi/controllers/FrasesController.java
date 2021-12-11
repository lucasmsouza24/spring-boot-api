package br.com.sptech.primeiraapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/frase")
public class FrasesController {

    String[] names = {"apple", "pineapple", "strawberry", "watermelon"};
    
    @GetMapping("/boa-tarde")
    public String getFrase1() {
        return "boa tarde!";
    }

    @GetMapping("/fruta")
    public String getFruta(@RequestParam Integer id) {

        try {
            return "fruta: " + names[id];
        } catch(Exception e) {
            return "fruit not found";
        }

    }

    @GetMapping("/saudacao/{nome}")
    public String getSaudacao(@PathVariable String nome) {
        return String.format("Bem vindo, %s!", nome);
    }

    @GetMapping("/somar/{parcela1}/{parcela2}")
    public String getSomar(@PathVariable int parcela1, @PathVariable int parcela2) {
        return String.format("%d + %d = %d", parcela1, parcela2, parcela1 + parcela2);
    }

}
