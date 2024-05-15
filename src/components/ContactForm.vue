<script>
import AppButton from "./AppButton.vue";

export default {
components: {
    AppButton,
},
}
</script>

<template>
    <div class="col-md-5 pe-5">
          <h3>Please get intouch withus</h3>
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
        <!-- form -->
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
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

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
  
  margin: 0 2rem;
  p{
    font-size: 1.3rem;
  }
}
h3 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bolder;
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