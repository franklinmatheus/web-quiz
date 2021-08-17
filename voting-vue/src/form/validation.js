export function minLength(label, minLength, value) {
    if (!value) return null

    if (value.trim().length > 0 && value.trim().length < minLength)
      return label + " requer mais de " + minLength + " caracteres"
    return null
}
  
  export function required(label,value) {
    if (!value || value.trim() === '')
      return label + " é um campo obrigatório"
    return null
}
