<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.root {
  display: flex;
  background-color: $background;

  &__img {
    width: 50%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  &__main {
    width: 50%;
  }
}
</style>
