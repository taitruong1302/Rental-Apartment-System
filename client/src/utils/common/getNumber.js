export const getNumberFromPrice = (string) => string.split(' ').map(item => +item).filter(item => !item === false)
export const getNumberFromAcreage = (string) => string.split(' ').map(item => +item.match(/\d+/)).filter(item => item !== 0)