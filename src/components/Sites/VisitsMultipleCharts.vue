<script setup>
import { ref, watch, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js'
import ContainerSimple from '../ContainerSimple.vue';

ChartJS.register(Title, Tooltip, Legend)

const pagesDatas = ref ({
    weekly: {
        labels: ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing'],
        data: [1500, 2000, 1800, 2200, 2500, 2300, 2100, 2400, 2600, 2700]
    },
    monthly: {
        labels: ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing'],
        data: [7600,8200,6100,6500,6800,7600,7400,7500,8000,8300]
    },
    yearly: {
        labels: ['index', 'contact', 'product', 'page', 'about', 'services', 'blog', 'portfolio', 'team', 'pricing'],
        data: [30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000]
    }
})

const sourcesData = ref({
    weekly: {
        labels: ['social', 'news', 'print', 'ads', 'site', 'app'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['social', 'news', 'print', 'ads', 'site', 'app'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['social', 'news', 'print', 'ads', 'site', 'app'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const campaignData = ref({
    weekly: {
        labels: ['summer', 'winter', 'spring', 'fall', 'christmas', 'new year'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['summer', 'winter', 'spring', 'fall', 'christmas', 'new year'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['summer', 'winter', 'spring', 'fall', 'christmas', 'new year'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const mediumData = ref({
    weekly: {
        labels: ['organic', 'cpc', 'referral', 'email', 'social', 'direct'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['organic', 'cpc', 'referral', 'email', 'social', 'direct'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['organic', 'cpc', 'referral', 'email', 'social', 'direct'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const contentData = ref({
    weekly: {
        labels: ['blog', 'news', 'product', 'about', 'services', 'contact'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['blog', 'news', 'product', 'about', 'services', 'contact'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['blog', 'news', 'product', 'about', 'services', 'contact'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const termData = ref ({
    weekly: {
        labels: ['seo', 'sem', 'ppc', 'cpc', 'organic', 'referral'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['seo', 'sem', 'ppc', 'cpc', 'organic', 'referral'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['seo', 'sem', 'ppc', 'cpc', 'organic', 'referral'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const platformData = ref ({
    weekly: {
        labels: ['Chrome', 'Safari', 'Firefox', 'Opera', 'Bing', 'Other'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['Chrome', 'Safari', 'Firefox', 'Opera', 'Bing', 'Other'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['Chrome', 'Safari', 'Firefox', 'Opera', 'Bing', 'Other'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

const languageData = ref ({
    weekly: {
        labels: ['English', 'French', 'Spanish', 'German', 'Italian', 'Other'],
        data: [1500, 2000, 1800, 2200, 2500, 2300]
    },
    monthly: {
        labels: ['English', 'French', 'Spanish', 'German', 'Italian', 'Other'],
        data: [7600,8200,6100,6500,6800,7600]
    },
    yearly: {
        labels: ['English', 'French', 'Spanish', 'German', 'Italian', 'Other'],
        data: [30000, 35000, 40000, 45000, 50000, 55000]
    }
})

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

    if (selectedChartOption.value === 'page') {
        labels = pagesDatas.value[selectedPeriod.value].labels
        data = pagesDatas.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'source') {
        labels = sourcesData.value[selectedPeriod.value].labels
        data = sourcesData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'campaign') {
        labels = campaignData.value[selectedPeriod.value].labels
        data = campaignData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'medium') {
        labels = mediumData.value[selectedPeriod.value].labels
        data = mediumData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'content') {
        labels = contentData.value[selectedPeriod.value].labels
        data = contentData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'term') {
        labels = termData.value[selectedPeriod.value].labels
        data = termData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'platform') {
        labels = platformData.value[selectedPeriod.value].labels
        data = platformData.value[selectedPeriod.value].data
    } else if (selectedChartOption.value === 'language') {
        labels = languageData.value[selectedPeriod.value].labels
        data = languageData.value[selectedPeriod.value].data
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
        <ContainerSimple title="Custom your chart" desc="Select the output you want to see" class="col-span-4">
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
        </ContainerSimple>
        <ContainerSimple :title="chartElement.find(element => element.name === selectedChartOption).value" desc="placeholder" class="col-span-8">
            <Bar :data="chartData" :options="chartOptions" />
        </ContainerSimple>
    </div>
</template>