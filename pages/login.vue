<script setup>
    import { getData, setData } from 'nuxt-storage/local-storage';
    import Button from 'primevue/button';

    const name = ref("")

    async function setName() {
        setData("username", name.value)
        await navigateTo('/')
    }
</script>

<template>
    <div class="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-blue-50">
        <form class="flex items-center justify-center h-64 w-full flex-col space-y-4" @submit.prevent="setName">
            <h1 class="text-xl">Login</h1>
            <br>
            <input autofocus v-model="name" class="border-2 border-gray-400 dark:border-gray-800 dark:bg-gray-600 rounded-xl focus:border-primary focus:outline-none text-center scale-125">
            <br>
            <Button label="Login" @click="setName"></Button>
        </form>
    </div>
    
</template>