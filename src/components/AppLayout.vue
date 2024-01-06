<template>
  <div class="root">
    <div class="root__img"><img :src="photoSrc" alt="Photo" /></div>
    <div class="root__main">
      <el-button class="root__button btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photoSrc: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.root {
  display: flex;
  // min-height: 100vh;
  background-color: $background;
  max-width: 1440px;
  margin-inline: auto;

  &__img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  &__main {
    width: 50%;
    padding: 32px 40px;
    position: relative;
  }

  .btn {
    position: absolute;
    top: 32px;
    right: 40px;
    border-radius: 4px;
    background: #ff0f82;
    padding: 8px 16px;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
      background: darken(#ff0f82, 10%);
      color: darken(#fff, 10%);
    }
  }
}
</style>
