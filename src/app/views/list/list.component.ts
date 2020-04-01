import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPokemon = null;
  get pokemonList() {
    return this.pokeApi.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  };;
  get pokemonSprite() {
    return `//serebii.net/art/th/${this.selectedPokemon.number}.png`;
  }

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(): void {
  }

  selectPokemon(pkm) {
    this.selectedPokemon = pkm;
  }

}
