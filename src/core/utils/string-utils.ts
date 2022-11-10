//
// https://stackoverflow.com/questions/27440917/change-any-type-of-string-to-title-case-in-javascript
export function phraseToTitleCase(s) {
  return (
    s
      // .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
      // .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
      // .toLowerCase()
      .replace(/(^\w|\b\w)/g, function (m) {
        return m.toUpperCase()
      }) // title case words
      .replace(/\s+/g, ' ') // collapse repeated whitespace
      .replace(/^\s+|\s+$/, '')
  ) // remove leading/trailing whitespace
}

export function titleize(s) {
  return phraseToTitleCase(s)
}

export function camelToTitleCase(s) {
  return (
    s
      .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
      // .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
      // .toLowerCase()
      .replace(/(^\w|\b\w)/g, function (m) {
        return m.toUpperCase()
      }) // title case words
      .replace(/\s+/g, ' ') // collapse repeated whitespace
      .replace(/^\s+|\s+$/, '')
  ) // remove leading/trailing whitespace
}

export function snakeToTitleCase(s) {
  return s
    .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
    .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
    .toLowerCase()
    .replace(/(^\w|\b\w)/g, function (m) {
      return m.toUpperCase()
    }) // title case words
    .replace(/\s+/g, ' ') // collapse repeated whitespace
    .replace(/^\s+|\s+$/, '') // remove leading/trailing whitespace
}

export function surnameCase(s) {
  let name = phraseToTitleCase(s.trim().toLowerCase())
  if (name.startsWith('Mc')) name = name.replaceAt(2, name[2].toUpperCase())
  if (name.startsWith('Mac')) name = name.replaceAt(3, name[3].toUpperCase())
  if (name.startsWith("O'")) name = name.replaceAt(2, name[2].toUpperCase())
  // todo if theres more pull these from a list
  return name
}

//-----------

export function slugify(name, id = 0) {
  // https://gist.github.com/codeguy/6684588#gistcomment-3777802
  let str = name ? name.replace(/^\s+|\s+$/g, '') : '' // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaaeeeeiiiioooouuuunc------'

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  if (id != 0) {
    str = `${id}-${str}`
  }
  return str
}

//---------------

// https://stackoverflow.com/a/3261380/505018
// for checking if a string is empty, null or undefined (doesnt check for whitespace) eg isEmpty(str)
export function isEmpty(str) {
  return !str || 0 === str.length
}

// for checking if a string is empty, only whitespace, null or undefined eg isBlank(str)
export function isBlank(str) {
  return !str || /^\s*$/.test(str)
}

// for checking if a string is blank or contains only white-space: eg if ( str.isEmpty() )
// @ts-ignore
String.prototype.isEmpty = function () {
  return this.length === 0 || !this.trim()
}

export function isPresent(str) {
  return !isBlank(str)
}

//---------------

// https://stackoverflow.com/a/1431113/505018
// @ts-ignore
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  )
}

export function lastWord(fullname: string): string | undefined {
  const names = fullname.split(' ')
  return names[names.length - 1]
}
