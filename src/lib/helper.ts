export const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

export const removeDuplicatesAndToLowerCase = (items: string[]) => {
    const lowercaseItems = items.map((str) => str.toLowerCase())
    const distinctItems = new Set(lowercaseItems)
    return Array.from(distinctItems)
}
