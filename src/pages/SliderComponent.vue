<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in colors" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="w-full absolute bottom-0 flex justify-center">
        <div
          v-for="(item, index) in colors"
          :key="item"
          @click="makeActive(index)"
          class="mx-2 w-4 h-4 rounded-full cursor-pointer shadow-md"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          class="px-2 rounded border"
          @click="isTitleShowing = !isTitleShowing"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      colors: ["bg-blue-600", "bg-yellow-600", "bg-teal-600"],
      isTitleShowing: true,
    };
  },
  methods:{
    makeActive(index){
        this.currentSlide = index;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>