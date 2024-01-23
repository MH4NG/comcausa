export const categoriesData = [
  {
    id: '01',
    slug: 'venda',
    name: 'Venda',
  },
  {
    id: '02',
    slug: 'pintura',
    name: 'Pintura',
  },
  {
    id: '03',
    slug: 'agiotagem',
    name: 'Agiotagem',
  },
  {
    id: '04',
    slug: 'filmagem',
    name: 'Filmagem',
  },
]

export const servicesData = [
  {
    id: '01',
    slug: 'materiais-de-construcao-atados',
    name: 'Materiais de construção',
    image:
      'https://storage.googleapis.com/planet4-switzerland-stateless/2019/05/795ca9c4-795ca9c4-gp0strmec_pressmedia.jpg',
    state: 'SP',
    createdAt: '2019-07-13T14:35:00Z',
    description: {
      text: 'Vendemos todo tipo de material de construção, entre em contato para saber preços e quantidades',
    },
    contactPhone1: '(11) 2222-2222',
    contactEmail1: 'contato@atados.com',
    organization: {
      id: '01',
      name: 'Atados',
      slug: 'atados',
      description: {
        text: 'Juntos com venda de todo tipo de material de construção',
      },
    },
    category: {
      id: '01',
      slug: 'venda',
      name: 'Venda',
    },
  },
  {
    id: '02',
    slug: 'pintura-de-garagem',
    name: 'Pintura de Garagem',
    image:
      'https://casa.abril.com.br/wp-content/uploads/2016/11/pintura1.jpeg?quality=70&strip=all',
    state: 'SP',
    createdAt: '2021-07-13T14:35:00Z',
    description: {
      text: 'Fazemos pintura e venda de tintas, mas nosso maior destaque é o serviço de pintura',
    },
    contactPhone1: '(11) 2222-2222',
    contactEmail1: 'contato@garagem.com',
    organization: {
      id: '02',
      name: 'Garagem',
      slug: 'garagem',
      description: {
        text: 'Tudo barato e de qualidade, como uma venda de Garagem',
      },
    },
    category: {
      id: '02',
      slug: 'pintura',
      name: 'Pintura',
    },
  },
  {
    id: '03',
    slug: 'emprestimo-facil',
    name: 'Empréstimo Facil',
    image:
      'https://www.visaooeste.com.br/wp-content/uploads/2021/02/meme-senai-osasco-.jpeg',
    state: 'SP',
    createdAt: '2016-09-11T14:35:00Z',
    description: {
      text: 'Dinheiro facil, rapido, sem conferir seu nome. Destaque: Não matamos e batemos pouco quando atrasa.',
    },
    contactPhone1: '(11) 2222-2222',
    contactEmail1: 'pistoleiro@yahoo.com',
    organization: {
      id: '03',
      name: 'Pistoleiro Anonimo',
      slug: 'pistoleiro-anonimo',
      description: {
        text: 'Dinheiro facil, rapido, sem conferir seu nome.',
      },
    },
    category: {
      id: '03',
      slug: 'agiotagem',
      name: 'Agiotagem',
    },
  },
]
