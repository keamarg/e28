<template>
  <div>
    <h2>Add a Product</h2>
    <div id="inputs">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model="product.name"
        placeholder="Required 3-100 letters"
      />

      <label for="sku">SKU:</label>
      <input
        type="text"
        id="sku"
        v-model="product.sku"
        placeholder="Required 3-100 letters. Must be unique"
      />

      <label for="price">Price:</label>
      <input
        type="text"
        id="price"
        v-model="product.price"
        placeholder="Required must be a number."
      />

      <label for="available">Quantity available:</label>
      <input
        type="text"
        id="available"
        v-model="product.available"
        placeholder="Required must be a number."
      />

      <label for="weight">Weight (in lbs):</label>
      <input
        type="text"
        id="weight"
        v-model="product.weight"
        placeholder="Required must be a number."
      />

      <label for="perishable" class="form-checkbox-label">
        <input type="checkbox" v-model="product.perishable" id="perishable" />
        Perishable?
      </label>

      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="product.description"
        placeholder="Required min. 100 letters"
      ></textarea>

      <label for="categories">Choose a category:</label>
      <select v-model="product.categories">
        <option>None</option>
        <option value="produce">Produce</option>
        <option value="snacks">Snacks</option>
        <option value="breakfast">Breakfast</option>
        <option value="candy">Candy</option>
      </select>
    </div>

    <button v-on:click="addProduct">Add Product</button>
    <div id="addsucceed" v-if="showConfirmation">Your product was added</div>
    <div id="addfail" v-if="!showConfirmation">{{ errors }}</div>
    <button v-on:click="addTestProduct">Add Test Product</button>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      showConfirmation: false,
      errors: null,
      product: {
        name: "",
        sku: "",
        price: null,
        available: null,
        weight: null,
        perishable: false,
        description: "",
        categories: "None",
      },
      testProduct: {
        name: "Candy Heart Grapes",
        sku: "candy-heart-grapes-" + new Date().valueOf(),
        price: 5.99,
        available: 25,
        weight: 2,
        perishable: true,
        description:
          "Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!",
        categories: "candy",
      },
    };
  },
  methods: {
    addProduct() {
      axios.post("/product", this.product).then((response) => {
        if (response.data.errors) {
          this.errors = Object.values(response.data.errors)[0][0];
          this.showConfirmation = false;
        } else {
          this.$emit("update-products");
          for (const [key] of Object.entries(this.product)) {
            this.product[key] = "";
          }
          this.categories = "none";
          this.showConfirmation = true;
        }
      });
    },

    addTestProduct() {
      this.product.name = this.testProduct.name;
      this.product.sku = this.testProduct.sku;
      this.product.price = this.testProduct.price;
      this.product.available = this.testProduct.available;
      this.product.weight = this.testProduct.weight;
      this.product.perishable = this.testProduct.perishable;
      this.product.description = this.testProduct.description;
      this.product.categories = this.testProduct.categories;
    },
  },
};
</script>

<style scoped>
#inputs {
  text-align: left;
}
#addsucceed {
  color: green;
}
#addfail {
  color: red;
}
</style>