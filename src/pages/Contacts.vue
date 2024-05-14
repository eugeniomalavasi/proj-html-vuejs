<script>
import AppCardContact from "../components/AppCardContact.vue";

export default {
  components: {
    AppCardContact,
  },
};
</script>

<template>
  <div class="title-contact">
    <h1>Contact Page</h1>
  </div>
  <div class="container ">
    <div class="card d-flex flex-row">
      
          <AppCardContact />
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-contact {
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;

  h1 {
    color: #00d9a6;
    font-weight: 700;
    font-size: 4rem;
  }
}
.container {
 
  .card{
    border: ipx solid black;
    
  }
 
}
</style>
