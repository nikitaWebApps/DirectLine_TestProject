export interface Offer {
  id: string
  imageSrc: string
  name: string
  category: OfferCategory
  city: string
  seller: string
  kind: string[]
  description: string
  amount: number
  price: number
  isFavourite?: boolean
}

type OfferCategory = { name: 'Аукцион'; slug: 'auction' } | { name: 'Прямые продажи'; slug: 'direct' }

export type FilterType = 'all' | 'direct' | 'auction'

