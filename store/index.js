export const state = () => ({
  counter: 0,
  // TODO test if logged in.
  authenticated: true
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
