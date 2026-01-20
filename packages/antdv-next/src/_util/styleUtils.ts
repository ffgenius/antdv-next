export function formatUnit(value: string | number | undefined | null): string | undefined {
  if (value === undefined || value === null) {
    return undefined
  }
  if (typeof value === 'number') {
    return `${value}px`
  }
  if (typeof value === 'string' && !value.endsWith('px') && !Number.isNaN(Number(value))) {
    return `${value}px`
  }
  return value
}
