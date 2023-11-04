<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>{{ post.title }} | {{ title }}</Title>
        <NuxtLink to="/" class="flex mb-4">
            <Button>Back</Button>
        </NuxtLink>
        <h3 class="text-3xl font-bold">
            <nuxt-link :to="`posts/1`">{{ post.title }}</nuxt-link> 
        </h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ format(new Date(post.created_at), 'MMMM dd, yyyy') }}</div>
            <div>{{ post.user.name }}</div>
        </div>
    
        <div class="post-content mt-5">
            <p class="text-center">{{ post.body }}</p>
        </div>
    </div>
</template>

<script setup>
    import {format} from 'date-fns'
    
    const title = useState('title')

    const route = useRoute();
   
    const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`);

</script>

<style lang="scss" scoped>

</style>