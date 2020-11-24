// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const panes = [
  {
    id: 1,
    title: 'Pan campesino',
    description: 'Pan campesino',
    url: 'pan-campesino',
    img: /* /public */ '/img/hamburguesa-3d.jpg',
    price: 3
  },
  {
    id: 2,
    title: 'Pan de chocolate',
    description: 'Pan de chocolate',
    url: 'pan-chocolate',
    img: /* /public */ '/img/arbol.jpg',
    price: 2.4
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.json(panes)
}
