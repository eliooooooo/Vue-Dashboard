<script>
</script>

<template>
    <div aria-label="breadcrumb">
        <ol class="breadcrumb flex flex-row gap-3">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li>/</li>
            <li class="breadcrumb-item active" aria-current="page">Breadcrumb</li>
        </ol>
    </div>
</template>