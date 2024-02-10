<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
    <BNavbarBrand
      ><RouterLink to="/" class="nav-link">Logo</RouterLink></BNavbarBrand
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
      </BNavbarNav>
      <!-- Right aligned nav items -->
    </BCollapse>
  </BNavbar>

  <RouterView />
</template>

<style scoped></style>
