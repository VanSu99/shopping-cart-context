/**
 * Calculate discount applied
 * @param {*} item - The product item object
 */

export default function getDiscount(item) {
  const price = item.price;
  const max_price = item.compare_at_price;
  const percent = ((max_price - price) / max_price) * 100;
  return `(${Math.floor(percent)}% OFF)`;
}
