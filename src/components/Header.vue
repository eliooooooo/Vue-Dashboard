<script>
</script>

<template>
    <div role="navigation"
class="relative bg-dark w-full flex items-center focus-within:h-48 focus-within:md:h-16 h-0 px-3 overflow-hidden"
        aria-label="Accès rapide">
        <ul class="flex gap-5 flex-col md:flex-row md:items-center justify-center h-full w-full overflow-hidden px-2 [&>li>a]:text-dark">  
            <li>
                <a href="#nav" class="p-2 bg-gray-50 rounded-full focus-border-primary" type="button" aria-disabled="false" tabindex="1">Menu de
                    navigation</a>
            </li>
            <li>
                <a href="#main" class="p-2 bg-gray-50 rounded-full" type="button" aria-disabled="false" tabindex="1">Aller au
                    contenu</a>
            </li>
            <li>
                <a href="#footer" class="p-2 bg-gray-50 rounded-full" type="button" aria-disabled="false" tabindex="1">Pied de
                    page</a>
            </li>
            <li>
                <a href="#dyslexic-mode-toggle" class="p-2 bg-gray-50 rounded-full" type="button" aria-disabled="false" tabindex="1">Mode dyslexique</a>
            </li>
        </ul>
    </div>

    <header class="bg-light text-dark h-32 flex items-center border-b border-dark">
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