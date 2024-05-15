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
    <div class="container-card">
        <div class="cardProject ms-card " >
            <div>
                <div class="border-top" :class="{ 'border-adviced': cardPackPrices.isActive, 'border-containerPrice': cardPackPrices.isActive == false }"></div>
            </div>
            <div class="containerDiv">
                <h4>{{ cardPackPrices.title }}</h4>
                <p>{{ cardPackPrices.subTitle }}</p>
            </div>
            <div :class="{ 'adviced': cardPackPrices.isActive, 'containerPrice': cardPackPrices.isActive == false }">

                <h2><span>$</span>{{ cardPackPrices.price }}<span>/ Design</span></h2>
            </div>

            <div class="containerList">
                <ul v-for="features in cardPackPrices.listFeatures">
                    <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> {{ features }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;


.cardProject {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    text-align: center;

    .border-top {
        border-radius: 20px 20px 0 0;
        height: 10px;
    }

    .overImg {
        position: relative;
        padding: 20px;
    }

    .overText {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    .adviced {
        background-image: $primary-background;
        color: white;
        padding: 40px;
    }

    .border-adviced {
        background-image: $primary-background;
        color: white;
        padding: 10px;
    }

    .containerList {
        padding: 20px;
    }

    .containerDiv {
        padding: 10px;

        h4 {
            font-weight: bold;
        }
    }

    .containerPrice {
        background-image: $secondary-background;
        color: white;
        padding: 40px;
        min-height: 20px;
    }

    .border-containerPrice {
        background-image: $secondary-background;
        color: white;
        padding: 10px;
    }
}
</style>