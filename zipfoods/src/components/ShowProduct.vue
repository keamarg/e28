<template>
  <div class="show-product">
    <div class="name">{{ product.name }}</div>
    <img class="thumb" v-bind:src="imgSrc" />
    <div v-if="!editProduct">
      <div v-if="showProductDetails()" class="price">${{ product.price }}</div>
      <p v-if="showProductDetails()" class="description">
        {{ product.description }}
      </p>
      <button v-if="showProductDetails()" v-on:click="editProduct = true">
        Edit product
      </button>
    </div>
    <product-edit-page
      v-if="editProduct"
      v-bind:product="product"
    ></product-edit-page>
    <button v-if="editProduct == true" v-on:click="editProduct = false">
      Back to product
    </button>
  </div>
</template>

<script>
import ProductEditPage from "./pages/ProductEditPage.vue";
export default {
  components: { ProductEditPage },
  props: {
    product: {
      type: Object,
    },
    detailed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      editProduct: false,
    };
  },
  methods: {
    showProductDetails() {
      return this.$route.fullPath !== "/products";
    },
  },
  computed: {
    imgSrc() {
      try {
        return require("@/assets/images/products/" + this.product.id + ".jpg");
      } catch (e) {
        return require("@/assets/images/products/image-not-available.jpg");
      }
    },
  },
};
</script>

<style scoped>
.show-product {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 30%;
  min-width: 300px;
}

.name {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  width: 75%;
  max-width: 300px;
  border-radius: var(--radius);
}

.description {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}

.price {
  font-family: var(--serif-font);
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
}
</style>