<script setup>
import { ref } from 'vue'

const props = defineProps({
    site: {
        type: Object,
        required: true
    }
})

const emits = defineEmits(['remove-site', 'copied'])

const showCopied = ref(false)

const copyContent = (event) => {
    navigator.clipboard.writeText(event.target.parentElement.previousElementSibling.textContent)
    emits('copied', props.site.id)
    showCopied.value = true
    setTimeout(() => {
        showCopied.value = false
    }, 3000)
}

const removeSite = () => {
    emits('remove-site', props.site.id)
}
</script>

<template>
    <tr class="border [&>td]:border [&>td]:p-1">
        <td>{{ site.id }}</td>
        <td>{{ site.name }}</td>
        <td><a target="_blank" href="{{ site.url }}" class="flex flex-row gap-2 items-center">
            {{ site.url }} 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </a></td>
        <td><div class="flex flex-row gap-2">
            <p>{{ site.key }}</p><div @click="copyContent" class="block relative bg-gray-200 rounded-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy m-1.5" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
                <span v-if="showCopied" id="key-{{ site.id }}" class="bg-green-500 w-2 h-2 rounded-full absolute -top-0.5 -right-1" transition></span>
            </div>
        </div></td>
        <td>
            <router-link to="/sites/1">View</router-link>
        </td>
        <td class="flex flex-row gap-2 border-none">
            <button class="btn small primary">Edit</button>
            <button class="btn small secondary" @click="removeSite">Delete</button>
        </td>
    </tr>
</template>