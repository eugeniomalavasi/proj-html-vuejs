<script>
import AppButton from "./AppButton.vue";


export default {
  components: {
    AppButton,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <div>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
        
          <div class="card carddx text-center">
            <div class="card-body text-center">
              <p class="card-text">Are You Ready?</p>
              <h3>Start a New Project</h3>
               <div class="input">
                <input class="input-email"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Your Email Address"
                  required=""
                />
                <input class="input-submit"type="submit" value="SUBMIT" />
              </div>

              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card cardsx">
            <div class="card-body">
                <p class="card-text">
                What Are You Waiting for?
              </p>
              <h3 class="card-title">Let's Talk About Work</h3> 
             <div class="button">
                <AppButton />
             </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding-top: 100px;

  .row{
    margin: 10px;
  }

.carddx{
    background-color: black;
    border-radius: 15px;
    color: white;
    background-color: transparent;
    background-image: linear-gradient(301deg, #0c0c0c 0%, #474747 100%);
    box-shadow: -3px 9px 34px 0 rgba(0, 0, 0, .25);
    width: 85%;

}


  .card-text {
    text-align: center;
   
    

    }

    .input{
        border-radius: 20px;
        background: #70707059;
        padding: 10px 30px;
        margin: 23px;
       
     

   .input-email{
    border: 0;
    background: #70707000;
    padding-left: 5px;
    padding-right: 20px;
}
   }

   .input-submit{
    border: 0;
    background:#70707000 ;
    color: #707070f2;
    text-align: end;
    padding-left: 20px;
    padding-right: 5px;
   }

}


    .button{
        text-align: center;
        margin: 30px 0;
    }

    .cardsx{
    background-color: #9be15d ;
    border-radius: 15px;
    color: white;
    width: 85%;
}


</style>
