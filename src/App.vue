<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppChat from './components/AppChat.vue'



export default {
  components: {
    AppHeader,
    AppFooter,
    AppChat,

  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />

  <AppChat :store="store"/>

  <router-view class="main"></router-view>

  <AppFooter />

</template>

<style lang="scss">
.main {
  padding-top: 100px;
}
</style>
