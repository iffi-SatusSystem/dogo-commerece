import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



//Create USer
export const createUser= async (email: string, password: string) =>{
   const auth = getAuth();
   const credentials= await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      return credentials
}
//Sign in user
export const signinUser=async (email: string, password: string) => {
    const auth=getAuth();
   const credentials=await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials
}
//Init user
export const initUser=async () => {
    const auth= getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}
//Signout User
export const signoutUser= async () => {
  const auth= getAuth()
  const result= await auth.signOut()
  return result
}


  