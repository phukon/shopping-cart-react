const CUR_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD', style: 'currency'
})

export function formatCurrency(number: number) {
  return CUR_FORMATTER.format(number)
}