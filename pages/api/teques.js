// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const teques = [
  {
    id: 5,
    title: 'Tequeño clasico',
    description: 'Tequeño con queso',
    url: 'teque-clasico',
    img: /* /public */ '/img/teque.jpg',
    price: 1.4
  },
  {
    id: 6,
    title: 'Tequeño con chocolate',
    description: 'Tequeño con chocolate',
    url: 'teque-chocolate',
    img: /* /public */ '/img/arbol.jpg',
    price: 4
  },
  {
    id: 7,
    title: 'Tequeño con guayaba',
    description: 'Tequeño con guayaba',
    url: 'teque-guayaba',
    img: /* /public */ '/img/teque.jpg',
    price: 8.6
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.json(teques)
}
