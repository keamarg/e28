<template>
  <div id="products-page">
    <h2>Products</h2>
    <!-- <button v-on:click="deleteAllProducts">Delete all products</button> -->

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
// import { axios } from "@/common/app.js";

export default {
  components: { "show-product": ShowProduct },
  props: {},
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  //   methods: {
  //     deleteAllProducts() {
  //       this.products.forEach(this.deleteProduct);
  //     },
  //     deleteProduct(item, index) {
  //       axios.delete("/product/" + index).then((response) => {
  //         if (response.data.errors) {
  //           console.log("nope");
  //           this.errors = Object.values(response.data.errors)[0][0];
  //           this.showConfirmation = false;
  //         } else {
  //           this.$emit("update-products");
  //           this.showConfirmation = true;
  //         }
  //       });
  //     },
  //   },
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