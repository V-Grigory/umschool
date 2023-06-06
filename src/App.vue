<script setup>
import { ref } from 'vue'
import EntitiesList from './components/EntitiesList.vue'

// const entities = ref([])
// entities.value = [
//   { id: 1, user: 'user 1', balance: 123 },
//   { id: 11, user: 'user 11', balance: -555 },
//   { id: 2, user: 'user 2', balance: 777 },
//   { id: 22, user: 'user 22', balance: -100 },
//   { id: 34, user: 'user 34', balance: 987 },
//   { id: 55, user: 'user 55', balance: 340 },
//   { id: 60, user: 'user 60', balance: -50 }
// ]

const entities = [
  { id: 1, user: 'user 1', balance: 123 },
  { id: 11, user: 'user 11', balance: -555 },
  { id: 2, user: 'user 2', balance: 777 },
  { id: 34, user: 'user 22', balance: -100 },
  { id: 22, user: 'user 34', balance: 987 },
  { id: 60, user: 'user 55', balance: 340 },
  { id: 55, user: 'user 60', balance: -50 }
]
</script>

<template>
  <EntitiesList :entities="entities" />
</template>
