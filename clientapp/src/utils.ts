import Location from '../../common/Location';

export function fractionalPart(n: number) {
  return n - Math.floor(n);
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
