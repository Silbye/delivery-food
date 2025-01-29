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
        products: [
          {
            name: "Пицца Пепперони",
            info: "Тесто для пиццы, томатный соус, моцарелла, сырокопченая колбаса, перец чили, орегано, сушеный базилик, чеснок",
            price: 250,
            image:
              "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?",
            quantity: 1,
          },
          {
            name: "Средиземноморская пицца",
            info: "Тесто для пиццы, томатный соус, моцарелла, помидоры черри, перец",
            price: 395,
            image:
              "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?",
            quantity: 1,
          },
          {
            name: "Пицца «Маринара»",
            info: "Тесто для пиццы, томатный соус, чеснок, базилик",
            price: 250,
            image:
              "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?",
            quantity: 1,
          },
          {
            name: "Пицца «Карбонара»",
            info: "Тесто для пиццы, томатный соус, моцарелла, пармезан, яйца, бекон",
            price: 250,
            image:
              "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?",
            quantity: 1,
          },
          {
            name: "Фермерская пицца",
            info: "Тесто для пиццы, томатный соус, моцарелла, перец, горошек, поркетта",
            price: 250,
            image:
              "https://images.pexels.com/photos/5639555/pexels-photo-5639555.jpeg?",
            quantity: 1,
          },
          {
            name: "Крестьянская пицца",
            info: "Тесто для пиццы, томатный соус, моцарелла, спаржа, грибы, бекон, пармезан",
            price: 250,
            image:
              "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?",
            quantity: 1,
          },
        ],
      },
      {
        name: "tanuki",
        fullName: "Тануки",
        deliveryTime: 50,
        rating: 4.6,
        price: 450,
        type: "Суши",
        image: new URL("@/assets/img/restaurants/2.png", import.meta.url),
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
      },
      {
        name: "foodband",
        fullName: "FoodBand",
        deliveryTime: 50,
        rating: 4.1,
        price: 600,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/3.png", import.meta.url),
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
      },
      {
        name: "zhadina-pizza",
        fullName: "Жадина-пицца",
        deliveryTime: 50,
        rating: 4.9,
        price: 900,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/4.png", import.meta.url),
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
      },
      {
        name: "tochka-edy",
        fullName: "Точка еды",
        deliveryTime: 50,
        rating: 4.2,
        price: 300,
        type: "Суши",
        image: new URL("@/assets/img/restaurants/5.png", import.meta.url),
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
      },
      {
        name: "pizzaburger",
        fullName: "PizzaBurger",
        deliveryTime: 50,
        rating: 3.9,
        price: 450,
        type: "Пицца",
        image: new URL("@/assets/img/restaurants/6.png", import.meta.url),
        products: [
          {
            name: "Бургер чеддер & бекон",
            info: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус.",
            price: 640,
            image: "https://silbye.github.io/burgers-landing/images/1.png",
            quantity: 1,
          },
          {
            name: "BBQ с беконом и курицей",
            info: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ.",
            price: 560,
            image: "https://silbye.github.io/burgers-landing/images/2.png",
            quantity: 1,
          },
          {
            name: "Дабл биф бургер",
            info: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
            price: 800,
            image: "https://silbye.github.io/burgers-landing/images/3.png",
            quantity: 1,
          },
          {
            name: "Баварский бургер",
            info: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
            price: 560,
            image: "https://silbye.github.io/burgers-landing/images/4.png",
            quantity: 1,
          },
          {
            name: "Бекон чизбургер",
            info: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
            price: 640,
            image: "https://silbye.github.io/burgers-landing/images/5.png",
            quantity: 1,
          },
          {
            name: "Индиана бургер",
            info: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
            price: 720,
            image: "https://silbye.github.io/burgers-landing/images/6.png",
            quantity: 1,
          },
        ],
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
