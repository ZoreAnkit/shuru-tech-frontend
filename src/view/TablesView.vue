<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '../stores/appStore';
import TableList from '../components/Table/TableList.vue';

const store = useAppStore()

const serial_number = ref('')
const seat_capacity = ref(0)
const location = ref(0)

onMounted(() => {
    store.fetchTables()
})

async function addTables() {
    await store.createTable({
        serial_number: serial_number.value,
        seat_capacity: seat_capacity.value,
        location: location.value
    })

    serial_number.value = ''
    seat_capacity.value = 0
    location.value = 0
}
</script>

<template>
    <div class="p-6">

        <h1 class="text-xl font-bold mb-4">Tables</h1>

        <!-- Add Table Form -->
        <div class="mb-4">
            <form @submit.prevent="addTables">
                <input v-model="serial_number" required />
                <input v-model="seat_capacity" type="number" required />

                <select v-model="location" required>
                    <option disabled value="">Select Location</option>
                    <option value="0">Indoor</option>
                    <option value="1">Outdoor</option>
                </select>

                <button type="submit">Add</button>
            </form>
        </div>

        <!-- Table List -->
        <TableList :tables="store.tables" />

    </div>
</template>