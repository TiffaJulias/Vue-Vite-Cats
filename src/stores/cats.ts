import { defineStore } from 'pinia';
import type { CatBreed } from '../types/catbreeds';
import { api } from "../api";

export const useCatStore = defineStore('cats', {
  state() {
    return {
      cats: [] as CatBreed[]
    }
  },
  getters: {
    totalCats: (state) => state.cats.length,
    persian: (state) => state.cats.filter(x => x.name === 'Persian')
  },
  actions: {
    async getCats() {
      const res = await api.get<CatBreed[]>('/cats?shedding=5')
      this.cats = res.data
    }
  }
})