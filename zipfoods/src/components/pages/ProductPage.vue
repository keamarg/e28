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
      <button v-on:click="addToCart">Add to cart</button>
      <transition name="fade">
        <div v-if="addConfirmation" class="alert">
          {{ product.name }} was added to your cart!
        </div>
      </transition>
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
import { cart } from "@/common/app.js";

export default {
  components: { "show-product": ShowProduct },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      addConfirmation: false,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.id);
    },
    productNotFound() {
      return this.product == null;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart() {
      cart.add(this.product.id);

      this.$store.commit("setCartCount", cart.count());

      this.addConfirmation = true;
      setTimeout(() => {
        this.addConfirmation = false;
      }, 3000);
    },
  },
};
</script>
  
<style>
</style>