/* Function to separate thousands with comma, add Ruble symbol */
export function formatPrice(price: string | number) {
  if (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ₽'
  }
}

