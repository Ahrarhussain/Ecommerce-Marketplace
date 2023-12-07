<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product">
                    <ProductComponent :product="product"/>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const products = [
    {id:1, title: "Title1", description: "Description1", url: "http://picsum.photos/id/7/800/800", price:999},
    {id:2, title: "Title1", description: "Description1", url: "http://picsum.photos/id/71/800/800", price:929},
    {id:3, title: "Title1", description: "Description1", url: "http://picsum.photos/id/72/800/800", price:9923},
    {id:4, title: "Title1", description: "Description1", url: "http://picsum.photos/id/73/800/800", price:299},
    {id:5, title: "Title1", description: "Description1", url: "http://picsum.photos/id/74/800/800", price:9429},
    {id:6, title: "Title1", description: "Description1", url: "http://picsum.photos/id/75/800/800", price:9229},
    {id:7, title: "Title1", description: "Description1", url: "http://picsum.photos/id/76/800/800", price:99239},
    {id:8, title: "Title1", description: "Description1", url: "http://picsum.photos/id/88/800/800", price:299},
    {id:9, title: "Title1", description: "Description1", url: "http://picsum.photos/id/79/800/800", price:9429},
    {id:10, title: "Title1", description: "Description1", url: "http://picsum.photos/id/87/800/800", price:9229}
]
</script>