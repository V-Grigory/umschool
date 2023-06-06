import { computed, ref } from 'vue'

const balanceDirections = {
  all: 'Весь',
  onlyPositive: 'Только положительный',
  onlyNegative: 'Только отрицательный'
}

export function useFilter(entities) {
  const balanceDirection = ref('all')

  const titleBalanceDirection = computed(() => {
    return balanceDirections[balanceDirection.value]
  })

  const filteredEntities = computed(() => {
    return balanceDirection.value === 'all'
      ? entities
      : balanceDirection.value === 'onlyPositive'
        ? entities.filter(entity => entity.balance >= 0)
        : entities.filter(entity => entity.balance < 0)
  })
  const onChangeBalanceDirection = () => {
    if (balanceDirection.value === 'all') {
      balanceDirection.value = 'onlyPositive'
      return
    }
    if (balanceDirection.value === 'onlyPositive') {
      balanceDirection.value = 'onlyNegative'
      return
    }
    balanceDirection.value = 'all'
  }

  return {
    titleBalanceDirection,
    filteredEntities,
    onChangeBalanceDirection
  }
}