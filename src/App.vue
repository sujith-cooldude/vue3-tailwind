<template>
  <APPHeader />
  <div class="w-full flex">
      <router-view></router-view>
</div>
</template>

<script>
import APPHeader from './components/AppHeader.vue';
export default {
  components:{APPHeader},
}
</script>

<style>

</style>