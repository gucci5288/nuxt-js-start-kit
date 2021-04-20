<template>
  <div>
    <div class="m-4 flex font-bold text-xl">
      <div class="text-gray-800">
        Hello there,
      </div>
      <div class="pl-2 text-green-800">
        User!
      </div>
    </div>

    <div class="w-auto flex justify-between m-4 rounded-lg bg-gray-200 ">
      <input
        v-model="term"
        class="p-2 text-gray-800 rounded-lg bg-gray-200"
        placeholder="Search products..."
      >
      <button class="pr-2" @click="onClickSearch">
        <img class="h-6 w-6" src="~assets/search.svg?inline" alt="search" >
      </button>
    </div>

    <div class="m-4">
      Popular
    </div>
    <div class="flex w-full overflow-x-scroll overflow-x-hidden">
      <business-data
        v-for="(business, idx) in businesses"
        :key="business.id"
        :business="business"
        :is-last="idx === businesses.length -1"
      />
    </div>

    <div class="p-4 text-gray-300">
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  async asyncData ({
    params,
    $apiYelp
  }) {
    // eslint-disable-next-line no-console
    console.log('asyncData hook')
    const categories = await $apiYelp.$get('/yelp/categories')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('categories res', res)
        return res
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

    let businesses = []
    const results = await $apiYelp.$get('/yelp/businesses/search?location=taipei')
      .then((res) => {
        businesses = res.businesses
        return res
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })

    return {
      results,
      businesses,
      categories
    }
  },
  data () {
    return {
      location: 'taipei',
      term: ''
    }
  },
  methods: {
    async onClickSearch () {
      const results = await this.$apiYelp.$get(`/yelp/businesses/search?location=taipei&term=${this.term}`)
        .then((res) => {
          return res.businesses
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // eslint-disable-next-line no-console
      console.log('results', results)
      this.businesses = results
    }
  }
}
</script>

<style scoped>

</style>
