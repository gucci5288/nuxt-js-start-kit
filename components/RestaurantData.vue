<template>
  <div class="m-4">
    <div
      class="h-24 w-36 shadow bg-cover bg-center rounded-lg"
      :style="{ backgroundImage:`url(${restaurant.image_url})` }"
    >
      <div class="text-white">heart</div>
    </div>
    <div class="mt-2 text-sm text-gray-800 font-bold">{{ restaurant.alias }}</div>
    <div class="text-xs text-gray-500">{{ restaurant.name }}</div>
    <div class="text-xs text-gray-500">Rating : {{ restaurant.rating }}</div>
    <div class="text-xs text-gray-500">Price : {{ restaurant.price || 'Free' }}</div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantData',
  props: {
    restaurant: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>
