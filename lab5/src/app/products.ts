export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number
}


export const products = [
  {
    id: 1,
    name: 'iPhone 13',
    price: 294138,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super , Retina XDR, который отличается невероятно высокой плотностью пикселей, — фотографии, видео и текст выглядят поразительно четко',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000ps://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-zelenyi-104184124/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 622955,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 3,
    name: 'iPad Air 2022',
    price: 293568,
    description: 'Инновационный чип Apple M1 обеспечивает более высокую производительность, превращая Ipad Air в мощный инструмент для творчества и мобильных игр.',
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-seryi-104235453/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h81/64382011146270.jpg?format=gallery-large',
    rating : 5,
    categoryName: 'Tablets',
    likes: 0
  },
  {
    id: 4,
    name: 'iPad Pro 2022',
    price: 414999,
    description: 'Изумительная производительность. Улучшенный дисплей. Сверхскоростное беспроводное соединение. Новые возможности Apple Pencil.',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-wi-fi-11-djuim-8-gb-128-gb-seryi-107276534/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h91/64895796412446.jpg?format=gallery-large',
    rating: 4,
    categoryName: 'Tablets',
    likes: 0
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    price: 548990,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 6,
    name: 'iPhone 15',
    price: 374372,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 7,
    name: 'MacBook Air 13 M1',
    price: 409499,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Notebooks',
    likes: 0
  },
  {
    id: 8,
    name: 'MacBook Air 13 M2',
    price: 539990,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Notebooks',
    likes: 0
  },
  {
    id: 9,
    name: 'Meta Quest 3',
    price: 320347,
    description: 'Quest 3 сочетает в себе дисплей с самым высоким разрешением на сегодняшний день и оптику pancake, чтобы контент выглядел лучше, чем когда-либо.',
    link: 'https://kaspi.kz/shop/p/meta-quest-3-512-gb-113525753/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=gallery-large',
    rating: 5,
    categoryName: 'Headsets',
    likes: 0
  },
  {
    id: 10,
    name: 'MacBook Pro 14',
    price: 975000,
    description: 'Маленький чип. Грандиозный прорыв.' + ' Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphe3-seryi-108645925/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h95/68379275755550.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Notebooks',
    likes: 0
  },
  {
    id: 11,
    name: 'Apple Vision Pro',
    price: 2089785,
    description: 'Apple Vision Pro, революционный пространственный компьютер.',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-256-gb-116472681/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hf9/85120232751134.png?format=preview-large',
    rating: 3,
    categoryName: 'Headsets',
    likes: 0
  },

];

