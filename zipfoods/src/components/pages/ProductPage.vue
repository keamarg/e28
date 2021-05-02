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
      <button v-on:click="addToCart">Add to cart</button><br />
      <button v-if="user && !isFavorite" v-on:click="addToFavorites">
        Add to favorites
      </button>
      <button v-if="user && isFavorite" v-on:click="removeFromFavorites">
        Remove from favorites
      </button>
      <transition name="fade">
        <div v-if="addConfirmation" class="alert">
          {{ product.name }} was added to your cart!
        </div>
      </transition>
      <transition name="fade">
        <div v-if="favoriteConfirmation" class="alert">
          {{ product.name }} was added to your favorites!
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { cart } from "@/common/app.js";
import { axios } from "@/common/app.js";

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
    favorites() {
      return this.$store.state.favorites;
    },
    favoriteData() {
      return {
        product_id: this.product.id,
        user_id: this.$store.state.user.id,
      };
    },
    isFavorite() {
      console.log("length: " + this.favorites.length);
      console.log(this.favorites[1]);
      return true;
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
    addToFavorites() {
      axios.post("favorite", this.favoriteData).then((response) => {
        this.$store.commit("setFavorites", response.data.favorite);
        this.favoriteConfirmation = true;
      });
    },
    removeFromFavorites() {
      console.log(this.product.id);
      console.log(this.favorites.user_id);
      axios.delete("favorite/" + this.product.id).then((response) => {
        if (response.data.errors) {
          console.log("errors: " + this.errors);
          this.errors = Object.values(response.data.errors)[0][0];
          this.showConfirmation = false;
        } else {
          this.showDeleteConfirmation = true;
          // setTimeout(() => {
          //   this.$store.dispatch("fetchProducts");
          //   this.$router.push("/products");
          // }, 2000);
        }
      });
    },
  },
};
</script>
  
<style>
</style>