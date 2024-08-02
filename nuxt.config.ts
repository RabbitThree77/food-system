import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Lara, {
  semantic: {
      primary: {
          50: '{sky.50}',
          100: '{sky.100}',
          200: '{sky.200}',
          300: '{sky.300}',
          400: '{sky.400}',
          500: '{sky.500}',
          600: '{sky.600}',
          700: '{sky.700}',
          800: '{sky.800}',
          900: '{sky.900}',
          950: '{sky.950}'
      }
  }
});

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],
  primevue: {
    options: {
        theme: {
            preset: MyPreset,
            options: {
              darkModeSelector: ".dark"
            }
        }
    }
}
})
