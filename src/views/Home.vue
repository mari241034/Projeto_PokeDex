<template>
  <main>
    <div class="content">
        <h1>PokéDex</h1>
        <h2>Explore os pokmons de todas as gerações com imagens e informações atualizadas. Utilize a busca para encontrar seu Pokémon favorito e navegue entre as páginas para descobrir novas criaturas do universo Pokémon.</h2>
    </div>
    <poke-list :pokemons="pokemonListItem"> </poke-list>
    <poke-Pagination></poke-Pagination>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import PokeList from '../components/PokeList.vue';
import PokePagination from '../components/PokePagination.vue';
import { getPokemonByName, type PokemonListItem } from '../services/pokemonService';

export default defineComponent({
   components: {PokeList, PokePagination},
   data(){
    return{
        pokemonListItem: [] as PokemonListItem[],
        apiUrl: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=0',
        totalPokemon: 0
    }
   },

   mounted() {
     this.loadPokemonList(this.apiUrl)
   },
   methods: {
    async loadPokemonList(url: string){
      const response = await axios.get(url);

      const pokemonWithImage = await Promise.all(
        response.data.results.map(async (pokemon: { name: string; }) => {
          const details = await getPokemonByName(pokemon.name);
          return {
            name: pokemon.name,
            image: details.sprites.front_default
          }
        })
      )
      this.pokemonListItem = pokemonWithImage;
      this.totalPokemon = response.data.count;
    }
   },
})

</script>

<style>

</style>

