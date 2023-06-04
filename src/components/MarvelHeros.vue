<template>
  <h1 class="text-2xl text-center">Marvel Heros {{ herosCount }}</h1>
      <ul>
        <li class="flex justify-between" v-for="(hero, index) in MarvelHeros" :key="hero">
          <div>
            {{ hero.name }}
          </div>
          <button @click="removeHero(index)">X</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input class="border-rounded" v-model="newHero" placeholder="Type Hero name here" />
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
      </form>
</template>

<script>
export default {
    computed:{
    herosCount(){
      return this.MarvelHeros.length;
    }
  },
  methods:{
    addHero(){
      // if(this.newHero != ""){}
      this.MarvelHeros.push({name: this.newHero})
      this.newHero = ""
    },
    removeHero(index){
      this.MarvelHeros = this.MarvelHeros.filter(
        (hero, i) => i !== index
      )
    }
  },
  data(){
    return{
      newHero: "",
      MarvelHeros: [
        {name: "Iron Man"},
        {name: "Ant Man"},
        {name: "Spider Man"},
        {name: "Hulk"}
      ]
    }
  }
}
</script>

<style>

</style>