<template>
  <AppLayout :photoSrc="parentPhotoSrc">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
      <!-- <button @click="makeRequest">Сделать запрос</button> -->
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import { useStore } from 'pinia';

const rootStore = useRootStore();
// rootStore.getIngredients();

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
  setup() {
    // Убедитесь, что вызов useStore происходит после app.use(pinia)
    const store = useStore();
    // ...
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
@import "../pages/HomePage/HomePage.scss";
</style>
