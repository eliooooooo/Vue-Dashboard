<script>
</script>

<template>
    <aside>
        <nav>
            <ul>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><router-link to="/sites">Sites</router-link></li>
                <li><router-link to="/profile">Profile</router-link></li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
    aside {
        background-color: #333;
        color: white;
        padding: 1rem;
    }
    nav ul {
        list-style: none;
        padding: 0;
    }
    nav ul li {
        margin: 0.5rem 0;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
    }
</style>