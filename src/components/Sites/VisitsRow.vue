<script setup>

const props = defineProps({
    visit: {
        type: Object,
        required: true
    },
    visitDisplay: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <tr class="border [&>td]:border [&>td]:p-1">
        <td>{{ visit.id }}</td>
        <td>{{ visit.name }}</td>
        <td><a target="_blank" href="#" class="flex flex-row gap-2 items-center">
            {{ visit.page }} 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </a></td>
        <td>{{ visit.source }}</td>
        <td>{{ visit.campaign }}</td>
        <td>{{ visit.content }}</td>
        <td>{{ visit.term }}</td>
        <td>{{ visit.medium }}</td>
        <td>{{ visit.language }}</td>
        <td>{{ visit.platform }}</td>
        <td>
            <router-link to="/sites/1">View</router-link>
        </td>
        <td class="flex flex-row gap-2 border-none">
            <button class="btn small primary">Edit</button>
            <button class="btn small secondary">Delete</button>
        </td>
    </tr>
</template>