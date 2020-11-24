// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const dulces = [
  {
    id: 1,
    title: 'Dulce de chocolate',
    description: 'Dulce de chocolate',
    url: 'dulce-chocolate',
    img: /* /public */ '/img/teque.jpg',
    price: 5
  },
  {
    id: 2,
    title: 'Pai de vainlla',
    description: 'Pai de vainlla',
    url: 'dulce-pai-vainilla',
    img: /* /public */ '/img/arbol.jpg',
    price: 3
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.json(dulces)
}
