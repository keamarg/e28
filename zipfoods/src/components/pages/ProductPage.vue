<template>
  <div id="product-page">
    <div v-if="productNotFound">
      <p>Product {{ id }} not found.</p>
      <router-link to="/products">Back to products page</router-link>
    </div>
    <div v-else-if="product">
      <show-product
        v-bind:product="product"
        v-bind:detailed="true"
      ></show-product>
    </div>
    <!-- My first solution -->
    <!-- <template v-for="product in products">
      <show-product
        v-if="product.id == id"
        v-bind:key="product.id"
        v-bind:product="product"
      ></show-product>
    </template>
    <span v-if="id > 10">
      <p>Product {{ id }} not found</p>
      <router-link to="/products">Back to products page</router-link>
    </span> -->
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";

export default {
  components: { "show-product": ShowProduct },
  props: {
    id: {
      type: String,
    },
    products: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return this.products.filter((product) => {
        return product.id == this.id;
      }, this.id)[0];
    },
    productNotFound() {
      return this.product == null;
    },
  },
};
</script>
  
<style>
</style>