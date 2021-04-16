export default function ({ store, redirect }) {
  console.log('middleware', store)
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
