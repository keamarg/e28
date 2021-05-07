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
      <button v-on:click="addToCart" data-test="add-to-cart-button">
        Add to cart</button
      ><br />
      <transition name="fade">
        <div v-if="addConfirmation" class="alert">
          {{ product.name }} was added to your cart!
        </div>
      </transition>
      <div v-if="user">
        <button v-if="isFavorite" v-on:click="removeFromFavorites()">
          Remove from favorites
        </button>
        <button v-else v-on:click="addToFavorites()">❤ Add to favorites</button>
      </div>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { cart } from "@/common/app.js";
import { axios } from "@/common/app.js";
import favorite from "@/features/favorite.js";

export default {
  components: { "show-product": ShowProduct },
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const { isFavorite, addToFavorites, removeFromFavorites } = favorite(
      props.id
    );
    return { isFavorite, addToFavorites, removeFromFavorites };
  },
  data() {
    return {
      addConfirmation: false,
      favoriteConfirmation: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
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
    createUser() {
      axios.post("register", this.registrationData).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
  },
};
</script>
  
<style>
</style>