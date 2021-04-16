<template>
  <div>
    <div>Books</div>
    <div>{{ book }}</div>
    <div>{{ slug }}</div>
    <div v-for="(post, postIdx) in posts" :key="postIdx">
      {{ post }}
    </div>

    <div>{{ restaurant }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData ({ params }) {
    // eslint-disable-next-line no-console
    console.log('asyncData hook')
    const slug = params.slug
    const book = params.book
    return {
      slug,
      book
    }
  },
  data () {
    return {
      posts: [],
      restaurant: {}
    }
  },
  // eslint-disable-next-line require-await
  async fetch ({ $axios }) {
    // eslint-disable-next-line no-console
    console.log('fetch hook')
    this.restaurant = await $axios.$get('/restaurant/businesses/WavvLdfdP6g8aZTtbBQHTw')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res', res)
        return res.json()
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
