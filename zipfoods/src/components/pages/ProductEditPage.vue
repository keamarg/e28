<template>
  <div>
    <h2>Edit product</h2>
    <div id="inputs">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="updatedProduct.name" />

      <label for="sku">SKU:</label>
      <input type="text" id="sku" v-model="updatedProduct.sku" />

      <label for="price">Price:</label>
      <input
        type="text"
        id="price"
        v-model="updatedProduct.price"
        placeholder="Required must be a number."
      />

      <label for="available">Quantity available:</label>
      <input
        type="text"
        id="available"
        v-model="updatedProduct.available"
        placeholder="Required must be a number."
      />

      <label for="weight">Weight (in lbs):</label>
      <input
        type="text"
        id="weight"
        v-model="updatedProduct.weight"
        placeholder="Required must be a number."
      />

      <label for="perishable" class="form-checkbox-label">
        <input
          type="checkbox"
          v-model="updatedProduct.perishable"
          id="perishable"
        />
        Perishable?
      </label>

      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="updatedProduct.description"
        placeholder="Required min. 100 letters"
      ></textarea>

      <label for="categories">Choose a category:</label>
      <select v-model="updatedProduct.categories">
        <option>{{ product.categories }}</option>
        <option value="produce">Produce</option>
        <option value="snacks">Snacks</option>
        <option value="breakfast">Breakfast</option>
        <option value="candy">Candy</option>
      </select>
    </div>
    <button v-on:click="updateProduct">Update product</button>
    <div id="addsucceed" v-if="showConfirmation">Your product was updated</div>
    <div id="addfail" v-if="!showConfirmation">{{ errors }}</div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      showConfirmation: false,
      errors: null,
      updatedProduct: {
        name: "",
        sku: "",
        price: null,
        available: null,
        weight: null,
        perishable: false,
        description: "",
        categories: "None",
      },
    };
  },
  mounted() {
    this.updatedProduct = this.product;
  },
  methods: {
    updateProduct() {
      axios
        .put("/product/" + this.product.id, this.updatedProduct)
        .then((response) => {
          if (response.data.errors) {
            this.errors = Object.values(response.data.errors)[0][0];
            this.showConfirmation = false;
          } else {
            this.$emit("update-products");
            this.showConfirmation = true;
          }
        });
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