<script>
import AppButton from "./AppButton.vue";
import FooterCard from "./FooterCard.vue";
import { store } from "../store";
import FooterSponsor from "./FooterSponsor.vue";

export default {
  components: {
    AppButton,
    FooterCard,
    FooterSponsor,
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
  <div class="conteiner-fluid">
    <div>
      <div class="row">
        <FooterCard />
      </div>
    </div>
    <!-- fine card footer centrali -->

    <!-- sponsor -->
    <div class="d-flex flex-row mt-5 align-items-center card-sponsor">
    
      <FooterSponsor :store="store"/>
    </div>
  </div>
    <!-- fine sponsor -->

    <!-- footer top -->
    <div class="container-fluid p-5">
      <div class="row-4 d-flex">
        <div class="col me-3">
          <img  src="../assets/img/logo.png" alt="business logo" />
          <p class="mt-3">
            While the lovely valley teems with vapour around me, and the meridian sun
            strikes the upper surface of the impenetrable foliage of my trees.While the
            lovely valley teems with vapour around me
          </p>
        </div>
        <div class="col">
          <h4>QUIK LINKS</h4>
          <ul class="p-0 mt-3">
            <li v-for="cur in store.listFooter"><router-link :to ="{name:cur.routeName}" class="nav-link">{{ cur.title }}</router-link> </li> 
          </ul>
        </div>
        <div class="col">
          <h4>CONTACT</h4>
          <ul class="p-0 mt-3">
            <li>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</li>
            <li class="mt-2">info@yourdomain.com</li>
            <li class="mt-3">+99 (0) 101 0000 888</li>
          </ul>
        </div>
        <div class="col">
          <h4 class="mb-3">LOCATION ON MAP</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34219.59855447546!2d-73.99748458069466!3d40.70450307841089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1715758758135!5m2!1sit!2sit"
            width="400" height="250" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

    <!-- footer button -->
    <div class="d-flex justify-content-between cont-button pt-3">
      <p class="par-footer">© 2024 PHLOX BUSINESS THEME</p>
      <div class="d-flex m-0">
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
@use"../style/partials/_variables" as*;

footer {
  padding-top: 200px;

  .row {
    margin: 10px;   
  }
}
  
.card-sponsor {
  min-width: 200px;
  min-height: 150px;
  background-color: #f6f6f6;
  padding: 240px 0 113px;
 
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cont-button{
  background-color: transparent;
    background-image: linear-gradient(301deg, #0c0c0c 0%, #474747 100%);
    height: 10vh;
    color: #707070f2;
}

.list{
  text-decoration: none;
  color: black;
}


.par-footer {
  text-align: start;
  margin: 0 30px;
  width: 50%;
}

.icon{
  margin: 0 40px;
  li{
    text-decoration: none;
    a{
      color: #707070f2;
    }
    
  }
 
}

h4{
  font-weight: 700;
}
</style>
