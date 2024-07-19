import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
    restaurants: [
      {
        name: "pizza-plus",
        fullName: "Пицца плюс",
        deliveryTime: 50,
        rating: 4.5,
        price: 300,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/1.png", import.meta.url),
      },
      {
        name: "tanuki",
        fullName: "Тануки",
        deliveryTime: 50,
        rating: 4.6,
        price: 450,
        type: "Суши",
        image: new URL("@/assets/img/restaurants/2.png", import.meta.url),
      },
      {
        name: "foodband",
        fullName: "FoodBand",
        deliveryTime: 50,
        rating: 4.1,
        price: 600,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/3.png", import.meta.url),
      },
      {
        name: "zhadina-pizza",
        fullName: "Жадина-пицца",
        deliveryTime: 50,
        rating: 4.9,
        price: 900,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/4.png", import.meta.url),
      },
      {
        name: "tochka-edy",
        fullName: "Точка еды",
        deliveryTime: 50,
        rating: 4.2,
        price: 300,
        type: "Суши",
        image: new URL("@/assets/img/restaurants/5.png", import.meta.url),
      },
      {
        name: "pizzaburger",
        fullName: "PizzaBurger",
        deliveryTime: 50,
        rating: 3.9,
        price: 450,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/6.png", import.meta.url),
      },
    ],
    cartOpen: false,
  },
  getters: {
    restaurant: (state) => (name) => {
      return state.restaurants.find((item) => item.name === name);
    },
    cartLength(state) {
      return state.cartItems.length;
    },
  },
  mutations: {
    addItemToCart(state, item) {
      if (state.cartItems.find((cartItem) => cartItem.name === item.name)) {
        const newItem = state.cartItems.find(
          (cartItem) => cartItem.name === item.name
        );
        newItem.quantity++;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItemFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    increaseCount(state, index) {
      state.cartItems[index].quantity++;
    },
    decreaseCount(state, index) {
      state.cartItems[index].quantity--;
    },
    toggleCart(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
  actions: {},
});
