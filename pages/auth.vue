<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/AliExpress-logo.png" alt="AliExpress">
            </NuxtLink>
        </div>

        <div class="max-w-[400px] mx-auto px-2">

            <div class="text-center my-6">Login / Register</div>

            <button 
                @click="login('google')"
                class="
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/google-logo.png" alt="Google">
                <div>Google</div>
            </button>

            <button 
                @click="login('github')"
                class="
                mt-4
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/github-logo.png" alt="Github">
                <div>Github</div>
            </button>

        </div>
    </div>
</template>

<script setup>
// const client = useSupabaseClient()
// const user = useSupabaseUser()

//If user is present I would like to move away from auth page
// watchEffect(() => {
//     if (user.value) {
//         return navigateTo('/')
//     }
// })

//prov is provider is github and google in our case
const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin
  })
}
</script>