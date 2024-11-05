<script setup>
import { ref, watch, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend)

const chartElement = ref([
    { name: 'page', value: 'Pages', id: 'pageRadio', checked: true },
    { name: 'source', value: 'Sources', id: 'sourceRadio', checked: false },
    { name: 'campaign', value: 'Campaign', id: 'campaignRadio', checked: false },
    { name: 'medium', value: 'Medium', id: 'mediumRadio', checked: false },
    { name: 'content', value: 'Content', id: 'contentRadio', checked: false },
    { name: 'term', value: 'Term', id: 'termRadio', checked: false },
    { name: 'platform', value: 'Platform', id: 'platformRadio', checked: false },
    { name: 'language', value: 'Language', id: 'languageRadio', checked: false }
])

const selectedChartOption = ref('page')

const maxElements = ref(null)

// Déclaration des variables réactives
const selectedPeriod = ref('monthly')
const chartData = ref({
    labels: [],
    datasets: [{
            label: 'Pages',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
})
const chartOptions = ref({ 
    responsive: true,
    indexAxis: 'y',
    scales: {
        x: {
            beginAtZero: true,
        },
        y: {
            beginAtZero: true,
        }
    }
})

const updateChartData = () => {
    let labels = []
    let data = []

    if (selectedPeriod.value === 'weekly') {
        labels = ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing']
        data = [1500, 2000, 1800, 2200, 2500, 2300, 2100, 2400, 2600, 2700]
    } else if (selectedPeriod.value === 'monthly') {
        labels = ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing']
        data = [7600,8200,6100,6500,6800,7600,7400,7500,8000,8300]
    } else if (selectedPeriod.value === "yearly") {
        labels = ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing']
        data = [30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000]
    }

    // Combiner labels et data
    const combined = labels.map((label, index) => ({ label, data: data[index] }))

    // Trier du plus grand au plus petit
    combined.sort((a, b) => b.data - a.data)

    // Séparer labels et data triés
    const sortedLabels = combined.map(item => item.label)
    const sortedData = combined.map(item => item.data)

    // Limiter le nombre d'éléments
    if (maxElements.value) {
        sortedLabels.splice(maxElements.value)
        sortedData.splice(maxElements.value)
    }

    // Mettre à jour chartData
    chartData.value = {
        labels: sortedLabels,
        datasets: [{
            label: 'Pages',
            data: sortedData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
}

watch(selectedPeriod, () => {
    updateChartData()
    chartData.value.datasets[0].label = chartElement.value.find(element => element.name === selectedChartOption.value).value
})

watch(selectedChartOption, () => {
    updateChartData()
    chartData.value.datasets[0].label = chartElement.value.find(element => element.name === selectedChartOption.value).value
})

watch(maxElements, () => {
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
            <div class="flex flex-col">
                <label for="period">Period :</label>
                <select id="period" v-model="selectedPeriod">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <label for="chartOption" class="pt-2">Chart option :</label>
            <div class="grid grid-cols-12 pb-2">
                <div v-for="element in chartElement" :key="element.id" class="col-span-6">
                    <input type="radio" name="chartOption" :id="element.id" :value="element.name" v-model="selectedChartOption">
                    <label :for="element.id" class="pl-2">{{ element.value }}</label>
                </div>
            </div>
            <div class="flex flex-col">
                <label for="number">Max elements :</label>
                <input type="number" placeholder="Enter a number" v-model="maxElements" />
            </div>
        </div>
        <div class=" col-span-8 border border-dark p-4 rounded-md flex flex-col">
            <div class="flex flex-row justify-between items-center">
                <div>
                    <h1>{{ chartElement.find(element => element.name === selectedChartOption).value }}</h1>
                    <p>placeholder</p>
                </div>
            </div>
            <div class="w-full border-dark border-b pt-2 mb-3" x-cloak transition></div>
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>