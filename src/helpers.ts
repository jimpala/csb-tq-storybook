export const numberToSignedString = (n: number): string => {
  return `${n * -1 > 0 ? "-" : "+"}${n}`
}
