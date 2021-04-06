<template>
  <div id="products-page">
    <h2>Products</h2>
    <div id="products">
      <router-link
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:to="'/products/' + product.id"
      >
        <show-product v-bind:product="product"></show-product>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/common/products.js";

export default {
  //   props: {
  //     products: {
  //       type: Array,
  //     },
  //   },
  components: { "show-product": ShowProduct },
  data() {
    return {
      products: products,
    };
  },
};
</script>

<style scoped>
#products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
a {
  text-decoration: none;
  max-width: 362px;
}
</style>