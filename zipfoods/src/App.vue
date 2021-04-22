<template>
  <div>
    <img
      alt="ZipFoods logo"
      id="logo"
      src="@/assets/images/zipfoods-logo.png"
    />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
          >
            <span v-if="link == 'cart'">({{ store.cartCount }})</span>

            {{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:products="products"
      v-on:update-products="loadProducts"
    ></router-view>
  </div>
</template>

<script>
import { axios, store } from "@/common/app.js";
export default {
  name: "App",
  data() {
    return {
      store: store,
      products: [],
      /* Store links in an array to maintain order */
      links: ["home", "products", "categories", "new", "cart"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
        new: "/product/new",
        cart: "/cart",
      },
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios.get("product").then((response) => {
        this.products = response.data.product;
      });
    },
  },
};
</script>

<style src='@/assets/css/zipfoods.css'></style>
<style>
</style>
