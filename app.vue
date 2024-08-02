<script setup>


import 'primeicons/primeicons.css'

import ToggleButton from 'primevue/togglebutton';
  const darkMode = ref(false)
</script>

<template>
  <div :class="{dark: darkMode}" class="dark:bg-gray-900">
    <ToggleButton v-model="darkMode" onLabel="Dark" offLabel="Light" onIcon="pi pi-moon" 
    offIcon="pi pi-sun" class="rounded-lg border-2 border-gray-300 p-4 dark:text-blue-50 dark:border-gray-800 hover:border-primary duration-1000" aria-label="Do you confirm" unstyled="true"/>

    <NuxtPage :page-key="route => route.fullPath"/>
  </div>
  
</template>
