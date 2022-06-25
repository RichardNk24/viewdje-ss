<template>
  <div class="intro"></div>
  <div class="product-menu">
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: { Products },
};
</script>

<style scoped>
#intro {
  background-image: url(../assets/images/pizza-menu.jpg);
  background-position: bottom;
  background-size: cover;
  height: 300px;
  padding: 3%;
  width: 100%;
}
#intro p {
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
