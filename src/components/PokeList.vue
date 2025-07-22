<template>
    <div class="container">
      <div class="container-item"></div>
      <v-card  v-for="pokemon in pokemons" :key="pokemon.name">
          <v-card-title>
            {( pokemon.name )}
          </v-card-title>
          <v-img :src="pokemon.image" :width="150"></v-img>
        </v-card>
    </div>
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: ['pokemons']
    
  })
  
  
  </script>
  
  <style>
  
  </style>