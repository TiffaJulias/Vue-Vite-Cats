<template>
  <div>
    <h1 style="font-family: 'LibertinusKeyboard'" class="flex justify-center  text-4xl font-bold">🐱
      <span class="letter">c</span>
      <span class="letter">a</span>
      <span class="letter">t</span>
      <span class="mx-2"></span>
      <span class="letter">l</span>
      <span class="letter">i</span>
      <span class="letter">s</span>
      <span class="letter">t</span>
    </h1>
    <button @click="fetchCats" :disabled="loading" class="text-black">Fetch Cats</button>
    <p v-if="loading">Loading...</p>
    <div v-if="clicked">
      <h2 class="mt-5 text-xl font-bold">{{ totalCats }} Cats with shedding of 5</h2>
    <ul class="bg-black p-4 m-2 rounded-lg hover:shadow-2xl hover:scale-105 hover: cursor-pointer transition-transform duration-200 ease-in-out">
      <li v-for="cat in cats" :key="cat.name">
        <strong>{{ cat.name }}</strong> 
        ({{ cat.origin }}) — IQ: {{ cat.intelligence }}, 
        Grooming: {{ cat.grooming }}, Shedding: {{ cat.shedding }}
      </li>
    </ul>
      <b>Cats filtered to Persian only:  </b><br>
      <div v-for="cat in persian" :key="cat.image_link" class="list-none text-left bg-black p-4 m-2 rounded-lg transition-transform duration-200 ease-in-out hover:shadow-2xl hover:scale-105 hover: cursor-pointer">
        <li><b>Name:</b> {{ cat.name }}, </li>
        <li><b>Average length: </b>{{ cat.length }},</li>
        <li><b>Family-friendly scale:</b> {{ cat.family_friendly }}/5,</li>
        <li><b>Shedding:</b> {{ cat.shedding }}/5,</li>
        <li><b>General Health:</b> {{ cat.general_health }}/5,</li>
        <li><b>Playfulness:</b> {{ cat.playfulness }}/5,</li>
        <li><b>Friendly with other pets?</b> {{ cat.other_pets_friendly }}/5,</li>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCatStore } from '../stores/cats'
import { storeToRefs } from 'pinia'

const clicked = ref(false)
const loading = ref(false)
const catStore = useCatStore()
const { totalCats, cats, persian } = storeToRefs(catStore)

async function fetchCats() {
  try {
    
    loading.value = true
    await catStore.getCats()
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
    clicked.value= true
  }
}
</script>

<style>

li:hover {
  background-color: #333;
}
.letter {
  @apply transition-transform duration-300 hover:scale-125;
}

</style>
