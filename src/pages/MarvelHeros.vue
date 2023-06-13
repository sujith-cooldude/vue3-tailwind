<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Marvel Heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in MarvelHeros"
        :key="hero"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHero(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border-rounded"
        v-model="newHero"
        placeholder="Type Hero name here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
export default {
  setup() {
    const newHero = ref("");
    const newHeroRef = ref("");
    const MarvelHeros = ref([
      { name: "Iron Man" },
      { name: "Ant Man" },
      { name: "Spider Man" },
      { name: "Hulk" },
    ]);
    onMounted(()=>{
      newHeroRef.value.focus();
    })

    function addHero() {
      MarvelHeros.value.push({ name: newHero.value });
      newHero.value = "";
    }

    function removeHero(index) {
      MarvelHeros.value = MarvelHeros.value.filter((hero, i) => i !== index);
    }
    
    const herosCount = computed ({
      get: () => MarvelHeros.value.length
    });
    return { MarvelHeros, newHero, addHero, removeHero, newHeroRef, herosCount };
  },
  computed: {
    
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  },
  methods: {},
};
</script>

<style>
</style>