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
    store,
  },
  data() {
    return {

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
