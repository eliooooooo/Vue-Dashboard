<script>
</script>

<template>
    <header class="bg-light text-dark h-32 flex items-center border-b border-dark">
        <div class="container flex flex-row items-center justify-between">
            <p class="h1">Track My Site</p>
            <nav>
                <ul class="flex justify-center items-center gap-5 [&>li>a]:text-dark [&>li]:no-underline">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register" class="btn primary small outline">Register</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>