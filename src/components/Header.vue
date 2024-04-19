<script>
    import { store } from '../store.js';

    export default {
        name: 'Header',
        components: {
        },
        data(){
            return {
                store,
                userInput: '',
            }
        },
        methods: {
            search(){
                if(this.userInput.length >= 3){
                    this.$emit('searchPokemon', this.userInput);
                }
            },
            reset() {
                this.userInput = '';
                this.$emit('reset');
            }
        }
    }

</script>

<template>
    <h1 class="text-center mb-3">POKEDEX</h1>
    <div class="mb-3 col-6 offset-3">
        <div class="d-flex align-items-baseline">
            <input type="text" class="form-control" id="filter" v-model="userInput" @input="search()" placeholder="Cerca qualcosa...">
            <!-- <button type="button" class="btn btn-search btn-primary mb-3">Cerca</button> -->
            <button type="button" class="btn btn-reset btn-danger mb-3" @click="reset">Reset</button>
        </div>
    </div>
</template>