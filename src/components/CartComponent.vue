<template>
  <div class="cart-background"></div>
  <div class="cart-box">
    <div class="cart-top">
      <h1 class="roboto-bold">Корзина</h1>
      <button @click="toggleCart">
        <img src="../assets/img/icons/close-cart.svg" alt="" />
      </button>
    </div>
    <div class="cart-middle">
      <p v-if="this.$store.getters.cartLength == 0">Корзина пуста</p>
      <div v-else class="cart-items">
        <div
          class="cart-item"
          v-for="(item, index) in this.$store.state.cartItems"
          :key="index"
        >
          <p>{{ item.name }}</p>
          <h1 class="cart-item-price roboto-bold">{{ item.price }} ₽</h1>
          <div class="cart-item-quantity">
            <button @click="decrease(index)">-</button>
            <p>{{ item.quantity }}</p>
            <button @click="increase(index)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-bottom">
      <div
        v-if="this.$store.getters.cartLength > 0"
        class="cart-price roboto-bold"
      >
        {{ price }} ₽
      </div>
      <button v-if="this.$store.getters.cartLength > 0" class="cart-order">
        Оформить заказ</button
      ><button @click="toggleCart" class="cart-cancel">Отмена</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleCart() {
      this.$store.commit("toggleCart");
    },
    increase(index) {
      this.$store.commit("increaseCount", index);
    },
    decrease(index) {
      if (this.$store.state.cartItems[index].quantity == 1) {
        this.$store.commit("removeItemFromCart", index);
      } else {
        this.$store.commit("decreaseCount", index);
      }
    },
  },
  computed: {
    price() {
      let sum = 0;
      this.$store.state.cartItems.forEach(function (item) {
        sum += parseFloat(item.price) * parseFloat(item.quantity);
      });
      return sum;
    },
  },
};
</script>
<style scoped src="@/assets/cart.css"></style>
