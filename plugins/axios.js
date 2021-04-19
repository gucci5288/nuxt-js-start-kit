export default function ({
  $axios,
  redirect
}) {
  $axios.onRequest((config) => {
    // const APIToken = process.env.YELP_API_KEY
    // config.headers.common.Authorization = `Bearer ${APIToken}`
  })
  $axios.onError((error) => {
    // eslint-disable-next-line no-console
    console.log('$axios onError', error)
  })
}
