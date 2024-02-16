<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { useThemeStore } from '@/stores/themeStore'
  import '../assets/main.css'
</script>

<template>
  <BNavbar toggleable="lg" v-b-color-mode="'dark'" class="navb">
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
          <BButton variant="primary" @click="useThemeStore().toggleTheme()">
            <span v-if="useThemeStore().isDarkMode">Switch to Light Mode</span>
            <span v-else>Switch to Dark Mode</span>
          </BButton>
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>

  <RouterView />
</template>

<style scoped>
  .navb {
    background-color: #003366; /* Your custom color */
  }
  .dark-mode-button {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1006px) {
    /* Target screens smaller than the `md` breakpoint */
    .navbar-collapse .nav-item .nav-link {
      text-align: center;
      /* Additional styling here */
    }

    .navbar-collapse .nav-item {
      flex-basis: 100%; /* Allows each nav item to take full width */
      display: flex;
      justify-content: center; /* Centers the nav link/button within the nav item */
    }

    .dark-mode-button {
      width: auto; /* Adjust width as necessary, auto allows it to grow as needed */
      margin: auto; /* Centers the button if its width is less than its container */
    }
  }
</style>
