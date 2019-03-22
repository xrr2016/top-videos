export interface Channel {
  id: number
  title: string
  selected: boolean
}

export class Origin {
  index: number
  label: string
  channels: Channel[]

  constructor(index: number = 0, label: string = '', channels: Channel[] = []) {
    this.index = index
    this.label = label
    this.channels = channels
  }
}

// export enum Origin {
//   PEAR = 'PEAR',
//   ACFUN = 'ACFUN',
//   BILIBILI = 'BILIBILI'
// }
