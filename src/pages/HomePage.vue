<template>
  <AppLayout :photoSrc="parentPhotoSrc">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);

export default {
  components: {
    AppLayout,
  },
  data() {
    return {
      parentPhotoSrc: "/src/assets/img/bg-1.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
@import "../pages/HomePage/HomePage.scss";
</style>
