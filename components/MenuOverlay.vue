<template>
    <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
        <div class="flex items-center justify-between py-5">
            <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
                <img 
                    width="170"
                    src="/AliExpress-logo.png"
                    alt="AliExpress"
                >
            </NuxtLink>

            <button 
                @click="userStore.isMenuOverlay = false"
                class="rounded-full p-1 hover:bg-gray-200"
            >
                <Icon name="mdi:close" size="30"/>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

// const client = useSupabaseClient()
// const user = useSupabaseUser()

const goTo = (url) => {
    userStore.isMenuOverlay = false
    return navigateTo(`/${url}`)
}

const signOut = () => {
    client.auth.signOut()
    userStore.isMenuOverlay = false
    return navigateTo('/')
}

const signIn = () => {
    userStore.isMenuOverlay = false
    return navigateTo('/auth')
}
</script>