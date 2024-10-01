<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-primary">
        <div class="container flex flex-row">
            <div class="flex flex-col items-center pt-20 gap-3 bg-light w-1/3 p-10">
                <h1 class="text-primary !font-medium">Log in to your account</h1>
                <p class="text-lg font-bold">Don't have an account? <router-link :to="{name: 'register'}">Sign Up</router-link></p>
                <form class="flex flex-col gap-4 mt-10 w-full [&>div>input]:rounded-md">
                    <div class="flex flex-col gap-1 w-full">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@gmail.com" required/>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" placeholder="*****" required/>
                    </div>
                    <button type="submit" class="btn primary small">Login</button>
                </form>
                <nav id="nav">
                    <router-link :to="{ name: 'home'}" class="flex flex-row gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                        Back to home
                    </router-link>
                </nav>
            </div>
            <div class=" h-screen w-2/3 flex flex-col justify-between text-light">
                <div class="w-1/2 mx-auto mt-36">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Quasi beatae explicabo et deserunt? Animi quo distinctio repudiandae, vel rem reprehenderit tempora beatae labore nesciunt eaque a autem at sit maiores?</p>
                </div>
                <footer id="footer" class="p-4">
                    <p class="text-center">&copy; 2024 - Tous droits réservés</p>
                </footer>
            </div>
        </div>
    </div>
</template>