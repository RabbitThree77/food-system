<script setup>
  import 'assets/css/global.css'
  import { getData, setData } from 'nuxt-storage/local-storage';
  import { createClient } from '@supabase/supabase-js'

  useHead({
    title: "Sample system for food ordering",
    htmlAttrs : {
      lang: "en"
    },
    meta: [
      {name: "description", content: "a sample website that shows off a food ordering system"}
    ]
  })
  const val = ref(0)
  const username = ref("")
  onMounted(() => {
    
    username.value = getData("username")
    if (username.value === null) {
        navigateTo("/login")
    }
  })
  
  definePageMeta({
    middleware: ["login-redirect"]
  })

  const items = [
    "Chimken",
    "Gut fud",
    "overpriced water",
    "Not Pee",
    "Guy named gurt: ",
    "Seared pencils",
    "Heavy cloud",
    "Seagull bones"
  ]

  const supabase = createClient('https://lfbnpppipivowdaeiigt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYm5wcHBpcGl2b3dkYWVpaWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MjI5NjgsImV4cCI6MjAzNzk5ODk2OH0.ez_d3rqzNR4dP-IO54fZrxcnfPkE68brlH8AYO1D0JU')

</script>

<template>
  <div class="root dark:text-blue-50 dark:bg-gray-900">
    <Header></Header>
    <p class="dark:text-white">{{ username }}</p>
    <div class="p-7 grid gap-3 grid-cols-auto">
            <Item :Name="item" v-for="item in items" :Supa="supabase" :User="username"/>
    </div>
  </div>
  
</template>

<style>
        /* Custom class to handle automatic column sizing */
        .grid-cols-auto {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .layout-enter-active,
    .layout-leave-active {
    transition: all 0.4s;
    }
</style>