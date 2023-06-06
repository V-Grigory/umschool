import {computed, reactive } from 'vue'

export function useSort(entities) {
  const sortState = reactive({
    field: 'id',
    direction: 'none'
  })

  const titleSortState = computed(() => {
    return sortState.direction === 'none'
      ? 'Без сортировки'
      : `Сортировка по полю: ${sortState.field}, направление: ${sortState.direction}`
  })

  const sortedEntities = computed(() => {
    const sortByField = (field, direction) => {
      return direction === 'asc'
        ? (a, b) => a[field] > b[field] ? 1 : -1
        : (a, b) => a[field] > b[field] ? -1 : 1
    }

    const copyEntities = [ ...entities.value ]

    return sortState.direction === 'none'
      ? copyEntities
      : copyEntities.sort(sortByField(sortState.field, sortState.direction))
  })

  const onChangeSort = head => {
    sortState.field = head

    if (sortState.direction === 'none') {
      sortState.direction = 'asc'
      return
    }
    if (sortState.direction === 'asc') {
      sortState.direction = 'desc'
      return
    }
    sortState.direction = 'none'
  }

  return {
    titleSortState,
    sortedEntities,
    onChangeSort
  }
}