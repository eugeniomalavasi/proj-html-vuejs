<script>
import AppCardContact from "../components/AppCardContact.vue";
import AppButton from "../components/AppButton.vue";



export default {
  components: {
    AppCardContact,
    AppButton,
  },
};
</script>

<template>
  <div class="title-contact">
    <h1>Contact Page</h1>
  </div>
  <!-- container dard -->
  <div class="container">
    <div class="card d-flex flex-row">
      <AppCardContact />
    </div>
  </div>

  <!-- section contact -->
  <section>
    <div class="cont-contact pt-5">
        <div class="row">
            <div class="col-md-6">
                <h3>Please get in touch with us</h3>
                <p>
                    Please get in touch with us. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.
                </p>
            </div>
            <div class="col-md-6">
                <form class="row g-3">
                <h5>Send message</h5>
                    <div class="col-12">
                        <label for="Name" class="form-label">Full Name*</label>
                        <input type="text" class="form-control" id="Name" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="phoneNumber" class="form-label">Please Insert Phone Number</label>
                        <input type="tel" class="form-control" id="phoneNumber" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <AppButton />
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

  h1 {
    color: #00d9a6;
    font-weight: 700;
    font-size: 4rem;
  }
}
.container {
  .card {
    border: ipx solid black;
  }
}

.section{
  padding-top: 100px;
}
  h3{
    font-size: 5rem;
  }

  h5{
  font-size: 2.25rem;
}
  .form-control {
  border: none;
  border-bottom: 1px solid black;
}

</style>
