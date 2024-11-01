<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
    name: 'UtmChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: ['France', 'Allemagne', 'Italie'],
                datasets: [{ data: [40, 20, 12] }]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {
        console.log('Chart Data:', this.chartData)
        console.log('Chart Options:', this.chartOptions)
    }
}
</script>

<template>
        <div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openStats: true }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>UTMs</h1>
                <p>Online marketing tracking</p>
            </div>
            <div class="flex flex-row gap-3 items-center">
                <div class="cursor-pointer p-4 bg-primary-light rounded-md text-black" x-on:click="openStats = !openStats">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" x-show="!openStats">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" x-show="openStats">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-show="openStats" x-cloak transition></div>
        <div x-show="openStats" x-cloak transition>
            <div>
                <Line :options="chartOptions" :data="chartData"/>
            </div>
            <p class="mt-3">
                No stats to display
            </p>
        </div>
    </div>
    <div>
    </div>
</template>