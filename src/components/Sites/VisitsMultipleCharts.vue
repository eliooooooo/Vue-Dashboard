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
    <div class="grid grid-cols-12 gap-4">
        <div class=" col-span-4 border border-dark p-4 rounded-md flex flex-col">
            <div class="flex flex-row justify-between items-center">
                <div>
                    <h1>Custom your chart</h1>
                    <p>Select the output you want to see</p>
                </div>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3" x-cloak transition></div>
            <div>
                <select v-model="selectedPeriod">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <form class="flex flex-col">
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="page" id="pageRadio" value="page" checked>
                    <label for="pageRadio">Pages</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="source" id="sourceRadio" value="source">
                    <label for="sourceRadio">Sources</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="campaign" id="campaignRadio" value="campaign">
                    <label for="campaignRadio">Campaign</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="medium" id="mediumRadio" value="medium">
                    <label for="mediumRadio">Medium</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="content" id="contentRadio" value="content">
                    <label for="contentRadio">Content</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="term" id="termRadio" value="term">
                    <label for="termRadio">Term</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="platform" id="platformRadio" value="platform">
                    <label for="platformRadio">Platform</label>
                </div>
                <div class="flex fles-row gap-2 items-center">
                    <input type="radio" name="language" id="languageRadio" value="language">
                    <label for="languageRadio">Language</label>
                </div>
            </form>
        </div>
        <div class=" col-span-8 border border-dark p-4 rounded-md flex flex-col">
            <div class="flex flex-row justify-between items-center">
                <div>
                    <h1>placeholder</h1>
                    <p>placeholder</p>
                </div>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3" x-cloak transition></div>
            <Line :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>