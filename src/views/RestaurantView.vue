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
          v-for="(product, index) in products"
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
      products: [
        {
          name: "Ролл угорь стандарт",
          info: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
          price: 250,
          image: new URL("@/assets/img/products/1.png", import.meta.url),
          quantity: 1,
        },
        {
          name: "Калифорния лосось стандарт",
          info: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
          price: 395,
          image: new URL("@/assets/img/products/2.png", import.meta.url),
          quantity: 1,
        },
        {
          name: "Окинава стандарт",
          info: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
          price: 250,
          image: new URL("@/assets/img/products/3.png", import.meta.url),
          quantity: 1,
        },
        {
          name: "Цезарь маки хl",
          info: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
          price: 250,
          image: new URL("@/assets/img/products/4.png", import.meta.url),
          quantity: 1,
        },
        {
          name: "Ясай маки стандарт 185 г",
          info: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
          price: 250,
          image: new URL("@/assets/img/products/5.png", import.meta.url),
          quantity: 1,
        },
        {
          name: "Ролл с креветкой стандарт",
          info: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
          price: 250,
          image: new URL("@/assets/img/products/6.png", import.meta.url),
          quantity: 1,
        },
      ],
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
