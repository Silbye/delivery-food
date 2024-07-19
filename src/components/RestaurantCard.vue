<template>
  <RouterLink :to="'/restaurants/' + data.name" class="restaurant">
    <img class="rest-image" :src="data.image" alt="Restaurant image" />
    <div class="rest-info">
      <div class="rest-info-top">
        <h1 class="roboto-bold">{{ data.fullName }}</h1>
        <p>{{ data.deliveryTime }} мин</p>
      </div>
      <div class="rest-info-bottom">
        <div class="rest-rating">
          <img src="../assets/img/icons/rating-star.svg" alt="" />
          <p class="roboto-bold">{{ data.rating }}</p>
        </div>
        <p class="rest-price">От {{ data.price }} ₽</p>
        <img src="../assets/img/dot.svg" alt="" />
        <p class="rest-type">{{ data.type }}</p>
      </div>
    </div></RouterLink
  >
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    data: Object,
  },
};
</script>
