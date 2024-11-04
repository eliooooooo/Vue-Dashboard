<script setup>
import { ref, watch, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// Déclaration des variables réactives
const selectedPeriod = ref('monthly')
const chartData = ref({
    labels: [],
    datasets: [{
            label: 'Visits',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
})
const chartOptions = ref({ responsive: true })

// Référence au composant Line
const lineChartRef = ref(null)

// Fonction pour mettre à jour les données du graphique
const updateChartData = () => {
    if (selectedPeriod.value === 'weekly') {
    chartData.value = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Visits',
                data: [1500, 2000, 1800, 2200],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    }
    } else if (selectedPeriod.value === 'monthly') {
        chartData.value = {
            labels: [ '01/11/2023','01/12/2023','01/01/2024','01/02/2024','01/03/2024','01/04/2024','01/05/2024','01/06/2024','01/07/2024','01/08/2024','01/09/2024','01/10/2024'],
            datasets: [{
                label: 'Visits',
                data: [7600,8200,6100,6500,6800,7600,7400,7500,8000,8300,8500,8400],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    } else if (selectedPeriod.value === "yearly") {
        chartData.value = {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Visits',
                data: [30000, 35000, 40000, 45000, 50000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    }
}

watch(selectedPeriod, () => {
    updateChartData()
})

onMounted(() => {
    updateChartData()
})
</script>

<template>
    <div class="border border-dark p-4 rounded-md flex flex-col">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>Visits</h1>
                <p>Your website overall visits tracker</p>
            </div>
            <div>
                <select v-model="selectedPeriod">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-cloak transition></div>
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>