<template>
  <div>
    <div class="m-4">Search : {{ location }}</div>
    <div class="m-4">Popular</div>
    <restaurant-data
      v-for="business in businesses"
      :key="business.id"
      :restaurant="business"
    />
    <div>{{ results }}</div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      location: 'taipei'
    }
  },
  async asyncData ({
    params,
    $apiYelp
  }) {
    // eslint-disable-next-line no-console
    console.log('asyncData hook')
    let businesses = []
    const results = await $apiYelp.$get('/restaurant/businesses/search?location=taipei')
      .then((res) => {
        businesses = res.businesses
        return res
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

    return {
      results,
      businesses
    }
  }
}
</script>

<style scoped>

</style>
