import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../../services/service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';


@Component({
  selector: 'app-group',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './group.component.html'
  
})
export class GroupComponent {


  constructor() {}

  private servicePokemon = inject(PokemonService);

  listaPokemon = this.servicePokemon.listaDePokemons;
 

 getPokemonID (number: string) {

  this.listaPokemon.forEach((pokemon) => {
    if (pokemon.number == number) {
      this.servicePokemon.setPokemon(pokemon);
    }
  })

}
}
