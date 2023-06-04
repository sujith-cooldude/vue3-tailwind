<template>
  <APPHeader />
  <div class="w-full flex">
    <div class="m-auto">
      <!-- <MarvelHeros /> -->
      <CalendarComponent />
    </div>
</div>
</template>

<script>
import APPHeader from './components/AppHeader.vue';
import CalendarComponent from './components/CalendarComponent.vue';
// import MarvelHeros from './components/MarvelHeros.vue';
export default {
  components:{APPHeader, CalendarComponent},
}
</script>

<style>

</style>