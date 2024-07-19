<template>
  <div class="product">
    <img class="product-image" :src="data.image" alt="Product image" />
    <div class="product-info">
      <div class="product-info-top">
        <h1>{{ data.name }}</h1>
        <p>{{ data.info }}</p>
      </div>
      <div class="product-info-bottom">
        <button @click="addToCart">
          В корзину
          <img src="../assets/img/icons/shopping-cart-white.svg" alt="" />
        </button>
        <p class="roboto-bold">{{ data.price }} ₽</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    addToCart() {
      this.$store.commit("addItemToCart", this.data);
    },
  },
};
</script>

<style scoped src="@/assets/restaurant.css"></style>
