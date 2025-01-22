<script>
</script>

<template>
    <header class="bg-light w-full text-dark flex items-center border-b border-dark py-2">
        <div class="container flex flex-col sm:flex-row sm:items-center justify-between">
            <p class="h1">Track My Site</p>
            <nav id="nav" class="self-end">
                <ul class="flex justify-center items-center gap-5 [&>li>a]:text-dark [&>li]:no-underline">
                    <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
                    <li><router-link :to="{ name : 'account' }">Account</router-link></li>
                    <li><router-link to="/register" class="btn primary small outline">Register</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>