<script>
export default {

}
</script>

<template>
    <button>READ MORE</button>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

button {
    padding: 10px 25px;
    color: white;
    border: none;
    border-radius: 25px;
    background-image: $primary-background;
    box-shadow: 5px 5px 18px $title-color;


    &:hover {
        background-image: $secondary-background;
        box-shadow: none;
        animation: button-an 1s forwards;
    }

    @keyframes button-an {
        25% {
            box-shadow: 0 0.5em 0.5em -0.4em $title-color;
            scale: 1.3;
        }
        50% {
            box-shadow: 0 0.6em 0.7em -0.3em $title-color;
        }
        100% {
            box-shadow: 0 0.8em 0.4em -0.4em $title-color;
            scale: 1.3;

        }
    }
}
</style>