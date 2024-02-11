import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false /* Gör så att light mode är default */
  }),
  actions: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode /* "flippar switchen". Om dark mode var på, så blir dark mode avstängt när denna funktion kallas */
    }
  }
})
