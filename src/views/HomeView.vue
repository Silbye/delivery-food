<template>
  <main class="main">
    <div class="banner">
      <div class="container">
        <h1 class="roboto-bold">Онлайн-сервис доставки еды на дом</h1>
        <p>
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
    </div>
    <div class="restaurants">
      <div class="container">
        <div class="top-part">
          <h1 class="roboto-bold">Рестораны</h1>
          <input type="text" placeholder="Поиск блюд и ресторанов" />
        </div>
        <div class="bottom-part">
          <RestaurantCard
            v-for="(restaurant, index) in this.$store.state.restaurants"
            :key="index"
            :data="restaurant"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {};
  },
};
</script>
