<script setup>
import { ref } from 'vue';
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from 'vue-chartjs';
import { Chart as ChartJS, LineElement, BarElement, PointElement, LineController, BarController, PieController, DoughnutController, RadarController, PolarAreaController, BubbleController, ScatterController, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';

ChartJS.register( RadialLinearScale, LineElement, ArcElement, BarElement, PointElement, LineController, BarController, PieController, DoughnutController, RadarController, PolarAreaController, BubbleController, ScatterController, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ChartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart'
        },
        legend: {
            display: true,
            position: 'bottom'
        }
    }
});

const ChartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Visits',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }
    ]
});

import PageHeader from './PageHeader.vue';
import ContainerSimple from './ContainerSimple.vue';

const chartType = ref('line');
const chartAvaible = ['line', 'bar', 'pie', 'doughnut', 'radar', 'polarArea'];

const dataSelect = ref('visits');
const dataAvaible = ['visits', 'pageviews', 'users', 'newUsers', 'sessions', 'bounceRate', 'avgSessionDuration', 'pageviewsPerSession', 'goalCompletionsAll', 'goalConversionRateAll', 'goalValueAll', 'goalValuePerSession', 'goalCompletionsAllPerSession'];

const periodSelect = ref('daily');
const periodAvaible = ['daily', 'weekly', 'monthly', 'yearly'];
</script>

<template>
    <div class="grid grid-cols-12 gap-4">
        <PageHeader title="Chart" desc="From this page, you can custom the chart to match your needs." />
        <ContainerSimple title="Chat options" desc="Customize this options to update the chart." :toggle="true" class="col-span-12">
            <div class="grid md:grid-cols-4 gap-4">
                <div class="flex flex-col gap-1">
                    <label for="site">Chart type :</label>
                    <select id="site" name="site" v-model="chartType" @change="filterVisits">
                        <option v-for="name in chartAvaible" :value="name">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="data">Data :</label>
                    <select id="data" name="data" v-model="dataSelect" @change="filterVisits">
                        <option v-for="name in dataAvaible" :value="name">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="period">Period :</label>
                    <select id="period" name="period" v-model="periodSelect" @change="filterVisits">
                        <option v-for="name in periodAvaible" :value="name">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="max_elements">Max elements :</label>
                    <input type="number" class="cursor-not-allowed" name="max_elements" id="max_elements" disabled >
                </div>
            </div>
            <div class="ml-auto mt-4 w-fit">
                <p class="btn primary">Apply</p>
            </div>
        </ContainerSimple>
        <ContainerSimple title="Custom chart" desc="Here is your custom chart" :toggle="true" class="col-span-12">
            <div v-if="chartType" style="width: 100%; height: 600px;">
                <Bar v-if="chartType == 'bar'" :data="ChartData" :options="ChartOptions" />
                <Line v-if="chartType == 'line'" :data="ChartData" :options="ChartOptions" />
                <Doughnut v-if="chartType == 'doughnut'" :data="ChartData" :options="ChartOptions" />
                <Pie v-if="chartType == 'pie'" :data="ChartData" :options="ChartOptions" />
                <Radar v-if="chartType == 'radar'" :data="ChartData" :options="ChartOptions" />
                <PolarArea v-if="chartType == 'polarArea'" :data="ChartData" :options="ChartOptions" />
            </div>
        </ContainerSimple>
    </div>
</template>