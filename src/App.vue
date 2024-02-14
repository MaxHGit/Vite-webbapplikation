<script setup>
  import NavBar from './components/NavBar.vue'
  import { watchEffect } from 'vue'
  import { useThemeStore } from '@/stores/themeStore'

  watchEffect(() => {
    /* Lägger till klassen "dark-mode" till body om dark mode är aktiveras, används med CSS för att faktiskt göra sidan mörk */
    if (useThemeStore().isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  })
</script>

<template>
  <NavBar />
</template>

<style scoped></style>
