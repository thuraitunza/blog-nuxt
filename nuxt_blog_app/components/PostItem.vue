<template>
    <div class="post-container py-8">
        <h3 class="text-3xl font-bold">
            <nuxt-link :to="`posts/${props.post.id}`">{{ props.post.title }}</nuxt-link> 
        </h3>
        <div class="post-meta text-gray-700  items-center space-x-2">
            <div>{{ format(new Date(props.post.created_at), 'MMMM dd, yyyy') }}</div>
            <!-- <div>&middot;</div> -->
            <div class="">Created By: <span class="font-bold text-teal-500">{{ props.post.user.name }}</span></div>
            <div class="post-review leading-relaxed mt-5">{{ props.post.body }}</div>
            <div class="mt-5">
                <nuxt-link :to="`posts/${props.post.id}`" class="">
                    <Button>Read More</Button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {format} from 'date-fns'

    const props = defineProps({
        post: Object,
    })
</script>

<style lang="scss" scoped>

</style>