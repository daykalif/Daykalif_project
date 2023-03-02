import { proxy } from 'valtio';

export const store = proxy({ count: 0 });
export const addCount = (c: number) => {
  store.count += c;
}