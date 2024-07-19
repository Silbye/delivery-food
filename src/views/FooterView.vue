<template>
  <footer class="footer">
    <div class="container">
      <RouterLink to="/"
        ><img src="../assets/img/logo.svg" alt="Logo"
      /></RouterLink>
      <ul class="footer-links">
        <li><a href="">Ресторанам</a></li>
        <li><a href="">Курьерам</a></li>
        <li><a href="">Пресс-центр</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
      <ul class="footer-socials">
        <li>
          <a href=""><img src="../assets/img/icons/insta.svg" alt="" /></a>
        </li>
        <li>
          <a href=""><img src="../assets/img/icons/facebook.svg" alt="" /></a>
        </li>
        <li>
          <a href=""><img src="../assets/img/icons/vk.svg" alt="" /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import { RouterLink } from "vue-router";
export default {};
</script>
