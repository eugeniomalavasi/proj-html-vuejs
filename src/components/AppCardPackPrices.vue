<script>

export default {
    props: {
        cardPackPrices: Object,
    },
    data() {
        return {

        }
    },

    created() {
        this.logStore() ;
    },

    methods: {
        logStore() {
            console.log(this.cardPackPrices);
        }
    },
}

</script>

<template>
    <div class="">
        <div class="cardProject ms-card ">
            <div>

            </div>
            <div class="containerDiv">
                <h1>{{ cardPackPrices.title }}</h1>
                <p>{{ cardPackPrices.subTitle }}</p>
            </div>
            <div :class="{ 'adviced': cardPackPrices.isActive, 'containerPrice': cardPackPrices.isActive == false }">
                <!-- :class="{ 'adviced': store.cardPrices.flag, 'containerPrice': store.cardPrices.flag == false }" -->
                <!-- :class="{'round' : isRound, 'green': isGreen}"
                "{'adviced' : store.cardPrices.flag, 'containerPrice': !store.cardPrices.flag}" -->

                <h2>${{ cardPackPrices.price }}/ Design</h2>
            </div>

            <div class="containerList">
                <ul v-for="features in cardPackPrices.listFeatures">
                    <li>{{ features }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.cardProject {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;

    .overImg {
        position: relative;
    }

    .overText {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    .adviced {
        background-image: $primary-background;
    }

    .containerPrice {
        background-image: $secondary-background;
        color: white;
    }
}
</style>