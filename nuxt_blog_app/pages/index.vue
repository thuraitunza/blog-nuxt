<template>
    <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">   
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script setup>
    // const {data:posts} = await useFetch('/api/posts', {
    //     baseURL: 'http://nuxt-3-blog-laravel.test'
    // })
    
    // const nuxtApp = useNuxtApp();
    // console.log(nuxtApp.$hello('Tutorial'));

    const posts = await useNuxtApp().$apiFetch('/api/posts');
</script>

<style lang="scss" scoped>

</style>