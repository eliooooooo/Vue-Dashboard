<script setup>
</script>

<template>
    <div class="flex flex-col gap-4 items-center justify-start bg-primary-light rounded-md p-4 relative group">
        <div class="rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="User avatar" />
        </div>
        <h2>John Doe</h2>
        <div class="flex flex-col gap-2 w-full">
            <div class="flex gap-2" >
                <span class="font-bold">Company:</span>
                <span><router-link :to="{ name: 'company' }">ENTREPRISE</router-link></span>
            </div>
            <div class="flex gap-2">
                <span class="font-bold">Email:</span>
                <span>john.doe@email.com</span>
            </div>
            <div class="flex gap-2">
                <span class="font-bold">Role:</span>
                <span>Admin</span>
            </div>
            <div class="flex gap-2">
                <span class="font-bold">Created:</span>
                <span>2021-10-10</span>
            </div>
            <div class="absolute hidden group-hover:flex ml-auto top-2 right-2">
                <a href="#" class="btn primary small">Edit</a>
            </div>
        </div>
    </div>
</template>