<template>
  <div id="product-page">
    <h1>product:{{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style>
</style>