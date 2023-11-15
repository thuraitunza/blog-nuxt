// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  //   BASE_URL: process.env.BASE_URL
  // },

  // runtimeConfig: {
  //   // Public keys that are exposed to the client
  //   public: {
  //     apiBase: process.env.BASE_URL
  //   }
  // },

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  
  devtools: { enabled: true },
   modules: ['@nuxtjs/tailwindcss']

})




export default defineEventHandler(async (event) => {
//     const config = useRuntimeConfig()
//     const gMethod = getMethod(event);
//     const paramsUrl = event.context.params._;
//     let formData;
//     if (gMethod === "POST") {
//       formData = await readBody(event);
//     }
//     if (gMethod === "PUT") {
//       formData = await readBody(event);
//     }
   
//     let params = "";
//     let split = "";
//     if (event.req.url.includes("?")) {
//       split = event.req.url.split("?");
//       params = split[1];
//     }
//     let token = getCookie(event, "token");
//     // console.log('token',token);
//     const data = await $fetch(
//       `${config.public.apiBase}/${paramsUrl}?${params}`,
//       {
//         method: gMethod ? gMethod : "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           // "X-API-TOKEN": config.apiSecret,
//           Authorization: token,
//         },
//         body: formData ? formData : null,
//       }
//     );
//     return { data };
//    });

   


//  <script setup>
// definePageMeta({
//   layout: "custom",
// });
// const token = useCookie("token");
// const form = ref({
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
//   token: token,
// });
// const isLoading = ref(false);
// const errors = ref([]);
// const router = useRouter();
// const contact = async () => {
//   const { data, pending, error, refresh } = await useFetch(
//     `api/contacts/create`,
//     {
//       method: "POST",
//       body: form.value,
      
//       onResponseError({ request, response, options }) {
//         console.log('gg',response)
//     // Handle the response errors
//   }
//     }
    
//   );
// };
// </script> 

