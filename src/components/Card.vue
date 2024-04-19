<script>
    import { store } from '../store.js';

    export default {
        name: 'Card',
        components: {
        },
        data(){
            return {
                store,
                wicons: [
                    {
                        'text': 'Bug',
                        'icon': '🐞'
                    },
                        {
                        'text': 'Dark',
                        'icon': '🌙'
                    },
                        {
                        'text': 'Dragon',
                        'icon': '🐲'
                    },
                        {
                        'text': 'Electric',
                        'icon': '⚡'
                    },
                        {
                        'text': 'Fairy',
                        'icon': '✨'
                    },
                        {
                        'text': 'Fighting',
                        'icon': '🥊'
                    },
                        {
                        'text': 'Fire',
                        'icon': '🔥'
                    },
                        {
                        'text': 'Flying',
                        'icon': '🌪️'
                    },
                        {
                        'text': 'Ghost',
                        'icon': '👻'
                    },
                        {
                        'text': 'Grass',
                        'icon': '🌿'
                    },
                        {
                        'text': 'Ground',
                        'icon': '🗿'
                    },
                            {
                        'text': 'Ice',
                        'icon': '❄️'
                    },
                            {
                        'text': 'Poison',
                        'icon': '☠️'
                    },
                            {
                        'text': 'Psychic',
                        'icon': '🧠'
                    },
                            {
                        'text': 'Rock',
                        'icon': '⛰️'
                    },
                            {
                        'text': 'Steel',
                        'icon': '🛡️'
                    },
                            {
                        'text': 'Water',
                        'icon': '💧'
                    }
                ],
            }
        },
        props: {
            pokemon: Object,
        },
        methods: {
            getWeakIcon(w){
                return this.wicons.find(v=>v.text===w).icon;
            },
            addPokemonToFavorite(pokemon){
                pokemon.like = !pokemon.like;
                let p = store.pokeList.find(v=>v.name == pokemon.name);
                p.like = pokemon.like;
                console.log(store.pokeList);
                if(!store.favoritePokemons.includes(pokemon.name)) store.favoritePokemons.push(pokemon.name);
                else store.favoritePokemons.splice(store.favoritePokemons.indexOf(pokemon.name), 1)
            }
        }
    }

</script>

<template>
    <li class="list-group-item col-2" @click="addPokemonToFavorite(pokemon)" :class="{ like: pokemon.like }">
        <div class="card">
            <div class="card-body">
                <div class="content d-flex flex-column">
                    <span class="fw-bold">{{pokemon.name}}</span>
                    <div class="img-cnt d-flex justify-content-center align-items-center">
                        <img :src="pokemon.img" alt="">
                    </div>
                </div>
                <div class="special-badge badge my-2">
                    Weight: {{pokemon.weight}} , Height: {{pokemon.height}}
                </div>
                <div class="py-2">
                    <span class="me-2 badge bg-secondary"  v-for="tp in pokemon.type">{{tp}}</span>
                </div>
                <div class="py-2">
                    <!-- {{pokemon.weaknesses.join(', ')}} -->
                    <span class="ps-2" v-for="weak of pokemon.weaknesses">
                        {{  getWeakIcon(weak) }}
                    </span>
                </div>
            </div>
        </div>
    </li>  
</template>