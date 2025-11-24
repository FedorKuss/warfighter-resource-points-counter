<script setup lang='ts'>
const props = defineProps(['data', 'number'])
const emit = defineEmits(['removeItem'])
</script>

<template>
  <div class="soldier-wrap">
    <h3>Soldier {{ number }}</h3>
    <div class="flex-table">
      <div class="flex-row">
        <div class="flex-cell">
          <div class="cell-label">Soldier RP</div>
          <input type="number" v-zero-clear v-model.number="data.soldier" />
        </div>
        <div class="flex-cell">
          <div class="cell-label">Gun RP</div>
          <input type="number" v-zero-clear v-model.number="data.gun" />
        </div>
        <div class="flex-cell">
          <div class="cell-label">Equipment RP</div>
          <input type="number" v-zero-clear v-model.number="data.equipment" />
        </div>
        <div class="flex-cell">
          <div class="cell-label">Skill RP</div>
          <input type="number" v-zero-clear v-model.number="data.skill" />
        </div>
        <div class="flex-cell">
          <button @click="emit('removeItem')">Soldier downed</button>
        </div>
      </div>
    </div>
  </div>
</template>
