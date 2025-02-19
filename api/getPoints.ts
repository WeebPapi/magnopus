import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

export const getPoints = async () => {
  try {
    const docRef = doc(db, "data", "points")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const pointValue = docSnap.data()["value"]
      return pointValue
    } else {
      console.log("Not found")
      return null
    }
  } catch (e) {
    console.error(e)
    return null
  }
}
