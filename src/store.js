import { reactive } from "vue";

export const store = reactive({
    pokeList: [],
    fPokeList: [],
    favoritePokemons: [],
    isLoading: true,
    archetypes: [],
    filterArchetype: 'Archetype'
});