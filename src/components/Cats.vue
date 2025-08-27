<template>
  <div>
    <h1>🐱 Cat List</h1>
    <button @click="fetchCats">Fetch Cats</button>
    <ul>
      <li v-for="cat in cats" :key="cat.name">
        <strong>{{ cat.name }}</strong> 
        ({{ cat.origin }}) — IQ: {{ cat.intelligence }}, 
        Grooming: {{ cat.grooming }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { api } from '../api'

interface Cat {
  name: string
  origin: string
  intelligence: number
  grooming: number
}

const cats = ref<Cat[]>([])

async function fetchCats() {
  try {
    const res = await api.get<Cat[]>('/cats?name=persian')
    cats.value = res.data
  } catch (err) {
    console.error(err)
  }
}
</script>

<style>
</style>
