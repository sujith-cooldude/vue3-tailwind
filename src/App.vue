<template>
  <APPHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import firebase from './utilities/firebase';
import APPHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {}
      }
    });
  },
  components: { APPHeader, LoginModal },
};
</script>

<style>
</style>