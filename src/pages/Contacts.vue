<script>
import AppCardContact from "../components/AppCardContact.vue";
import AppButton from "../components/AppButton.vue";
import { store } from '../store';

export default {
  components: {
    AppCardContact,
    AppButton,
  },
  data() {
    return {
      store,
    }
  }
};
</script>

<template>
  <div class="title-contact">
    <h1>Contact Page</h1>
  </div>
  <div class="container-fluid mt-5 ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d463149.1254326645!2d-97.165819!3d32.518685!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1715687217406!5m2!1sit!2sit" width="1480" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- container card -->
  <div class="container">
    <AppCardContact />
  </div>

  <!-- section contact -->
  <section >
    <div class="cont-contact pt-5">
      <div class="row">
        <div class="col-md-5">
          <h3>Please get in touch with us</h3>
          <div class="barra">
            
          </div>
          <p>
            Please get in touch with us. When, while the lovely valley teems with vapour
            around me, and the meridian sun strikes the upper surface of the impenetrable
            foliage of my trees, and but a few stray gleams steal into the inner
            sanctuary. When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage of my
            trees.
          </p>
        </div>
        <div class="col-md-7 mt-4">
          <form class="row g-3">
            <h5>Send message</h5>
            <div class="col-md-4">
              <label for="Name" class="form-label">Full Name*</label>
              <input type="text" class="form-control" id="Name" placeholder="" />
            </div>
            <div class="col-md-4">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="col-md-4">
              <label for="phoneNumber" class="form-label"
                >Please Insert Phone Number</label
              >
              <input type="tel" class="form-control" id="phoneNumber" placeholder="" />
            </div>
            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>

          <div class="button">
            <AppButton />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title-contact {
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  padding-top: 100px;

 
  h1 {
    color: #00d9a6;
    font-weight: 700;
    font-size: 4rem;
  }
}
.barra{
    height: 5px;
    background-image: linear-gradient(to right,#9be15d 0%, #00d9a6 100%);
    content: "";
    width: 68px;
    border-radius: 5px;
    margin: 0 5px;
    margin-bottom: 10px;
  }
  p{
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6em;
  }

.container {
  .card {
    border: ipx solid black;
  }
}

section {
  // padding-top: 100px;
  margin: 0 2rem;
}
h3 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

h5 {
  font-size: 2.25rem;
}
.form-control {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}

.button {
  text-align: end;
  margin-top: 25px;
}
</style>
