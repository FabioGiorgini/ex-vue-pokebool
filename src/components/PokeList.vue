<script>
    import { store } from '../store.js';
import Card from './Card.vue';
    
    export default {
        name: 'PokeList',
        components: {
            Card
        },
        data(){
            return {
                store
            }
        },
        methods: {

        }
    }

</script>

<template>
    <h1 class="text-left mb-3 px-3">Pokemon trovati: {{store.fPokeList.length}}/{{store.pokeList.length}}</h1>   
    <ul id="poke-list" class="list-group list-group-horizontal flex-wrap">
        <Card v-for="pokemon of store.fPokeList" :pokemon="pokemon"></Card>
    </ul>
</template>