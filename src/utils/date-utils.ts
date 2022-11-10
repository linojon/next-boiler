import { format } from 'date-fns'
import { isBlank } from './string-utils'

const currentYear = new Date().getFullYear()

export function formatDate(dateStr, abbreviated = false) {
  if (isBlank(dateStr)) return ''
  const date = new Date(dateStr)
  // if (abbreviated && date.getFullYear() == currentYear) {
  //   return format(date, 'd MMM')
  // } else {
  return abbreviated ? format(date, 'd MMM yyyy') : format(date, 'MMMM d, yyyy')
  // }
}

export function formatDateTime(dateStr) {
  if (isBlank(dateStr)) return ''
  const date = new Date(dateStr)
  return format(date, 'd MMM yyyy, HH:mm:ss')
}

export function formatForFilename(date) {
  return format(date, 'yyyyMMddHHmmss')
}
