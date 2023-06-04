<template>
  <APPHeader />
  <div class="w-full flex">
    <div class="m-auto">
      <MarvelHeros />
    </div>
</div>
</template>

<script>
import APPHeader from './components/AppHeader.vue';
import MarvelHeros from './components/MarvelHeros.vue';
export default {
  components:{APPHeader, MarvelHeros},
}
</script>

<style>

</style>