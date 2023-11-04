<template>
    <div class="bg-gray-100 min-h-screen text-gray-900">
        <Title>{{ title }}</Title>
        <nav class="bg-white shadow text-lg px-6 py-6 sticky top-0 z-50">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div>
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <div>
                    <ul class="flex space-x-12">    
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/create">Create</nuxt-link></li>
                        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <slot></slot>

    </div>
</template>

<script setup>

// const title = 'Nuxt 3 Blog App'

const title = useState('title', () => 'Nuxt 3 Blog App')

</script>

<style lang="scss" scoped>

.router-link-active{
    font-weight: bold;
}



</style>