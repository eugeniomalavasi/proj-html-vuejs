<script>
import { store } from '../store';
export default {
    data() {
        return {
           store,
        }
    }
  
};
</script>

<template>
  <div class="row d-flex align-items-stretch mt-5 mr-0 pos">
  <div class="col-md-4 mb-4 p-5" v-for="index in store.cardContact" :key="index.id">
    <div class="card h-100 d-flex flex-column p-2">
      <div class="card-body flex-grow-1 ">
        <div class="row">
          <div class="col-auto d-flex align-items-center">
            <i :class="index.icon"></i>
          </div>
          <div class="col">
            <h5 class="card-title">{{ index.name }} :</h5>
            <p class="card-text">{{ index.text }}</p>
            <p class="card-text">{{ index.mail }} {{ index.gg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
    
   
</template>

<style lang="scss" scoped>

.pos{
position: relative;
   top: -200px;
    bottom: 0;
}

    i{
      font-size: 80px;
      color: #00d9a6;
    }


    

</style>
