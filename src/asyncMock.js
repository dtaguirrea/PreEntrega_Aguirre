const products = [{
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Planta",
      "Veneno"
    ],
    "stock":20,
    "price": 3180,
    "img":"https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Planta",
      "Veneno"
    ],
    "stock":20,
    "price": 4050,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/1200px-0002Ivysaur.png?20240116160522"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "type": [
      "Planta",
      "Veneno"
    ],
    "stock":20,
    "price": 5250,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/1200px-0003Venusaur.png?20240116150541"
  },
  {
    "id": 4,
    "name": "Charmander",
    "type": [
      "Fuego"
    ],
    "stock":20,
    "price": 3090,
    "img":"https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png?20240116165514"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "type": [
      "Fuego"
    ],
    "stock":20,
    "price": 4050,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/1200px-0005Charmeleon.png?20240116154739"
  },
  {
    "id": 6,
    "name":"Charizard",
    "type": [
      "Fuego",
      "Volador"
    ],
    "stock":20,
    "price": 5340,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/1200px-0006Charizard.png?20240116143423"
  },
  {
    "id": 7,
    "name":"Squirtle",
    "type": [
      "Agua"
    ],
    "stock":20,
    "price": 3140,
    "img":"https://archives.bulbagarden.net/media/upload/5/54/0007Squirtle.png?20240116163723"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "type": [
      "Agua"
    ],
    "stock":20,
    "price": 4050,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/1200px-0008Wartortle.png?20240116161929"
  },
  {
    "id": 9,
    "name":"Blastoise",
    "type": [
      "Agua"
    ],
    "stock":20,
    "price": 5300,
    "img":"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/1200px-0009Blastoise.png?20240116151312"
  }
]

export const getProducts = () => {
  return new Promise((resolve)=>{
    resolve(products)
  },500)
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 100)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 1000)
  })
}