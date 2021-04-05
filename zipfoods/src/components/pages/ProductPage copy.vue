<template>
  <div id="product-page">
    <h1>product:{{ id }}</h1>
    <h2>name:{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>
  
<style>
</style>