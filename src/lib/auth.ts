
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config'

export async function signup(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export async function signin(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}



export async function logout() {
  await auth.signOut()
}