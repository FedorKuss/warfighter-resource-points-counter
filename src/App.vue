<template>
  <div class="button-bar">
    <button class="btn btn--add" @click="() => { addItem(); show = !show }">+ Add Soldier</button>
    <button class="btn btn--restart" @click="restart">X Restart</button>
  </div>

<TransitionGroup name="fade" tag="div">
  <soldierBlock
    v-for="item in items"
    :key="item.id"
    :data="item"
    :number="item.id"
    class="font-base"
    @removeItem="removeItem(item.id)"
  />
</TransitionGroup>

  <table>
    <tbody>
    <tr>
        <td colspan="4">&nbsp;</td>
      </tr> 
      <tr>
        <td colspan="3"><strong>Resources:</strong></td>
        <td><input type="number" v-zero-clear v-model="resources"/></td>
      </tr>  
      <tr>
        <td colspan="3"><strong>RP left:</strong></td>
        <td><strong>{{ totalLeft }}</strong></td>
      </tr>       
      <tr>
        <td colspan="3"><strong>RP spent:</strong></td>
        <td><strong>{{ total }}</strong></td>
      </tr>         
    </tbody>
  </table>
<br/>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import soldierBlock from './soldierTable.vue'

const show = ref(false)

let idCounter = 1;
const items = ref([]);
let resources = ref(0);

const addItem = () => {
  items.value.push({
    id: idCounter++,
    soldier: 0,
    gun: 0,
    equipment: 0,
    skill: 0
  })
}

const restart = () => {
  items.value = [],
  idCounter = 1;
}

const removeItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id)
}

const total = computed(() =>
  items.value.reduce((sum, item) =>
    sum + Number(item.soldier) + Number(item.gun) + Number(item.equipment) + Number(item.skill), 0
  )
)

const  totalLeft = computed(() => resources.value - total.value );

</script>
