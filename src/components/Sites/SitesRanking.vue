<script setup>
</script>

<template>
    <div class="border border-dark p-4 rounded-md flex flex-col gap-4 h-fit" >
        <h2>Sites ranking</h2>
        <p>Here are the top sites you are tracking, ranked by visits</p>
        <div class="border-dark border-b w-full" ></div>
        <div class="flex flex-col gap-3">
            <div class="flex flex-row gap-4 items-end p-2">
                <span class="text-primary text-2xl font-bold">1.</span>
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col">
                        <span class="text-xl font-bold">Google</span>
                        <span>300k views</span>
                    </div>
                    <div class="flex flex-row h-full items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short text-green-700" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                        </svg>
                        <span class="text-green-700">+2</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-4 items-end p-2 bg-gray-light">
                <span class="text-primary text-2xl font-bold">2.</span>
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col flex-1">
                        <span class="text-xl font-bold">Facebook</span>
                        <span>260k views</span>
                    </div>
                    <div class="flex flex-row h-full items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-4 items-end p-2">
                <span class="text-primary text-2xl font-bold">3.</span>
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col">
                        <span class="text-xl font-bold">Github</span>
                        <span>200k views</span>
                    </div>
                    <div class="flex flex-row h-full items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-short text-red-700" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                        <span class="text-red-700">-2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>