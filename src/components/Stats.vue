<script>
    import { store } from '../store.js';

    export default {
        name: 'Stats',
        components: {
        },
        data(){
            return {
                store
            }
        },
        methods: {
            getElettroPokemon(){
                return store.fPokeList.filter(v=>v.type.includes('Electric')).length;
            },
            getPsicoPokemon(){
                return store.fPokeList.filter(v=>v.type.includes('Psychic')).length;
            }
        }
    }

</script>

<template>
    <p id="favorites" class="ps-3">
        I tuoi pokemon preferiti: {{store.favoritePokemons.length > 0 ? store.favoritePokemons.join(', ') : '/'}}
    </p>
    <p id="stats"class="ps-3">
        Il numero di pokemon elettro visibile è {{ getElettroPokemon() }}
    </p>   
    <p id="stats"class="ps-3">
        Il numero di pokemon psico visibile è {{ getPsicoPokemon() }}
    </p>
</template>