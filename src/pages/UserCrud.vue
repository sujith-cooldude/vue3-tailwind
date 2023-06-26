<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          Add User
        </button>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user._id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="60"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2"><button class="px-2 py-1 bg-red-600 rounded text-white" @click="destroy(user._id)">Delete</button></td>
              <td class="border px-4 py-2"><button class="px-2 py-1 bg-green-600 rounded text-white" @click="update(user),isModalOpen = true">Update</button></td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="border rounded px-3 py-2"
            @click="previous"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : ''"
          >
            Prev
          </button>
          <button
            class="border rounded px-3 py-2"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages ? 'bg-gray-100' : ''
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
  <teleport to="body">
    <ModalComponent v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>Name</label>
            <input
              class="w-full p-2 border rounded"
              placeholder="User Name"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="w-full p-2 border rounded"
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 border rounded"
              placeholder="Avatar Url"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 border rounded bg-gray-100 hover:bg-gray-300"
              type="submit"
              value="create"
            />
          </div>
        </form>
      </template>
    </ModalComponent>
  </teleport>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "../plugins/axios.js";
import ModalComponent from "../components/ModalComponent";

export default {
  components: { ModalComponent },
  setup() {
    const state = reactive({
      users: [],
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });
    const isModalOpen = ref(false);
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    async function previous() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    async function submit() {
      const { data } = await axios.post("/users", state.form);
      state.users.push(data);
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }
    async function destroy(id){
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter(user => user._id !== id);
    }
    async function update(data){
      state.form.name = data.name;
      state.form.email = data.email;
      state.form.avatar = data.avatar;
      state.users.forEach(user=>{
        if(user._id === data._id){
          user.name = state.form.name;
          user.email = state.form.email;
          user.avatar = state.form.avatar;
        }
      })
    }
    return { state, next, previous, isModalOpen, submit, destroy, update };
  },
};
</script>

<style>
</style>