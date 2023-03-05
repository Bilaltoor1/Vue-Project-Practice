<template>
  <div class="container">
    <div class="card">
      <div class="card-category">
        {{data.category}}
      </div>
      <div class="card-heading">
        {{data.name}}
      </div>
      <div class="card-description">
      {{data.description}}
      </div>
      <div class="card-price">
        {{ data.price }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['data']);
</script>
<style scoped>
.container {
  max-width: 300px;
  height: 300px;
  background-color: #0000001a;
  border-radius: 5px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 2rem 2rem 3rem;
  text-align: justify;
}

.card-category {
  background-color: lawngreen;
  color: white;
  padding: 3px 12px;
  border-radius: 50px;
}

.card-heading{
  font-size: 1rem;
  color: #f06a00;
  margin-bottom:1rem;
  margin-top: .5rem;
}

.card-description {
  color: black;
  font-size: .8rem;
}
.card-price{
  width: 100%;
  background-color: #f06a00;
  color: white;
  text-align: center;
  margin-top: 10px;
}
</style>