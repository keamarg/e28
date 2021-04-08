<template>
  <div id="products-page">
    <h2>Products</h2>
    <div id="products">
      <router-link
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:to="'/products/' + product.id"
      >
        <show-product
          v-bind:product="product"
          v-bind:detailed="false"
        ></show-product>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";

export default {
  components: { "show-product": ShowProduct },
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
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