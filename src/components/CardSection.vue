<template>
  <div class="card-heading">
    There is Your All Cards
  </div>
  <div class="card-section">
    <Card v-for="data in SourceData" :key="data.id" :data="data" class="align-card"/>
  </div>
</template>
<script setup>
import {useStore} from "@/store/pinia";

const store = useStore();
const SourceData = store.getValue
import Card from './Card'
</script>
<style scoped>
.card-section {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  padding: 2rem;
}

.card-heading {
  color: black;
  font-size: 2rem;
  text-align: center;
}
.align-card{
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>