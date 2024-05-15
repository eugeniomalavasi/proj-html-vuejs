<script>
import AppCardPackPrices from './AppCardPackPrices.vue';
import { store } from '../store';

export default {
    components: {
        AppCardPackPrices,
    },
    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <div class="bg-gradient">
        <div class="container">
            <div class="row">
                <div class="col-3 px-3">
                    <h1 class="title">With <span class="title-color">Live Chat 24/7</span> Support</h1>
                    <p>Far far away, behind the word mountains, far from the countriesVokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                        Semantics..</p>
                </div>

                <div class="col-3" v-for="cardPack in store.cardPrices">
                    <AppCardPackPrices :cardPackPrices="cardPack" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>