<script>
import AppButton from './AppButton.vue';



export default {
    component:{
        AppButton,
    },
    data() {
        return{

        }
    }
    
}
</script>

<template>
    <footer>
        <div>
        <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </footer>
   
</template>

<style lang="scss" scoped>

footer{
    padding-top: 100px;
}
    
</style>