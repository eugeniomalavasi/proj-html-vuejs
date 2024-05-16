<script>
import AppCardContact from "../components/AppCardContact.vue";
import AppButton from "../components/AppButton.vue";
import ContactForm from "../components/ContactForm.vue";
import { store } from '../store';

export default {
  components: {
    AppCardContact,
    AppButton,
    ContactForm,
  },
  data() {
    return {
      store,
    }
  }
};
</script>

<template>

  <!-- title -->
  <div class="title-contact title-color">
    <h1>Contact Page</h1>
  </div>
  <!-- mappa -->
  <div class="container-fluid mt-5 d-flex flex-column h-100">
  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d463149.1254326645!2d-97.165819!3d32.518685!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1715687217406!5m2!1sit!2sit" 
    class="flex-grow-1" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  <!-- container card -->
  <div class="container mt-3">
    <AppCardContact />
  </div>
</div>

  <!-- section contact -->
 
  <section >
    <div class="cont-contact container-fluid pt-5 d-flex ">
      <div class="row">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.title-contact {
  text-align: center;
  padding-top: 80px;
  background-image: $third-background;
 
  h1 {
    color: $title-color;
    font-weight: 600;
    font-size: 3rem;
    box-shadow: inset gray 0px 10px 20px -10px;
    padding: 4rem 0;
  }
}
html, body {
  height: 100%;
  margin: 0;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  height: 100%;
}

iframe {
  flex-grow: 1;
  width: 100%;
  height: 50vh;
}

.cont-contact{
  margin-left: 0;
  margin-right: 0;
}



</style>
