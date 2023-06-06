<script setup>
import { useFilter } from './useFilter'
import { useSort } from './useSort'

const props = defineProps({
  entities: {
    type: Array,
    required: true
  }
})

const tableHeads = [
  { head: 'id', headTitle: 'ID', isSortable: true },
  { head: 'user', headTitle: 'Пользователь', isSortable: false },
  { head: 'balance', headTitle: 'Баланс', isSortable: true }
]

const {
  titleBalanceDirection,
  filteredEntities,
  onChangeBalanceDirection
} = useFilter(props.entities)

const {
  titleSortState,
  sortedEntities,
  onChangeSort
} = useSort(filteredEntities)
</script>

<template>
  <div class="demo">
    <h1 class="green">Демо umschool</h1>

    <div class="filter">
      Показан баланс: {{ titleBalanceDirection }}
      [ <a @click.stop="onChangeBalanceDirection">Изменить</a> ]
    </div>

    <div>
      {{ titleSortState }}
    </div>

    <table>
      <thead>
        <tr>
          <th
            v-for="(tableHead, index) of tableHeads"
            :key="`th-index-${index}`"
          >
            {{ tableHead.headTitle }}
            <a
              v-if="tableHead.isSortable"
              @click.stop="onChangeSort(tableHead.head)"
              class="sorter"
            >Сортировать</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="entity of sortedEntities"
          :key="`td-index-${entity.id}`"
        >
          <td>{{ entity.id }}</td>
          <td>{{ entity.user }}</td>
          <td>{{ entity.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.demo {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 1.6rem;
}

table {
  margin-top: 15px;
  width: 100%;
}
table th {
  font-weight: bold;
}
table th, table td {
  border: 1px solid #c0c0c0;
  padding: 5px 20px;
}

.sorter {
  margin-left: 15px;
  font-size: 14px;
  cursor: pointer;
}

.filter a {
  cursor: pointer;
}
</style>
