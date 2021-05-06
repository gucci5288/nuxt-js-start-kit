<template>
  <div>
    <div>Books</div>
    <div>{{ book }}</div>
    <div>{{ slug }}</div>
    <div v-for="(post, postIdx) in posts" :key="postIdx">
      {{ post }}
    </div>
    <div>{{ res }}</div>
    <div>restaurant:</div>
    <div>{{ restaurant }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData ({
    params,
    $apiYelp
  }) {
    // eslint-disable-next-line no-console
    console.log('asyncData hook')
    const restaurant = await $apiYelp.$get('/restaurant/businesses/WavvLdfdP6g8aZTtbBQHTw')
      .then(res => res).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

    const slug = params.slug
    const book = params.book
    return {
      restaurant,
      slug,
      book
    }
  },
  data () {
    return {
      posts: [],
      // business: {},
      res: null
    }
  },
  // eslint-disable-next-line require-await
  async fetch ({ $axios }) {
    // eslint-disable-next-line no-console
    console.log('fetch hook')
    // this.res = await $axios.$get('/business/businesses/WavvLdfdP6g8aZTtbBQHTw')
    //   .then((res) => {
    //     console.log('business res=>', res)
    //     this.business = res
    //     return res
    //   }).catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.log(error)
    //   })
  }
}
</script>

<style scoped>

</style>
