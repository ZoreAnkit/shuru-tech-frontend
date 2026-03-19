<script setup>
defineProps({
    tables: Array
})
</script>

<template>
    <table class="custom-table">
            <thead>
                <tr>
                    <th>Table No</th>
                    <th>Seats</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="t in tables" :key="t.id">
                    <td>{{ t.serial_number }}</td>
                    <td>{{ t.seat_capacity }}</td>
                    <td>{{ t.location }}</td>
                </tr>
            </tbody>
        </table>
</template>