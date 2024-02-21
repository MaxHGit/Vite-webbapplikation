<template>
  <!-- Anropar submitForm() i methods när formen  submitas -->
  <b-form @submit.prevent="submitForm">
    <!-- Fält för namn -->
    <b-form-group label="Name:" label-for="input-name">
      <b-form-input
        id="input-name"
        v-model="formData.name"
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>

    <!-- Fält för email -->
    <b-form-group label="Email:" label-for="input-email">
      <b-form-input
        id="input-email"
        type="email"
        v-model="formData.email"
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <!-- Fält för meddelande -->
    <b-form-group label="Message:" label-for="input-message">
      <b-form-textarea
        id="input-message"
        v-model="formData.message"
        placeholder="Enter message"
        rows="3"
      ></b-form-textarea>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        /* Custom event form-submitted med formdata payload */
        this.$emit('form-submitted', this.formData)
      }
    }
  }
</script>
