import { Component, inject } from "@angular/core";
import { PokemonService } from "../../services/service.service";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { provideClientHydration } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  constructor() {}

  private servicePokemon = inject(PokemonService);

  listaPokemon = this.servicePokemon.listaDePokemons;

  getPokemonID(number: string) {
    this.listaPokemon.forEach((pokemon) => {
      if (pokemon.number == number) {
        this.servicePokemon.setPokemon(pokemon);
      }
    });
  }
}
