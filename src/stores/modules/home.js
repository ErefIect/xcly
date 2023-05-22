import { defineStore } from 'pinia'

import { getHotSuggests, getCategories } from '@/service'

export const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggests() {
            const res = await getHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategories() {
            const res = await getCategories()
            this.categories = res.data
        }
    }
})