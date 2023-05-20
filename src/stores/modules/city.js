import { defineStore } from 'pinia'

import { getCityAll } from '@/service'

export const useCity = defineStore('city', {
    state: () => ({
        allCities: {},
        currentCity: {
            cityName: '广州'
        }
    }),
    actions: {
        async fetchAllCityData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})