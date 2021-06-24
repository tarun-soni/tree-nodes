import { atom } from 'recoil'

export const arrOfParents = atom({
  key: 'arrOfParents',
  default: []
})
export const depth = atom({
  key: 'depth',
  default: 0
})
