<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { useThemeStore } from '@/stores/themeStore'
  import '../assets/main.css'
</script>

<template>
  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
    <BNavbarBrand
      ><RouterLink to="/" class="nav-link">News</RouterLink></BNavbarBrand
    >
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </BNavItem>
        <BNavItem>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </BNavItem>
        <BNavItem>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </BNavItem>
        <BNavItem>
          <!-- När knappen klickas på används useThemeStore() för att  -->
          <BButton variant="primary" @click="useThemeStore().toggleTheme()"
            >Toggle Dark Mode</BButton
          >
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>

  <RouterView />
</template>

<style scoped></style>
