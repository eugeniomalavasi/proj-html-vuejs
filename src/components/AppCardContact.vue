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
  <div class="row d-flex align-items-stretch  mr-0 pos">
    <div class="col-md-4 mb-4 p-1" v-for="index in store.cardContact" :key="index.id">
      <div class="card d-flex flex-column p-2">
        <div class="card-body">
          <div class="row">
            <div class="col-auto d-flex align-items-center mt-5">
              <i :class="index.icon"></i>
            </div>
            <div class="col mt-5">
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
.pos {
  position: relative;
  top: -100px;
  bottom: 0;
}
.card{
    height: 30vh;
    width: 25vw;
}

i {
  font-size: 80px;
  color: #00d9a6;
}


</style>
