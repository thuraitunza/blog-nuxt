<template>
  <div class="container mx-auto w-1/2 py-8">
    <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm text-red-600">
        <li v-for="(error, index) in errors" :key="index">
            {{ error }}
        </li>
    </ul>
    <form action="" @submit.prevent="createPost">
      <div class="mb-3">
        <label for="title" calss="block font-semibold">Title</label>
        <input
          type="text"
          v-model="title"
          id="title"
          class="shadow w-full py-2 px-2 rounded-md mt-2"
        />
      </div>
      <div class="mb-3">
        <label for="body" calss="block font-semibold">Body</label>
        <textarea
          name="body"
          id="body"
          v-model="body"
          cols="30"
          rows="10"
          class="w-full shadow w-full py-2 px-2 rounded-md mt-2"
        ></textarea>
      </div>
      <Button>Create Post</Button>

      <span v-show="isLoading">Loading...</span>

    </form>
  </div>
</template>

<script setup>
const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])
const router = useRouter()

async function createPost() {
    isLoading.value = true
    try {
    const post = await useNuxtApp().$apiFetch(`/api/posts/`, {
        method: 'POST',
        body: {
            title: title.value,
            body: body.value,
        }
    });

    isLoading.value = false

    title.value = '',
    body.value = '',

    alert('creating post')

    router.push('/')
    } catch(err) {
        console.log(err.data)
        errors.value = Object.values(err.data.errors).flat()
        isLoading.value = false
    }
}
</script>

<style scoped>
</style>
