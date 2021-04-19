export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const APIToken = process.env.YELP_API_KEY
  const api = $axios.create({
    headers: {
      common: {
        Authorization: `Bearer ${APIToken}`
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('https://my_api.com')

  // Inject to context as apiYelp
  inject('apiYelp', api)
}
