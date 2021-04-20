<template>
  <div class="ml-4" :class="{ 'last': isLast }">
    <div
      class="h-36 w-56 shadow bg-cover bg-center rounded-lg flex"
      :style="{ backgroundImage:`url(${business.image_url})` }"
    >
      <div class="ml-auto mr-2 mt-2">
        <img class="h-4 w-4 text-white" src="~/assets/like.svg"/>
      </div>
    </div>
    <div class="mt-2 text-sm text-gray-800 font-bold">{{ business.alias }}</div>
    <div class="text-xs text-gray-500">{{ business.name }}</div>

    <div class="flex">
      <div class="text-xs text-yellow-400">Rating : {{ business.rating }}</div>
      <div class="ml-2 text-xs text-green-800">Price : {{ business.price || 'Free' }}</div>
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="(category, cIdx) in business.categories"
        :key="cIdx"
        class="text-xs text-gray-800 pr-2"
      >
        {{ category.title }},
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessData',
  props: {
    business: {
      type: Object,
      default: () => {
      }
    },
    isLast: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.last {
  @apply pr-4
}
</style>
