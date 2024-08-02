<!--The list item-->
<script setup>    
import Card from 'primevue/card';

import Button from 'primevue/button';

const props = defineProps([
    "Name", "Supa", "User"
])

async function al() {
    alert("You ordered " + props.Name)
    const {error} = await props.Supa
        .from("Items")
        .insert({owner: props.User, name: props.Name})

}

</script>

<template>
    <div class="flex flex-col justify-between border-2 border-gray-300 dark:border-gray-800 p-5 rounded-lg mb-3 hover:border-primary transition-all duration-700 ease-out min-w-40 max-w-screen max-h-96">
        <h2 class="text-3xl">{{ Name }}</h2>
        <Button label="Order" class="hover:scale-105 duration-150 ease-in-out inline-block align-bottom mt-6 decoration-sky-300" @click="al"/>   
    </div>
</template>
