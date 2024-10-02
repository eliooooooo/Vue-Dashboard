<script>
</script>

<template>
    <header class="bg-light w-full text-dark flex items-center border-b border-dark py-2">
        <div class="container flex flex-row items-center justify-between">
            <p class="h1">Track My Site</p>
            <nav id="nav">
                <ul class="flex justify-center items-center gap-5 [&>li>a]:text-dark [&>li]:no-underline">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name : 'login' }">Login</router-link></li>
                    <li><router-link to="/register" class="btn primary small outline">Register</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>