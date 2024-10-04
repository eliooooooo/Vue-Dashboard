<script setup>
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="bg-primary-light h-fit w-full gap-4 flex flex-col justify-start items-center rounded-md p-4 relative group">
            <div class="w-fit mx-auto rounded-full overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Company logo" />
            </div>
            <h2>Company name</h2>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex gap-2">
                    <span class="font-bold">Email:</span>
                    <span>company.name@mail.com</span>
                </div>
                <div class="flex gap-2">
                    <span class="font-bold">Phone:</span>
                    <span>123-456-7890</span>
                </div>
                <div class="flex gap-2">
                    <span class="font-bold">Created:</span>
                    <span>2021-10-10</span>
                </div>
                <div>
                    <span class="font-bold">Admin:</span>
                    <span>&nbsp;<router-link :to="{ name: 'account' }">John Doe</router-link></span>
                </div>
                <div class="hidden absolute top-2 right-2 group-hover:flex ml-auto">
                    <a href="#" class="btn primary small">Edit</a>
                </div>
            </div>
        </div>
        <router-link class="flex flex-row gap-4 h-fit bg-primary-light w-full items-center justify-start p-4 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
            <span>Notifications</span>
        </router-link>
    </div>
</template>