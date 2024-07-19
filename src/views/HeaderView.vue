<template>
  <CartComponent v-if="$store.state.cartOpen" />
  <header class="header">
    <div class="container">
      <RouterLink to="/"
        ><img src="../assets/img/logo.svg" alt="Logo"
      /></RouterLink>
      <div class="header-buttons">
        <button class="header-button login-button">
          <img src="../assets/img/icons/user.svg" alt="" />Войти</button
        ><button @click="toggleCart" class="header-button cart-button">
          <img src="../assets/img/icons/shopping-cart.svg" alt="" />Корзина
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
import CartComponent from "../components/CartComponent.vue";

export default {
  methods: {
    toggleCart() {
      this.$store.commit("toggleCart");
    },
  },
  components: {
    CartComponent,
  },
};
</script>
