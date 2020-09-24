import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCoOaNacp_A-2qON92ZPZFFqKzPOUQaHHY",
    authDomain: "crwn-db-2d8a4.firebaseapp.com",
    databaseURL: "https://crwn-db-2d8a4.firebaseio.com",
    projectId: "crwn-db-2d8a4",
    storageBucket: "",
    messagingSenderId: "842515286839",
    appId: "1:842515286839:web:33dbcd33b3499d65"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error) {
      console.log('error creating users', error.message)
    }

  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;