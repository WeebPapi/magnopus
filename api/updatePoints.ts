import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import { getPoints } from "./getPoints"

export const addPointsToFirestore = async (points: number) => {
  try {
    const currentPoints = await getPoints()
    const docRef = doc(db, "data", "points")
    await updateDoc(docRef, { value: currentPoints + points })
    console.log("Document written with ID:")
  } catch (e) {
    console.error(e)
  }
}
