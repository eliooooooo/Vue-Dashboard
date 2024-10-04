<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <tr class="border [&>td]:border [&>td]:p-1">
        <td class="text-center">{{ index + 1 }}</td>
        <td>
            <div class="flex flex-row gap-3 items-center">
                <img class="inline-block rounded-full w-8 h-8" :src="user.profilepic" alt="avatar" />
                <span class=" inline-flex flex-col">
                    <span class="font-bold">{{ user.name }}</span>
                    <span class="text-sm">{{ user.email }}</span>
                </span>
            </div>
        </td>
        <td>{{ user.role }}</td>
        <td>{{ user.since }}</td>
        <td class="flex flex-row gap-2 border-none">
            <button class="btn small secondary" @click="removeSite">Delete</button>
        </td>
    </tr>
</template>