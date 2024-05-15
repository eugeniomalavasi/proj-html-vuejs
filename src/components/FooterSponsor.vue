<script>

export default {
    props : {
    store: Object,
        },
data() {
    return {
       
        
    }
}
}
</script>

<template>
    <div v-for="curimage in store.sponsorArray">
        <img :src="curimage.path" alt="" />
      </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

</style>