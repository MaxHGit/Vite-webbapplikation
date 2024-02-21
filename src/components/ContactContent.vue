<template>
  <div>
    <!-- FormComponent som lyssnar efter custom eventet "form-submitted" med metoden formSubmitted som värde -->
    <FormComponent @form-submitted="formSubmitted" />
  </div>
</template>

<script>
  import FormComponent from '../components/FormComponent.vue'

  export default {
    components: {
      FormComponent
    },
    /* Skickar meddelande till konsolen, som en notis för admins */
    methods: {
      formSubmitted(formData) {
        console.log(
          `Nytt meddelande mottaget: ${formData.message}, av ${formData.name} (email: ${formData.email})`
        )
      }
    }
  }
</script>
