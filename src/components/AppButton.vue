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
    background-color: black;
    &:hover {
        background-color: $title-color;
        box-shadow: 5px 5px 18px $title-color;
    }
}
</style>