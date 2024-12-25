import { defineStore } from 'pinia'
import type { FilterType, Offer } from '~/types'
let initialOffers: Offer[]
export const useOffersStore = defineStore('offers', () => {
  const offers = ref<Offer[]>([])
  const favouriteOffers = ref<Offer[]>([])
  const offersInDeals = ref<Offer[]>([])
  const payedOffers = ref<Offer[]>([])

  const isFilteringActive = ref(false)
  function setOffers(newOffers: Offer[]) {
    initialOffers = newOffers
    offers.value = newOffers.sort(sortByStatus)
  }

  function toggleFavourite(offerToAdd: Offer) {
    const chosenOffer = favouriteOffers.value.find(offer => offer.id == offerToAdd.id)
    if (chosenOffer) {
      const index = favouriteOffers.value.indexOf(chosenOffer)
      favouriteOffers.value.splice(index, 1)
    }
    if (!chosenOffer) {
      favouriteOffers.value.push(offerToAdd)
    }
  }

  function filterOffers(filterType: FilterType) {
    let newOffers = [...initialOffers]
    if (filterType == 'all') {
      isFilteringActive.value = false
      offers.value = newOffers
      return
    }
    isFilteringActive.value = true
    offers.value = newOffers.filter(offer => offer.category.slug == filterType)
  }

  function addToDeals(offerToAdd: Offer) {
    const chosenOffer = offersInDeals.value.find(offer => offer.id == offerToAdd.id)
    if (chosenOffer) {
      return
    }
    offersInDeals.value.push(offerToAdd)
  }

  function addToPayedOffers(offerToAdd: Offer) {
    const chosenOffer = payedOffers.value.find(offer => offer.id == offerToAdd.id)
    if (chosenOffer) {
      return
    }
    payedOffers.value.push(offerToAdd)
  }

  function sortByStatus(a: Offer, b: Offer) {
    const isPayed = (offer: Offer) => payedOffers.value.some(payedOffer => payedOffer.id == offer.id)
    if (!isPayed(a) && isPayed(b)) return -1
    if (isPayed(a) && !isPayed(b)) return 1
    return 0
  }

  function search(query: string) {
    const searchQuery = query.trim().toLowerCase()
    if (!searchQuery || searchQuery.trim().length === 0) {
      offers.value = initialOffers
      return
    }
    offers.value = offers.value.filter(offer => offer.name.toLowerCase().includes(searchQuery))
  }

  return {
    offers,
    favouriteOffers,
    setOffers,
    toggleFavourite,
    filterOffers,
    offersInDeals,
    addToDeals,
    addToPayedOffers,
    payedOffers,
    search,
  }
})

