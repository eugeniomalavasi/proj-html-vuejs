<script>
export default {
    props: {
        cardIcon: String,
        cardTitle: String,
        cardText: String,
    }
};
</script>

<template>
<div>
    <h3>{{ cardIcon }}</h3>
    <h1>{{ cardTitle }}</h1>
    <p>{{ cardText }}</p>
</div>
</template>

<style scoped lang="scss">

</style>
