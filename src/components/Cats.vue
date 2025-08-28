<template>
  <div>
    <h1>🐱 Cat List</h1>
    <button @click="fetchCats" :disabled="loading" class="text-black">Fetch Cats</button>
    <span v-if="loading">Loading...</span>
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

const loading = ref(false)
const cats = ref<Cat[]>([])

async function fetchCats() {
  try {
    loading.value = true
    const res = await api.get<Cat[]>('/cats?name=persian')
    cats.value = res.data
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style>
</style>
