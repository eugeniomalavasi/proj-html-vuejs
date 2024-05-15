<script>
import AppButton from "./AppButton.vue";
import { store } from "../store";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <!-- card footer centrali -->
    <div>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card carddx text-center d-flex align-items-center justify-content-center">
            <div class="card-body">
              <p class="card-text">Are You Ready?</p>
              <h3>Start a New Project</h3>
              <div class="input">
                <input class="input-email" type="email" name="EMAIL" placeholder="Enter Your Email Address"
                  required="" />
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
      </div>
    </div>
    <!-- fine card footer centrali -->

    <!-- sponsor -->
    <div class="d-flex flex-row mt-5 align-items-center card-sponsor">
      <div v-for="curimage in store.sponsorArray">
        <img :src="curimage.path" alt="" />
      </div>
    </div>
    <!-- fine sponsor -->
    <div class="container mb-3 mt-2">
      <div class="row-4 d-flex">
        <div class="col">
          <img src="../assets/img/logo.png" alt="business logo" />
          <p>
            While the lovely valley teems with vapour around me, and the meridian sun
            strikes the upper surface of the impenetrable foliage of my trees.While the
            lovely valley teems with vapour around me
          </p>
        </div>
        <div class="col">
          <h4>QUIK LINKS</h4>
          <ul v-for="cur in store.listFooter">
            <li><a href=""></a>{{ cur.title }}</li>
          </ul>
        </div>
        <div class="col">
          <h4>CONTACT</h4>
          <ul>
            <li>{{ store.cardContact[0].text }}</li>
            <li>{{ store.cardContact[1].mail }}</li>
            <li>+99 (0) 101 0000 888</li>
          </ul>
        </div>
        <div class="col">
          <h4>LOCATION ON MAP</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34219.59855447546!2d-73.99748458069466!3d40.70450307841089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1715758758135!5m2!1sit!2sit"
            width="400" height="250" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <p class="par-footer">© 2024 PHLOX BUSINESS THEME</p>
      <div>
        <ul class="icon d-flex gap-2">
          <li>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding-top: 200px;

  .row {
    margin: 10px;

    .card {
      position: relative;
      top: 0px;
      margin-top: 0;
      margin-bottom: -145px;
      height: 30vh;
    }
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
}

.button {
  text-align: center;
  margin: 20px 0;
}

.cardsx {
  background-color: #9be15d;
  border-radius: 15px;
  color: white;
  width: 85%;
  box-shadow: -3px 9px 34px 0 rgba(0, 0, 0, 0.25);
}

.card-sponsor {
  min-width: 200px;
  min-height: 150px;
  background-color: #f6f6f6;
  // margin-top: 0;
  // margin-bottom: -145px;
  padding: 240px 0 113px;
  // position: relative;
  // top: -145px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.par-footer {
  text-align: start;
  margin: 0 30px;
}
</style>
