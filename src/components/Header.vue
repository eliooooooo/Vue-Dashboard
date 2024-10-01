<script>
</script>

<template>
    <header>
        <h1>Track My Site</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register" class="btn primary small outline">Register</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
    }
    nav ul li {
        margin: 0 1rem;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
    }
</style>