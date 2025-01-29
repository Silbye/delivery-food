<template>
  <div class="restaurant-page-view">
    <div class="container">
      <div class="restaurant-page-top rest-info-bottom">
        <h1 class="roboto-bold">{{ data.fullName }}</h1>
        <div class="rest-rating">
          <img src="../assets/img/icons/rating-star.svg" alt="" />
          <p class="roboto-bold">{{ data.rating }}</p>
        </div>
        <p class="rest-price">От {{ data.price }} ₽</p>
        <img src="../assets/img/dot.svg" alt="" />
        <p class="rest-type">{{ data.type }}</p>
      </div>
      <div class="restaurant-page-bottom">
        <ProductCard
          v-for="(product, index) in data.products"
          :key="index"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  data() {
    return {
      data: {},
    };
  },
  components: {
    ProductCard,
  },
  computed: {},
  mounted() {
    this.data = this.$store.getters.restaurant(this.$route.params.name);
  },
  methods: {},
};
</script>

<style scoped src="@/assets/restaurant.css"></style>
