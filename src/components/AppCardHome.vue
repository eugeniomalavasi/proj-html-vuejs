<script>
export default {
    props: {
        cardIcon: Object,
    }
};
</script>

<template>
<div class="cardIcon">
    <h1><i class="title-color" :class='cardIcon.icon'></i></h1>
    <h3>{{ cardIcon.title }}</h3>
    <p>{{ cardIcon.text }}</p>
</div>
</template>

<style scoped lang="scss">
@use"../style/partials/_variables" as*;

.cardIcon {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 20px;
    min-height: 300px;
    cursor: pointer;

    &:hover {
        background-image: $primary-background;
        animation: mymove 1s forwards;
        border-radius: 15px;
    }

    h3{
        font-weight: 400;
        padding-top: 10px;
    }
}
</style>
