<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-Useable Modal</h1>
      <ModalComponent v-if="isModal1Open" @close="isModal1Open = false">
        <template #title> Modal 1 </template>
        <template #body>
          <p>This is the body slot for the modal 1</p>
        </template>
      </ModalComponent>
      <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal1Open = true">Modal 1</button>
      <ModalComponent v-if="isModal2Open" @close="isModal2Open = false">
        <template #title> Modal 2 </template>
        <template #body>
          <p>This is the body slot for the modal 2</p>
        </template>
      </ModalComponent>
      <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal2Open = true">Modal 2</button>
    </div>
  </section>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
import { ref } from "vue";
export default {
  components: { ModalComponent },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return { isModal1Open, isModal2Open };
  },
};
</script>

<style>
</style>