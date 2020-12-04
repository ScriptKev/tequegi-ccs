// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const tortas = [
  {
    id: 8,
    title: 'Torta clasica',
    description: 'Torta tipo Poque',
    url: 'torta-clasica',
    img: /* /public */ '/img/teque.jpg',
    price: 2.3
  },
  {
    id: 9,
    title: 'Torta de chocolate',
    description: 'Torta de chocolate',
    url: 'torta-chocolate',
    img: /* /public */ '/img/teque.jpg',
    price: 6.3
  },
  {
    id: 10,
    title: ' Torta de guayaba',
    description: 'Torta de guayaba',
    url: 'torta-guayaba',
    img: /* /public */ '/img/arbol.jpg',
    price: 6
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.json(tortas)
}
