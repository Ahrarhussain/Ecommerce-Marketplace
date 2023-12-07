<template>
    <MainLayout>
        <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img 
                        v-if="currentImage"
                        class="rounded-lg object-fit"
                        :src="currentImage"
                        alt="current image"
                    >
                    <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                        <div v-for="image in images">
                            <img 
                                @mouseover="currentImage = image"
                                @click="currentImage = image"
                                width="70"
                                class="rounded-md object-fit border-[3px] cursor-pointer"
                                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                                :src="image"
                                alt="mini image"
                            >
                        </div>
                    </div>
                </div>
                <div class="md:w-[60%] bg-white p-3 rounded-lg">
                    <div v-if="product && product.data">
                        <p class="mb-2">{{ product.data.title }}</p>
                        <p class="font-light text-[12px] mb-2">{{ product.data.description }}</p>
                    </div>

                    <div class="flex items-center pt-1.5">
                        <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
                            <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12"/>
                        </span>
                        <p class="text-[#FF5353]">Extra 5% off</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

let currentImage = ref(null)

onMounted(() => {
    watchEffect(() => {
        currentImage.value = 'https://picsum.photos/id/77/800/800'
        images.value[0] = 'https://picsum.photos/id/77/800/800'
    })
})



const images = ref([
    '',
    'https://picsum.photos/id/212/800/800',
    'https://picsum.photos/id/233/800/800',
    'https://picsum.photos/id/165/800/800',
    'https://picsum.photos/id/99/800/800',
    'https://picsum.photos/id/144/800/800',
])

</script>
