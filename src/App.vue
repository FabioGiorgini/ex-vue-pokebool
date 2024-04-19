<script>
import axios from 'axios';
import { store } from './store.js';
import Header from './components/Header.vue';
import Stats from './components/Stats.vue';
import PokeList from './components/PokeList.vue';

export default {
  components: {
    Header,
    Stats,
    PokeList
  },
  data(){
    return {
      store
    }
  },
  methods: {
    getPokeList() {
      let apiUrl = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

      axios.get(apiUrl, {})
      .then((response) => {
        store.pokeList = response.data.pokemon;
        this.alignArrays();
      });
    },
    searchInPokeList(userInput){
      store.fPokeList = store.pokeList.filter((v)=>v.name.toLowerCase().includes(userInput.toLowerCase()));
    },
    reset() {
      this.alignArrays();
    },
    alignArrays() {
      store.fPokeList = store.pokeList;
    }
  },
  mounted() {
    this.getPokeList();
  }
}
</script>

<template>
  <Header @searchPokemon="searchInPokeList" @reset="reset()"></Header>
  <Stats></Stats>
  <PokeList></PokeList>  
</template>

<style lang="scss">
  @use './style/generic.scss';
  @use './style/partials/variables' as *;


</style>
