<script>
</script>

<template>
    <div class="bg-primary">
        <div class="container flex flex-col md:flex-row min-h-screen">
            <div class="flex-grow md:h-screen w-full md:w-1/2 lg:w-2/3 flex flex-col justify-between text-light">
                <div class="md:w-1/2 mx-auto mt-10 md:mt-36">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Quasi beatae explicabo et deserunt? Animi quo distinctio repudiandae, vel rem reprehenderit tempora beatae labore nesciunt eaque a autem at sit maiores?</p>
                </div>
                <footer id="footer" class="p-4">
                    <p class="text-center">&copy; 2024 - Tous droits réservés</p>
                </footer>
            </div>
            <div class="flex flex-col items-center pt-10 md:pt-20 gap-3 bg-light w-full md:w-1/2 lg:w-1/3 p-5 md:p-10">
                <h1 class="text-primary !font-medium">Sign up</h1>
                <p class="lg:text-lg font-bold">Already have an account? <router-link :to="{name: 'login'}">Log in</router-link></p>
                <form class="flex flex-col gap-4 mt-5 md:mt-10 w-full [&>div>input]:rounded-md">
                    <div class="flex flex-col gap-1 w-full">
                        <label for="username">Username</label>
                        <input id="username" name="username" placeholder="John_doe" required/>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@gmail.com" required/>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="*****" required current-password/>
                    </div>  
                    <div class="flex flex-col gap-1">
                        <label for="confirmation">Password confirmation</label>
                        <input type="password" id="confirmation" name="confirmation" placeholder="*****" required current-password/>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label>Company</label>
                        <input type="text" id="company" name="company" placeholder="Company id" required/>
                        <p>Don't have company account? <router-link :to="{ name: 'register-company' }">Register your compagny</router-link></p>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                        <input class="!rounded" type="checkbox" id="optin" name="optin"/>
                        <label for="optin">I agree to the <router-link :to="{ name: 'terms' }">Terms of Service</router-link> and <router-link :to="{ name: 'privacy' }">Privacy Policy</router-link>.</label>
                    </div>  
                    <button type="submit" class="btn primary small">Create my account</button>
                </form>
                <nav id="nav">
                    <router-link :to="{ name: 'dashboard'}" class="flex flex-row gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                        Back to dashboard
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>