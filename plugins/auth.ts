export default defineNuxtPlugin(() => {
    // addRouteMiddleware('global-test', () => {
    //   console.log('this global middleware was added in a plugin and will be run on every route change')
    // }, { global: true })
    addRouteMiddleware('auth', () => {
      // console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
      const { $auth } = useNuxtApp()
      // console.log($auth);
      if(!$auth?.currentUser?.uid){
       return abortNavigation()
      }
      return navigateTo("/")
      // if(!$auth?.currentUser?.uid){
      //     abortNavigation()
      //   }
    })
  })