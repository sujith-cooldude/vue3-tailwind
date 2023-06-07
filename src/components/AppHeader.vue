<template>
<nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2">
    <router-link v-for="url in list" class="text-white mx-2" :key="url" :to="url.to">
        {{ url.title }}
    </router-link>
    <button class="text-white mx-2" @click="$emit('open-login-modal')">Login</button>
</nav>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {title:'Marvel Heros',to:"/marvel-heros"},
                {title:'Calendar',to:"/calendar"},
                {title:'Markdown',to:"/markdown"},
                {title:'Slider Carousel',to:"/slider"},
            ]
        }
    }
}
</script>

<style>

</style>