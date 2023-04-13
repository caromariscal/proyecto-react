import itemData from '../data/itemData.json' assert { type: 'json' }
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'

const data = itemData.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db, 'productos')

data.forEach((item) => {
    addDoc(productosRef, item)
})