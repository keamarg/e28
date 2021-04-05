<template>
  <div id="product-page">
    <template v-for="product in products">
      <show-product
        v-if="product.id == id"
        v-bind:key="product.id"
        v-bind:product="product"
      ></show-product>
    </template>
    <span v-if="id > 10">
      <p>Product {{ id }} not found</p>
      <a href="/products">Back to products page</a>
    </span>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/common/products.js";
export default {
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  components: { "show-product": ShowProduct },
  data() {
    return {
      products: products,
    };
  },
};
</script>
  
<style>
</style>