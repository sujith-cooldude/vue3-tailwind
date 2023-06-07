<template>
  <div class="flex flex-wrap w-full">
    <div v-for="(color, index) in colors" :key="color" class="absolute w-full">
     <div v-if="currentSlide == index" :class="color" style="height: 350px"></div>          
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      colors: ["bg-blue-600","bg-yellow-600","bg-teal-600"]
    };
  },
  mounted() {
    this.interval = setInterval(() => {
        this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide +1;
    }, 2000);
  },
  beforeUnmount(){
    clearInterval(this.interval)
  }
};
</script>

<style>
</style>