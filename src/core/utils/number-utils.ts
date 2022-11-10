export function percent(count: number, total: number) {
  return Math.floor((count / total) * 100)
}

export function percentString(fraction: number, decimals: number = 0) {
  return (fraction * 100).toFixed(decimals) + '%'
}

export function percentAndCountString(
  count: number,
  total: number,
  decimals: number = 0
) {
  if (total == 0) return '(optional)'
  return `${percentString(count / total)}  (${count}/${total})`
}
