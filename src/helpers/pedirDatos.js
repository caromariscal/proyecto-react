import itemData from '../data/itemData.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(itemData)
        }, 1500)
    })
}

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(itemData.find(prod => prod.id === id))
        }, 1500)
    })
}