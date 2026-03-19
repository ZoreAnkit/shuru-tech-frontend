import { defineStore } from 'pinia'
import api from '../services/api'

export const useAppStore = defineStore('app', {
    state: () => ({
        tables: [],
        reservations: [],
        loading: false,
        slots: []
    }),
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async fetchTables() {
            this.loading = true
            const res = await api.get('/booths')
            this.tables = res.data
            this.loading = false
        },

        async createTable(data) {
            console.log('Creating table with data:', data)
            await api.post('/booth', data)
            await this.fetchTables()
        },
    },
})