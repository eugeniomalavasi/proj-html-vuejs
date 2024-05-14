<script>
export default {
    props: {
        cardIcon: Object,
    }
};
</script>

<template>
<div class="cardIcon">
    <h1><i :class='cardIcon.icon'></i></h1>
    <h1>{{ cardIcon.title }}</h1>
    <p>{{ cardIcon.text }}</p>
</div>
</template>

<style scoped lang="scss">
.cardIcon {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 20px;
    min-height: 300px;
}
</style>
