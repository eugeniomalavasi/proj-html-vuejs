<script>
import AppButton from "./AppButton.vue";

export default {
  components: {
    AppButton,
  },
}
</script>

<template>
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card carddx text-center d-flex align-items-center justify-content-center">
      <div class="card-body">
        <p class="card-text">Are You Ready?</p>
        <h3>Start a New Project</h3>
        <div class="input">
          <input class="input-email" type="email" name="EMAIL" placeholder="Enter Your Email Address" required="" />
          <input class="input-submit" type="submit" value="SUBMIT" />
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card cardsx d-flex align-items-center justify-content-center">
      <div class="card-body text-center">
        <p class="card-text">What Are You Waiting for?</p>
        <h3 class="card-title">Let's Talk About Work</h3>
        <div class="button">
          <AppButton />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.card {
  position: relative;
  top: 0px;
  margin-top: 0;
  margin-bottom: -145px;
  height: 30vh;
}

.carddx {
  border-radius: 15px;
  color: white;
  background-color: transparent;
  background-image: linear-gradient(301deg, #0c0c0c 0%, #474747 100%);
  box-shadow: -3px 9px 34px 0 rgba(0, 0, 0, 0.25);
  width: 85%;
}

.card-text {
  text-align: center;
  padding-top: 20px;
}

.input {
  border-radius: 20px;
  background: #70707059;
  padding: 10px 30px;
  margin: 23px;

  .input-email {
    border: 0;
    background: #70707000;
    padding-left: 5px;
    padding-right: 20px;
  }
}

.input-submit {
  border: 0;
  background: #70707000;
  color: #707070f2;
  text-align: end;
  padding-left: 20px;
  padding-right: 5px;
}


.button {
  text-align: center;
  margin: 20px 0;
}

.cardsx {
  background-image: $primary-background;
  border-radius: 15px;
  color: white;
  width: 85%;
  box-shadow: -3px 9px 34px 0 rgba(0, 0, 0, 0.25);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>